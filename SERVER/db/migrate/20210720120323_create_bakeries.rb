class CreateBakeries < ActiveRecord::Migration[6.1]
  def change
    create_table :bakeries do |t|
      t.string :name
      t.timestamps
    end
  end
end
