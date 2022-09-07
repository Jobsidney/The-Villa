class Users < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :full_Name
      t.string :email
      t.string :password
      t.string :password_Confirming
      t.timestamps
    end
  end
end
