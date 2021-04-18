class CreatePatterns < ActiveRecord::Migration[6.1]
  def change
    create_table :patterns do |t|
      t.string :title, null: false
      t.binary :img, null: false
      t.integer :author_id, null:false

      t.timestamps
    end
  end
end
