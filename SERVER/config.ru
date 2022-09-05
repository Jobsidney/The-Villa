require_relative './config/environment'

# Parse JSON from the request body into the params hash
use Rack::JSONBodyParser

run ApplicationController
