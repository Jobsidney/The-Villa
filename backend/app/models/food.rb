class Food < ActiveRecord::Base
    belongs_to :food_categories
    has_many :reviews
    has_many :users, through: :reviews
    
end