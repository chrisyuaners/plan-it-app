# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_21_214212) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "trip_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "author_id"
    t.index ["trip_id"], name: "index_comments_on_trip_id"
  end

  create_table "destinations", force: :cascade do |t|
    t.string "city"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
  end

  create_table "expenses", force: :cascade do |t|
    t.bigint "trip_id"
    t.string "item"
    t.float "cost"
    t.integer "count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_expenses_on_trip_id"
  end

  create_table "itineraries", force: :cascade do |t|
    t.bigint "user_trip_id"
    t.string "departure"
    t.string "arrival"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_trip_id"], name: "index_itineraries_on_user_trip_id"
  end

  create_table "itinerary_destinations", force: :cascade do |t|
    t.bigint "itinerary_id"
    t.bigint "destination_id"
    t.boolean "from"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["destination_id"], name: "index_itinerary_destinations_on_destination_id"
    t.index ["itinerary_id"], name: "index_itinerary_destinations_on_itinerary_id"
  end

  create_table "todos", force: :cascade do |t|
    t.bigint "trip_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_todos_on_trip_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "start_date"
    t.string "end_date"
    t.string "title"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "creator_id"
  end

  create_table "user_trips", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "trip_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_user_trips_on_trip_id"
    t.index ["user_id"], name: "index_user_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar"
    t.string "username"
    t.string "password_digest"
  end

  add_foreign_key "comments", "trips"
  add_foreign_key "expenses", "trips"
  add_foreign_key "itineraries", "user_trips"
  add_foreign_key "itinerary_destinations", "destinations"
  add_foreign_key "itinerary_destinations", "itineraries"
  add_foreign_key "todos", "trips"
  add_foreign_key "user_trips", "trips"
  add_foreign_key "user_trips", "users"
end
