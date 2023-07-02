class User < ApplicationRecord
    has_many :furnishings, dependent: :destroy

    
end
