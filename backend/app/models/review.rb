class Review < ActiveRecord::Base
    belongs_to :food
    belongs_to :user
  end
end