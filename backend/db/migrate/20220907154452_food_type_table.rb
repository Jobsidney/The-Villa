class FoodTypeTable < ActiveRecord::Migration[6.1]
  def change
    create_table :food_categories do |t|
    t.string :category
    end
  end
end

