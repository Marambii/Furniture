class FurnishingsController < ApplicationController
    
    def index
        furniture = Furnishing.all
        render json: furniture.as_json(include: :user,except: [:password_digest])
    end

    def show
        post = Post.find_by(id: params[:id]) #value or null
        if post
            render json: post.as_json(include: :user)
            
        else
            render json: {error: "Post not found"}, status: :not_found

        end
    
    end 
end