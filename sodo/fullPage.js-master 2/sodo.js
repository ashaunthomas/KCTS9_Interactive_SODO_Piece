var browserWidth = $(window).width();
var browserHeight = $(window).height();
$(document).ready(function() {
  $('#back').hide();
  $('motion').addClass('animated slideInLeft');

  $('#fullpage').fullpage({

    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      var leavingSlide = $(this);
      console.log(slideIndex);
      $(".progress-bar").css('width', nextSlideIndex * 14.2857142857 + '%');
      if(slideIndex==0 && direction == 'right') {
        showBackButton();
        $('#forward').removeClass('start');
        $('#forward').addClass('faf');
        $('.text-center').html('NEXT<span class="glyphicon glyphicon-chevron-right" style="vertical-align: middle display: table-cell"></span>');
      }
      if(slideIndex==6 && direction=='right'){
        hideFrontButton();
      }
      if(slideIndex==5 && direction=='left'){
        showFrontButton();
      }
      if(slideIndex==1 && direction=='left'){
        hideBackButton();
        $('#forward').removeClass('faf');
        $('#forward').addClass('start');
        $('.text-center').html('START<span class="glyphicon glyphicon-chevron-right" style="vertical-align: middle display: table-cell"></span>');
      }

    },

    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
    css3: true,
    loopHorizontal:false,
    controlArrows: false,
  });


  $('#video video').on('loadedmetadata', function() {

			var $width, $height, // Width and height of screen
				$vidwidth = this.videoWidth, // Width of video (actual width)
				$vidheight = this.videoHeight, // Height of video (actual height)
				$aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in

			(adjSize = function() { // Create function called adjSize

				$width = $(window).width(); // Width of the screen
				$height = $(window).height(); // Height of the screen

				$boxRatio = $width / $height; // The ratio the screen is in

				$adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size

				// Set the container to be the width and height of the screen
				$('#section0').css({'width' : $width+'px', 'height' : $height+'px'});

				if($boxRatio < $aspectRatio) { // If the screen ratio is less than the aspect ratio..
					// Set the width of the video to the screen size multiplied by $adjRatio
					$vid = $('#section0 video').css({'width' : $width*$adjRatio+'px'});
				} else {
					// Else just set the video to the width of the screen/container
					$vid = $('#section0 video').css({'width' : $width+'px'});
				}

			})(); // Run function immediately

			// Run function also on window resize.
			$(window).resize(adjSize);
			$('#video')[0].play();
		});

  $('#back').click(function() {
    $.fn.fullpage.moveSlideLeft();
  });

  $('#forward').click(function() {
    $.fn.fullpage.moveSlideRight();
  });

});

function showBackButton() {
  $('#back').fadeIn();
}
function showFrontButton() {
  $('#forward').fadeIn();
}
function hideBackButton() {
  $('#back').fadeOut();
}
function hideFrontButton() {
  $('#forward').fadeOut();
}

document.getElementById("#bgvideo").addEventListener('loadedmetadata',function() {
  this.currentTime = 10;
}, false);
