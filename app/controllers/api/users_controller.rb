class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def new
        @user= User.new
        render 'api/users/new'
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: @user.errors.full_messages, status: :not_found
        end
    end


    def show
        @user = User.find(params[:id])
        if @user
          render :show
        else
          render json: @user.errors.full_messages, status: 404
        end
    end
  

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
          redirect_to user_url(@user)
        else
          render json: @user.errors.full_messages, status: 422
        end
    end
    
    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
