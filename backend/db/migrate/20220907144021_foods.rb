class Foods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :meal_name
      t.string :description
      t.string :food_type
      t.string :price
      t.string :image
    end
  end
end
