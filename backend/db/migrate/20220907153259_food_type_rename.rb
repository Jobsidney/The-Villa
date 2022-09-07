class FoodTypeRename < ActiveRecord::Migration[6.1]
  def change
    change_column(:foods, :food_type, :integer)
  end
end
