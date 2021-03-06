### UTILITY METHODS ###

def create_visitor
  @visitor ||= { first_name: "Testy", last_name: "McUserton", username: 'testymcuserton', email: "user@example.com",
    password: "password", password_confirmation: "password" }
end

def find_user
  @user ||= User.first conditions: {:email => @visitor[:email]}
end

def create_unconfirmed_user
  create_visitor
  sign_up
  visit '/accounts/sign_out'
end

def create_user
  create_visitor
  @user = create(:user, email: @visitor[:email], username: @visitor[:username], password: @visitor[:password], password_confirmation: @visitor[:password_confirmation])
end

def delete_user
  @user ||= User.first conditions: {:email => @visitor[:email]}
  @user.destroy unless @user.nil?
end

def sign_up
  visit '/accounts/sign_up'
  fill_in 'First name', :with => @visitor[:first_name]
  fill_in 'Last name', :with => @visitor[:last_name]
  fill_in 'Email', :with => @visitor[:email]
  fill_in 'Username', :with => @visitor[:username]
  fill_in 'Password', :with => @visitor[:password]
  fill_in 'Retype password', :with => @visitor[:password_confirmation]
  click_button "Sign up"
  find_user
end

def sign_in
  visit '/accounts/sign_in'
  fill_in "Email", :with => @visitor[:email]
  fill_in "Password", :with => @visitor[:password]
  click_button "Sign in"
end

### GIVEN ###

Given(/^a user exists$/) do
  @user = create(:user)
end

Given /^I am not logged in$/ do
  visit '/accounts/sign_out'
end

Given /^I am logged in$/ do
  create_user
  sign_in
end

Given /^I exist as a user$/ do
  create_user
  @list = @user.categories.first
end

Given /^I do not exist as a user$/ do
  create_visitor
end

Given /^I exist as an unconfirmed user$/ do
  create_unconfirmed_user
end

### WHEN ###
When /^I sign in with valid credentials$/ do
  sign_in
end

When /^I sign out$/ do
  visit '/accounts/sign_out'
end

When /^I sign up with valid user data$/ do
  create_visitor
  sign_up
end

When /^I sign up with an invalid email$/ do
  create_visitor
  @visitor = @visitor.merge(:email => "notanemail")
  sign_up
end

When /^I sign up without a password confirmation$/ do
  create_visitor
  @visitor = @visitor.merge(:password_confirmation => "")
  sign_up
end

When /^I sign up without a password$/ do
  create_visitor
  @visitor = @visitor.merge(:password => "")
  sign_up
end

When /^I sign up with a mismatched password confirmation$/ do
  create_visitor
  @visitor = @visitor.merge(:password_confirmation => "please123")
  sign_up
end

When /^I return to the site$/ do
  visit '/'
end

When /^I sign in with a wrong email$/ do
  @visitor = @visitor.merge(:email => "wrong@example.com")
  sign_in
end

When /^I sign in with a wrong password$/ do
  @visitor = @visitor.merge(:password => "wrongpass")
  sign_in
end

When /^I edit my account details$/ do
  click_link 'Profile'
  fill_in 'First name', :with => 'new'
  fill_in 'Last name', :with => 'name'
  fill_in 'Username', :with => 'newname'
  fill_in 'Current password', :with => @visitor[:password]
  click_button 'Update'
end

When /^I look at the list of users$/ do
  visit '/'
end

When(/^I visit my profile today$/) do
  @date = Date.today
  visit '/'
end

### THEN ###
Then /^I should be signed in$/ do
  page.should have_content @user.full_name
  page.should_not have_content "Sign up"
  page.should_not have_content "Login"
end

Then /^I should be signed out$/ do
  page.should have_content "Sign Up"
  page.should have_content "Login"
  page.should_not have_content "Logout"
end

Then /^I see an unconfirmed account message$/ do
  page.should have_content "You have to confirm your account before continuing."
end

Then /^I see a successful sign in message$/ do
  page.should have_content "Signed in successfully."
end

Then /^I should see a successful sign up message$/ do
  page.should have_content "Thank you"
end

Then /^I should see an invalid email message$/ do
  page.should have_content "Emailis invalid"
end

Then /^I should see a missing password message$/ do
  page.should have_content "Password can't be blank"
end

Then /^I should see a missing password confirmation message$/ do
  page.should have_content "Password doesn't match confirmation"
end

Then /^I should see a mismatched password message$/ do
  page.should have_content "Password doesn't match confirmation"
end

Then /^I should see a signed out message$/ do
  page.should have_content "Signed out successfully."
end

Then /^I see an invalid login message$/ do
  page.should have_content "Invalid email or password."
end

Then /^I should see an account edited message$/ do
  page.should have_content "You updated your account successfully."
end

Then /^I should see my name$/ do
  create_user
  page.should have_content @user[:name]
end

Then(/^I should see the standard UI$/) do
  page.should have_content @user.full_name
  page.should have_content 'dunzo'
  page.should have_content 'Calendar'
  page.should have_content 'Lists'
  page.should have_content @date.strftime("%A, %B %e, %Y")
end
