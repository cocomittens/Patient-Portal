class AddYarnGrid < ActiveRecord::Migration[6.1]
  def change
    add_column :patterns, :yarn_grid, :json
  end
end
