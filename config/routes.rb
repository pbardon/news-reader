NewReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :destroy, :show] do
      resources :entries, only: [:index]
    end
  end

  root to: "static_pages#index"
end
