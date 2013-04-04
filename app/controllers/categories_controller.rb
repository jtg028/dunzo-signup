class CategoriesController < ApplicationController

  before_filter :get_user, only: [:index, :update, :show, :destroy]

  respond_to :html, :json

  has_mobile_fu
  def index
    @categories = @user.categories.order('created_at ASC')
    @date = params[:date] ? Date.parse(params[:date]) : Date.today

    respond_to do |format|
      format.js
    end
  end

  def new
    @category = Category.new
  end

  def update
    @category = @user.categories.find_by_category_uid(params[:category_uid]) || Category.find(params[:id])
    @categories = @user.categories.order('created_at ASC')

    if @category.update_attributes(params[:category])
       respond_with_bip(@category)
    else
       respond_with_bip(@category)
    end
  end

  def show
    @category = @user.categories.find_by_category_uid(params[:category_uid])
    @categories = @user.categories.order('created_at ASC')
    @date = params[:date] ? Date.parse(params[:date]) : Date.today

    if is_mobile_device?
      render 'show.mobile.haml'
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    @last = @user.categories.last

    count = @user.categories.count
    if count < 1
      @link = username_path(@user.slug)
    else
      @link = username_category_path(@user.slug, @last.category_uid)
    end

    respond_to do |format|
      format.html{ redirect_to @link }
      format.js { render :js => "window.location.href = '#{@link}'" }
    end

  end

  def create
    @user = User.find(params[:user_id])
    @category = @user.categories.create(params[:category])
    @category.set_category_uid

    if @category.save
      redirect_to username_category_path(@user.slug, @category.category_uid)
    else
      render 'new'
    end
  end

  private

    def get_user
      @user =  User.find_by_slug(params[:user_slug]) || current_user
    end
end
