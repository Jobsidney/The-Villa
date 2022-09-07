class Reviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :review
      t.integer :rating
      t.integer :user_id
      t.integer :meal_id
    end
  end
end
