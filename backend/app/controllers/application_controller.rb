class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your proje!" }.to_json
  end
  get "/foods" do
    users=User.all
    puts users
    users.to_json
  end

end
