# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# this is the controller path for the appilcation
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # this creates the BLogPostController model and allows it to be seen in the index.
    @posts = BlogPost.all
  end

  # ---3)
  # allows user to see a single blog post
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # creates a blog post form for user to fill out
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # creates a new blog post for the app
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    #  allows user to edit blog post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # allows user to update edited blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # allows user to delete blog post.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # allows user to has access to data entries inside appilcation
  private
  def blog_post_params
    # ---10)
    # allows blog post to require a title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
