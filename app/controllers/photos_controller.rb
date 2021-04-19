class PhotosController < ApplicationController
    def update
        if params[:file]
          # The data is a file upload coming from <input type="file" />
          @patient.image.attach(params[:file])
          # Generate a url for easy display on the front end 
          photo = url_for(@patient.image)
        else
          # Maybe we want to just store a url or the raw Base64 data
          photo = photo_params[:photo]
        end
          # Now save that url in the profile
        if @patient.update(photo: photo)
          render json: @patient, status: :ok
        end
      end
end
