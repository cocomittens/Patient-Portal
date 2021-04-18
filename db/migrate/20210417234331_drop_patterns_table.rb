class DropPatternsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :patterns
  end
end
