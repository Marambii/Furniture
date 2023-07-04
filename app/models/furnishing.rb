class Furnishing < ApplicationRecord
  belongs_to :user

  validates :image, presence: true, uniqueness: true
  validates :price, presence: true
  validates :description, presence: true, uniqueness: true
  validates :category, presence: true
  validates :user, presence: true

end
