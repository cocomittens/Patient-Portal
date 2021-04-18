class Api::PatientsController < ApplicationController
  def new
    @patient= Patient.new
    render 'api/patients/new'
end

def create
    @patient = Patient.new(patient_params)
    if @patient.save
        render json: @patient
    else
        render json: @patient.errors.full_messages, status: :not_found
    end
end


def show
    @patient = Patient.find(params[:id])
    if @patient
      render :show
    else
      render json: @patient.errors.full_messages, status: 404
    end
end


def update
    @patient = Patient.find(params[:id])
    if @patient.update(patient_params)
      redirect_to patient_url(@patient)
    else
      render json: @patient.errors.full_messages, status: 422
    end
end

private
def patient_params
    params.require(:patient).permit(:email, :dob, :name, :phone, :address, :user_id)
end
end
