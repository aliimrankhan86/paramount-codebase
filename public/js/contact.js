( function ( $ ) { 
	'use strict';

    var paraTag = $('.contact-form #submit').parent('div');

    $(paraTag).children('input').remove();
    $(paraTag).append('<input  class="button button-wayra" type="button" name="submit" id="submit" value="Send Message" />');

    $('#contact-form #submit').click(function() {
        var name = $('input#name').val();
        var email = $('input#email').val();
		var subject = $('input#subject').val();
        var message = $('textarea#message').val();
        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        if (name == '')
        {
            $('[name="name"]').addClass('vaidate_error');
        } else {
            $('[name="name"]').removeClass('vaidate_error');
        }

        if (email == '')
        {
            $('[name="email"]').addClass('vaidate_error');
        } else {
            if (!pattern.test(email)) {
                $('[name="email"]').addClass('vaidate_error');
            } else {
                $('[name="email"]').removeClass('vaidate_error');
            }
        }


        if (message == "")
        {
            $('[name="message"]').addClass('vaidate_error');
        } else {
            $('[name="message"]').removeClass('vaidate_error');
        }
        if (subject == "")
        {
            $('[name="subject"]').addClass('vaidate_error');
        } else {
            $('[name="subject"]').removeClass('vaidate_error');
        }

        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message,
            success: function(results) {
                $('div#response').html(results).css('display', 'block');

            }
        }); // end ajax
    });



    $('#project-inquiry #submit2').click(function() {
		
        var projectname = $('input#project-name').val();
        var projectemail = $('input#project-email').val();
        var projectservice = $('select#project-service').val();
		var projectbudget = $('select#project-budget').val();
        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
       
        if (projectname == "")
        {
            $('[name="project-name"]').addClass('vaidate_error');
        } else {
            $('[name="project-name"]').removeClass('vaidate_error');
        }

        if (projectemail == "")
        {
            $('[name="project-email"]').addClass('vaidate_error');
        } else {
            if (!pattern.test(projectemail)) {
                $('[name="project-email"]').addClass('vaidate_error');
            } else {
                $('[name="project-email"]').removeClass('vaidate_error');
            }
        }


        if (projectservice == "")
        {
            $('[name="project-service"]').addClass('vaidate_error');
        } else {
            $('[name="project-service"]').removeClass('vaidate_error');
        }
        if (projectbudget == "")
        {
            $('[name="project-budget"]').addClass('vaidate_error');
        } else {
            $('[name="project-budget"]').removeClass('vaidate_error');
        }

        $.ajax({
            type: 'post',
            url: 'sendProjectdetailEmail.php',
            data: 'name=' + projectname + '&email=' + projectemail + '&projectservice=' + projectservice + '&projectbudget=' + projectbudget,
            success: function(results) {
				
                $('div#response2').html(results).css('display', 'block');

            }
        }); // end ajax
    });
} ( jQuery ) );
		