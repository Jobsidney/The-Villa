class BakedGood < ActiveRecord::Base
  belongs_to :bakery

  # This method could also be written using a scope:
  # https://guides.rubyonrails.org/active_record_querying.html#scopes
  # scope :by_price, -> { order(price: :desc) }
  def self.by_price
    self.all.order(price: :desc)
  end

end
