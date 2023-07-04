class FurnishingsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    # Get all furniture
    def index
        furniture = Furnishing.all
        render json: furniture.as_json(include: :user,except: [:password_digest])
    end

     # Get single furniture
    def show
        furniture = Furnishing.find_by(id: params[:id]) 
        if furniture
            render json: furniture.as_json(include: :user,except: [:password_digest]) 
        else
            render json: {error: "Post not found"}, status: :not_found
        end
    end 

    # Add new Furniture
    def create
        furniture = @current_user.furnishings.create(image: params[:image], price: params[:price], description: params[:description], category: params[:category],rating: params[:rating])
        if furniture.valid?
            render json: {success: "Furniture added successfully"}, status: :created
        else
            render json: { error: 'Check for empty values or if similar furniture already exists in our db' }, status: :unprocessable_entity
        end

    end

    # Update furniture
    def update
        furniture = Furnishing.find_by(id: params[:id]) 

        if furniture 
            if furniture.valid?
                furniture.update(image: params[:image], price: params[:price], description: params[:description], category: params[:category],rating: params[:rating])
                render json: {success: "Post updated successfully"}, status: :created
            else
                render json: { error: 'similar furniture already exists in our db' }, status: :unprocessable_entity
            end

        else
            render json: {error: "Furniture You are trying to update was not found"}, status: :not_found
        end
    end

    # Delete furniture
    def destroy
        furniture = Furnishing.find_by(id: params[:id]) 

        if furniture
            furniture.destroy
            render json: {success: "Furniture deleted successfully"}, status: :no_content

        else
            render json: {error: "Furniture you are trying to delete does not exist"}, status: :not_found
        end
    end
end