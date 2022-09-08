class ChangeReviewFoodColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :reviews, :meal_id, :food_id
  end
end
