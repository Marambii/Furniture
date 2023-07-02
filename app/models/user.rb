class User < ApplicationRecord
    has_many :furnishings, dependent: :destroy
    has_secure_password

end
