// lightbox function
lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'showImageNumberLabel': false,
  'wrapAround': true
});

// search function

function searchFilter() {
    // defined variables for functiion
    let searchBox = $('input').val().toLowerCase();
    let imageList = $('.gallery a');
    let resultsFound = 0;

    //check for matching information in a[data-title] attribute
    imageList.each(function(i, image) {
        if ($(image).attr('data-title').search(searchBox) != -1) {
          $(image).show();
          resultsFound += 1;
        } else {
         $(image).hide();
        }
    });
}


// Running the searchFilter function through event trigger
$('input').keydown(searchFilter);
