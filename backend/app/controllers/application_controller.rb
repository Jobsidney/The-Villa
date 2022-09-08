class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  # get "/" do
  #   { message: "Good luck with your proje!" }.to_json
  # end


  get "/users" do
    users=User.all.to_json
    users
  end

  get "/reviews" do
    Review.all.to_json
  end

  get "/foods" do
      Food.all.to_json
  end
  



  #users data API
  get "/users" do
    User.all.to_json
  end

  post "/users" do
    user=User.create(
      full_Name: params[:full_Name],
      email: params[:email],
      password: params[:password],
      password_Confirming: params[:password_Confirming],
    )
    review.to_json
  end

end
