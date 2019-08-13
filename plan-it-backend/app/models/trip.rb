class Trip < ApplicationRecord
  has_many :user_trips, dependent: :delete_all
  has_many :users, through: :user_trips
  has_many :todos, dependent: :delete_all
  has_many :expenses, dependent: :delete_all
  has_many :comments, dependent: :delete_all
end
