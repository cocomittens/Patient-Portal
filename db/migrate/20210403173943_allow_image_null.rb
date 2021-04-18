class AllowImageNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :patterns, :img, true
  end
end
