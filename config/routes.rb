Rails.application.routes.draw do
  namespace :api do
    get 'patients/index'
  end
  root 'root#root'
  namespace :api, defaults: {format: :json} do\
    resources :users, only: [:show, :new, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :patients
  end
end