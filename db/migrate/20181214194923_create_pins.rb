class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description
      t.string :link
      t.timestamps
    end
    add_index :pins, :user_id
  end
end
