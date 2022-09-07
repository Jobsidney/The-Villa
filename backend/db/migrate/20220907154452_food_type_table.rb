class FoodTypeTable < ActiveRecord::Migration[6.1]
  def change
    create_table :food_Category do |t|
    t.string :Category
    end
  end
end

