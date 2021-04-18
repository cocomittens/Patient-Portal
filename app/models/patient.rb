class Patient < ApplicationRecord
    belongs_to :User,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
