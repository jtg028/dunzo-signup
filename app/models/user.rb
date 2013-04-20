class User < ActiveRecord::Base
  rolify
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  extend FriendlyId
  friendly_id :username, use: [:history, :slugged]

  # Setup accessible (or protected) attributes for your model
  attr_accessible :first_name, :last_name, :username, :email, :password, :password_confirmation, 
                   :remember_me, :opt_in

  after_create :add_user_to_mailchimp unless Rails.env.test?
  before_destroy :remove_user_from_mailchimp unless Rails.env.test?
  #after_create :send_welcome_email
  after_create :assign_initial_list

  has_many :categories, dependent: :destroy
  has_many :tasks, :through => :categories
  # override Devise method
  # no password is required when the account is created; validate password when the user sets one
  validates_confirmation_of :password
  validates :username, presence: true, uniqueness: true

  def tasks_to_roll_forward
    self.tasks.where(complete: false).where("date < ?", Date.today)
  end

  def roll_tasks_forward
    self.tasks_to_roll_forward.each do |task|
      task.update_attributes(date: Date.today)
    end
  end

  def password_required?
    if !persisted?
      !(password != "")
    else
      !password.nil? || !password_confirmation.nil?
    end
  end

  def full_name
    if self.first_name.present? && self.last_name.present?
      "#{self.first_name} #{self.last_name}"
    else
      "#{self.email}"
    end
  end

  # override Devise method
  #def confirmation_required?
    #false
  #end

  # override Devise method
  def active_for_authentication?
    confirmed? || confirmation_period_valid?
  end

  # new function to set the password
  def attempt_set_password(params)
    p = {}
    p[:password] = params[:password]
    p[:password_confirmation] = params[:password_confirmation]
    update_attributes(p)
  end

  # new function to determine whether a password has been set
  def has_no_password?
    self.encrypted_password.blank?
  end

  # new function to provide access to protected method pending_any_confirmation
  def only_if_unconfirmed
    pending_any_confirmation {yield}
  end

  private

  #def send_welcome_email
    #unless self.email.include?('@example.com') && Rails.env != 'test'
      #UserMailer.welcome_email(self).deliver
    #end
  #end

  def add_user_to_mailchimp
    unless self.email.include?('@example.com') or !self.opt_in?
      mailchimp = Hominid::API.new(ENV["MAILCHIMP_API_KEY"])
      list_id = mailchimp.find_list_id_by_name "visitors"
      info = { }
      result = mailchimp.list_subscribe(list_id, self.email, info, 'html', false, true, false, true)
      Rails.logger.info("MAILCHIMP SUBSCRIBE: result #{result.inspect} for #{self.email}")
    end
  end

  def remove_user_from_mailchimp
    unless self.email.include?('@example.com')
      mailchimp = Hominid::API.new(ENV["MAILCHIMP_API_KEY"])
      list_id = mailchimp.find_list_id_by_name "visitors"
      result = mailchimp.list_unsubscribe(list_id, self.email, true, false, true)
      Rails.logger.info("MAILCHIMP UNSUBSCRIBE: result #{result.inspect} for #{self.email}")
    end
  end

  def assign_initial_list
    @category = Category.create!(name: 'Dunzo')
    @category.user_id = self.id
    @category.set_category_uid
    @category.save
    @category.tasks.create(name: 'Make a new list', date: Date.today, position: 0)
    @category.tasks.create(name: 'Use the form in the sidebar to add one', date: Date.today, position: 1)
    @category.tasks.create(name: 'Add tasks to your new list', date: Date.today, position: 2)
  end
end
