Rails.application.routes.draw do

  resources :furnishings
  resources :users

  post "/login", to:"session#login"
  delete "/logout", to:"session#logout"
end
