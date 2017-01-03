/* This is my code for adding hovering to the projects.*/
 
    $('.project').hover(
        function(){
            $(this).find('.description').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.description').slideUp(250); //.fadeOut(205)
        }
    ); 