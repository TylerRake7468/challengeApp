module Api
    module V1
        class ChallengesController < ApplicationController
            before_action :authenticate_user!, only: %i[ create update destroy]
            before_action :set_challenge, only: %i[update show destroy]
            before_action :authorize_admin, only: %i[create update destroy]

            def index
                @challenges = Challenge.all
                render json: @challenges
            end

            def create
                @challenge = current_user.challenges.build(challenge_params)
                if @challenge.save
                    render json: {message: "Challenge create successfully.", data: @challenge}
                else
                    render json: {message: "Failed to create challenge.", data: @challenge.errors}, status: :unauthorized
                end
            end

            def show
                if @challenge
                    render json: {message: "Challenge found.", data: challenge}
                else
                    render json: {message: "Challenge not found"}
                end
            end

            def edit
            end

            def update
                if @challenge.update(challenge_params)
                    render json: {message: "Challenge successfully updated.", data: challenge}
                else
                    render json: {message: "Failed to update challenge", data: challenge.errors}
                end      
            end

            def destroy
                if @challenge.destroy
                    render json: {message: "Challenge successfully deleted.", data: challenge}
                else
                    render json: {message: "Failed to delete challenge", data: challenge.errors}
                end  
            end

            def active_and_upcoming
                @active = Challenge.active
                @upcoming = Challenge.upcoming
                render json: {active: @active, upcoming: @upcoming}
            end

            private

            def challenge_params
                params.require(:challenge).permit(:title, :description, :start_date, :end_date)
            end

            def set_challenge
                @challenge = Challenge.find(params[:id])
            end

            def authorize_admin
                return render json: { message: "Forbidden Action" }, status: :unauthorized unless current_user&.email == ENV['ADMIN_EMAIL']
            end
        end
    end
end