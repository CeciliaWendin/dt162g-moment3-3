// Delete course
$(document).on('click', 'button', function() {
   $.ajaxSetup({
       url: 'http://localhost:3000/'+this.id,
      type: 'DELETE',
        dataType: "json",    		
        success: function(deleteCourse){
           location.reload();
      }	    	  	
    });
     $.ajax();

  });