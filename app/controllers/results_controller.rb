class ResultsController < ApplicationController
  #include is inheritence to get the contents of the helper. 
  #This is to avoid writing repetative code and is therefore achieveing DRYness
  include UsersHelper

   #granting and limmiting access for different methods  
   before_action :set_result, only: [:show, :edit, :update, :destroy], except: [:parent_result, :update, :edit, :destroy]
  
   #extra security the password for teacher will have a password + the date = each day different
   @date = Time.now.strftime("%e")
   ###uncomment at the end
  #http_basic_authenticate_with :name => "@user", :password => @date + "123456", except: :parent_result

  #display results from newest to oldest = .order("created_at DESC").all
  #cannot add new result, maybe because all results of filters ar eon 1 page .order("created_at DESC").all
  # GET /results
  # GET /results.json
  def index
    #returning all the results in the DB for all the students
    #@results = Result.all

    #this is the longest and most complex method to get student's therefore won't use
    #get the current URI once on this page
    @URI = request.original_url
    #split the URI to get everything after the = sign
    @URI = @URI.split('=').last
    #take the % sign out of the string
    @URI = @URI.tr('%', '')
    #get everything befor 40 and everything after 40
    @splitEmailF =  @URI.split("40").first
    @splitEmailL =  @URI.split("40").last
    # to add between first and last in order to reconstruct the email
    @at="@"  
    @st=@splitEmailF.to_s+@at.to_s+@splitEmailL.to_s
    #saving the reconstructed email into a variable
    @emailFinal=@splitEmailF.to_s+@at.to_s+@splitEmailL.to_s
    #searching the DB to match all the results of a student with the unique email and displaying newst first
    @results= Result.order("created_at DESC").where("email like ? ",@emailFinal)
    
    #try change to just @resilts and to = Result.where("email like ? ",st)
    @resultsChart= Result.where("email like ? ", @emailFinal)
  end
  
  def parent_result
    
    #results for parents. Here is simplified because there was no need for extra steps like in index
    @URI = request.original_url
    #split the URI to get everything after the / sign
    @URI = @URI.split('/').last
    @URI = @URI.to_s
   
    #searching the DB to match all the results of a student with the unique email and displaying newst first
     @results= Result.order("created_at DESC").where("email like ? ", @URI)
    
    
    #try change to just @resilts and to = Result.where("email like ? ",st)
      @resultsChart= Result.where("email like ? ", @URI)
  end
  
  def teacher_result
  ##Result.last.destroy
    #get student's email backup method - also working but since global vars are not adivesed then other one is preffered.
    #needed for destroy redirection to the right student
      #this code is to get back to an appriopriate place
      #geting the URI of the current page
      $studentEmail = request.original_url
      #geting the email of the current student being worked on
      #bu splittin the URI into an array and getting the last element which would be an email
      $studentEmail =  $studentEmail.split('/')[-1]
      $userEmail = @user_email
     
      
    #results for parents. Here is simplified because there was no need for extra steps like in index
    @URI = request.original_url
    #split the URI to get everything after the / sign
    @URI = @URI.split('/').last
    @URI = @URI.to_s
    
    #searching the DB to match all the results of a student with the unique email and displaying newst first
     @results= Result.order("created_at DESC").where("email like ? ", @user_email)
    
    #try change to just @resilts and to = Result.where("email like ? ",st)
      @resultsChart= Result.where("email like ? ",@user_email)
  end

  # GET /results/1
  # GET /results/1.json
  def show
    
  end

  # GET /results/new
  def new
    #need to get the currnet user in order to display in the header
    @user = current_user
      
    #getting a firstname and surname to prefill in the _form
    @user_first_name= current_user
 @user_last_name= current_user
    
    @result = Result.new
  end

  # GET /results/1/edit
  def edit
    #need to get the currnet user in order to display in the header
    @user = current_user
    @user_first_name= current_user
    @user_last_name= current_user
    
    #finds the correct reuslt by id and stores into the result variable
    @result = Result.find(params[:id])
  end

  # POST /results
  # POST /results.json
  def create

    @result = Result.new(result_params)

    respond_to do |format|
      if @result.save
         #change on deployment 
         #format.html { redirect_to "https://schoolapple.herokuapp.com/results/teacher_result/#{$studentEmail}", notice: 'Result was successfully created.' }
         #format.html { redirect_to "https://deploy-vadimmalakhovski.c9users.io/results/teacher_result/#{$studentEmail}", notice: 'Result was successfully created.' }        
         ##format.html { redirect_to "http://f0759701829b460daf72059472399dc2.vfs.cloud9.us-east-1.amazonaws.com/results/teacher_result/#{$userEmail}", notice: 'Result was successfully created.' }
         format.html { redirect_to root_path }
         format.json { render :show, status: :created, location: @result }
      else
         format.html { render :new }
         format.json { render json: @result.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /results/1
  # PATCH/PUT /results/1.json
  def update

    
        #finds the correct reuslt by id and stores into the result variable
    @result = Result.find(params[:id])
    respond_to do |format|
      if @result.update(result_params)
        #going back to teacher page with the right student open
        #eddit the uri on diployment
        #format.html { redirect_to "https://schoolapple.herokuapp.com/results/teacher_result/#{$studentEmail}", notice: 'Result was successfully created.' }
        #format.html { redirect_to "https://deploy-vadimmalakhovski.c9users.io/results/teacher_result/#{$studentEmail}", notice: 'Result was successfully updated.' }

        ##format.html { redirect_to "http://f0759701829b460daf72059472399dc2.vfs.cloud9.us-east-1.amazonaws.com/results/teacher_result/#{$userEmail}", notice: 'Result was successfully created.' }
        format.html { redirect_to root_path }
        format.json { render :show, status: :ok, location: @result }
      else
        format.html { render :edit }
        format.json { render json: @result.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /results/1
  # DELETE /results/1.json
  def destroy

    
   #finds the correct reuslt by id and stores into the result variable
    @result = Result.find(params[:id])
    
    @result.destroy
    respond_to do |format|
      #redirecing back to current student on delete
      #needed a global variable to communicate between methods
      #change the link on deplyment!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      #format.html { redirect_to "https://e-schoolapple.herokuapp.com/results/teacher_result/#{$studentEmail}", notice: 'Result was successfully created.' }
      # format.html { redirect_to "https://deploy-vadimmalakhovski.c9users.io/results/teacher_result/#{$studentEmail}", notice: 'Result was successfully destroyed.' }

      ##format.html { redirect_to "http://f0759701829b460daf72059472399dc2.vfs.cloud9.us-east-1.amazonaws.com/results/teacher_result/#{$userEmail}", notice: 'Result was successfully created.' }
      format.html { redirect_to root_path }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_result
      @result = Result.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def result_params
       #params.permit(:date_time, :classes, :teacher, :grade, :email, :parent_email, :behaviour,:comment)
       params.require(:result).permit(:date_time, :classes, :teacher, :grade, :email,  :behaviour,:comment)
     
    end
end
