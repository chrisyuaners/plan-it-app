class ApplicationController < ActionController::API
  def session_user
    User.find(request.headers["Authorization"])
  end
end
