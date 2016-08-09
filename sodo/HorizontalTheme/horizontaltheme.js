var state = 0; //state integer corresponds with the background image and content changes

//image load order
var image0 = "../pictures/muralpic_3.jpg";
var image1 = "../pictures/muralpic_6.jpg";
var image2 = "../pictures/muralpic_4.jpg";
var image3 = "../pictures/muralpic_5.jpg";
var image4 = "../pictures/muralpic_1.jpg";
var image5 = "../pictures/muralpic_2.jpg";


function hideBackButton() {
  $('#back').hide();
}

function hideFrontButton() {
  $('#forward').hide();
}

function showBackButton() {
  $('#back').show();
}
function showFrontButton() {
  $('#forward').show();
}

function updatePage() {
  switch(state)
  {
    case 0:
      $("#inner-body").fadeOut("slow","linear", function() {
          hideBackButton();
          $("#inner-body").css("background", image0);
          $("#inner-body").fadeIn();
      });
      break;
    case 1:
      $("#inner-body").fadeOut("slow","linear", function() {
          showBackButton();
          $("#inner-body").css("background", image1);
          $("#inner-body").fadeIn();
      });
      break;
    case 2:
      $("#inner-body").fadeOut("slow","linear", function() {
          $("#inner-body").css("background", image2);
          $("#inner-body").fadeIn();
      });
      break;
    case 3:
      $("#inner-body").fadeOut("slow","linear", function() {
          $("#inner-body").css("background", image3);
          $("#inner-body").fadeIn();
      });
      break;
    case 4:
      $("#inner-body").fadeOut("slow","linear", function() {
          showFrontButton();
          $("#inner-body").css("background", image4);
          $("#inner-body").fadeIn();
      });
      break;
    case 5:
      $("#inner-body").fadeOut("slow","linear", function() {
          hideFrontButton();
          $("#inner-body").css("background", image5);
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
    updatePage();
    $(".progress-bar").attr('aria-valuenow', (state * 16.67) + 16.67);
    $(".progress-bar").css('width', (state * 16.67) + 16.67 + '%');
  }
  else
  {
    console.log("State Min reached!");
  }
}
