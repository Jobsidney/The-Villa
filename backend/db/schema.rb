# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_07_154452) do

  create_table "food_Category", force: :cascade do |t|
    t.string "Category"
  end

  create_table "foods", force: :cascade do |t|
    t.string "meal_name"
    t.string "description"
    t.integer "food_type"
    t.string "price"
    t.string "image"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "review"
    t.integer "rating"
    t.integer "user_id"
    t.integer "meal_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_Name"
    t.string "email"
    t.string "password"
    t.string "password_Confirming"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
