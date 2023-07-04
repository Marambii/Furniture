class User < ApplicationRecord
    has_many :furnishings, dependent: :destroy
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true

end
