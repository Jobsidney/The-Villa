class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "WELCOME TO VILLA RESTAURANT" }.to_json
  end


#REVIEWS
  get "/reviews" do
    Review.all.to_json(include: {user: {only: [:id,:full_Name ]}})
  end
  post "review" do
    Review.create(
      review: params[:review],
      rating: params[:rating],
      user_id: params[:user_id],
      food_id: params[:food_id]
    )
  end

  #FOOD DATA
  get "/foods" do
      Food.all.to_json
  end
  

  #USER DATA API
  get "/users/logins" do
    User.all.to_json(only: [:email, :password])
  end
  # get "/users/signup" do
  #   User.find_by(email: params[:email])
  # end

  #creating new user
  post "/users" do
    user=User.create(
      full_Name: params[:full_Name],
      email: params[:email],
      password: params[:password],
      password_Confirming: params[:password_Confirming],
    )
    user.to_json
  end

end
