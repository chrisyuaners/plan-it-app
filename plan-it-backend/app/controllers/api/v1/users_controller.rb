class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    # byebug
    user = User.new(full_name: params[:full_name], email: params[:email], avatar: params[:avatar], username: params[:username], password: params[:password])
    if user.save
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:full_name, :email, :avatar, :username, :password_digest)
  end
end
