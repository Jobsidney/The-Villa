class AddTimestamp < ActiveRecord::Migration[6.1]
  def change
    add_timestamps( :users)
  end
end
