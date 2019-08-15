Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      resources :trips
      resources :user_trips
      resources :todos
      resources :expenses
      resources :comments
      resources :itineraries
      resources :destinations
      resources :itinerary_destinations

      post "/signup", to: "users#create"
    end
  end
end
