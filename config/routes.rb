Rails.application.routes.draw do

  resources :furnishings
  resources :users

  post "/login", to:"session#login"
  delete "/logout", to:"session#logout"
  get "/current_user", to:"users#loggedin_user"

end
