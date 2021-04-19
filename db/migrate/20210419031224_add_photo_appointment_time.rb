class AddPhotoAppointmentTime < ActiveRecord::Migration[6.1]
  def change
    add_column :patients, :photo, :string
    add_column :patients, :appointment, :string
  end
end
