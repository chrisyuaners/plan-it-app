class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.references :trip, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
