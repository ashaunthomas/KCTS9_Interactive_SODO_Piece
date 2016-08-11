var state = 0; //state integer corresponds with the background image and content changes

//image load order
var image0 = "url('../pictures/muralpic_3.jpg') no-repeat center center fixed";
var image1 = "url('../pictures/muralpic_6.jpg') no-repeat center center fixed";
var image2 = "url('../pictures/muralpic_4.jpg') no-repeat center center fixed";
var image3 = "url('../pictures/muralpic_5.jpg') no-repeat center center fixed";
var image4 = "url('../pictures/muralpic_1.jpg') no-repeat center center fixed";
var image5 = "url('../pictures/muralpic_2.jpg') no-repeat center center fixed";

window.onload = function() {
  $(".progress-bar").attr('aria-valuenow', 16.67);
  $(".progress-bar").css('width', 16.67 + '%');
}

function hideBackButton() {
  $('#back').fadeOut();
}

function hideFrontButton() {
  $('#forward').fadeOut();
}

function showBackButton() {
  $('#back').fadeIn();
}
function showFrontButton() {
  $('#forward').fadeIn();
}

function updatePage() {
  switch(state)
  {
    case 0:
      hideBackButton();
      $("#inner-body").fadeOut("fast","linear", function() {
          $("#inner-body").css("background",image0);
          $("#inner-body").css("background-size","cover");
          $("#inner-body").fadeIn();
          $(".content").html("Ola Volo (BFA, Emily Carr University) is a Canadian illustrator from Kazakhstan with a distinctive style drawn from history, multiculturalism and folklore. Her work also lends itself often to the public realm with several of her murals helping to shape and beautify outdoor spaces in Vancouver.");
      });
      break;
    case 1:
      showBackButton();
      $("#inner-body").fadeOut("fast","linear", function() {
          $("#inner-body").css("background",image1);
          $("#inner-body").css("background-size","cover");
          $("#inner-body").fadeIn();
          $(".content").html("Joram Roukes is a Netherlands based artist, living and working in the city of Groningen. Blending graffiti roots with classically trained dexterity; Joram achieves a unique and inspired visual style with which he can communicate his many observations of the western world (optional link to his page)");

      });
      break;
    case 2:
      $("#inner-body").fadeOut("fast","linear", function() {
          $("#inner-body").css("background",image2);
          $("#inner-body").css("background-size","cover");
          $("#inner-body").fadeIn();
      });
      break;
    case 3:
      $("#inner-body").fadeOut("fast","linear", function() {
          $("#inner-body").css("background",image3);
          $("#inner-body").css("background-size","cover");
          $("#inner-body").fadeIn();
      });
      break;
    case 4:
      showFrontButton();
      $("#inner-body").fadeOut("fast","linear", function() {
          $("#inner-body").css("background",image4);
          $("#inner-body").css("background-size","cover");
          $("#inner-body").fadeIn();
      });
      break;
    case 5:
      hideFrontButton();
      $("#inner-body").fadeOut("fast","linear", function() {
          $("#inner-body").css("background",image5);
          $("#inner-body").css("background-size","cover");
          $("#inner-body").fadeIn();
      });
      break;
    default:
      console.log("Error wihin the updatePage() function!");
      break;
  }
}

function incrementState() {
  if(state < 6)
  {
    state++;
    console.log(state);
    updatePage();
    $(".progress-bar").attr('aria-valuenow', (state * 16.67) + 16.67);
    $(".progress-bar").css('width', (state * 16.67) + 16.67 + '%');
  }
  else
  {
    console.log("State Max reached!");
  }
}

function decrementState() {
  if(state > 0)
  {
    state--;
    console.log(state);
    updatePage();
    $(".progress-bar").attr('aria-valuenow', (state * 16.67) + 16.67);
    $(".progress-bar").css('width', (state * 16.67) + 16.67 + '%');
  }
  else
  {
    console.log("State Min reached!");
  }
}

$(document).ready(function() {
    $("#back").hide();
    $(".content").html("Ola Volo (BFA, Emily Carr University) is a Canadian illustrator from Kazakhstan with a distinctive style drawn from history, multiculturalism and folklore. Her work also lends itself often to the public realm with several of her murals helping to shape and beautify outdoor spaces in Vancouver.");
  }
);
