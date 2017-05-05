$("[data-fancybox]").fancybox({
  slideShow  : false,
  fullScreen : false,
  thumbs     : false,
  closeBtn   : true,
	});

var broj = $("li a").length;

$("#search").attr("placeholder", "Search (" + broj + "pt)");


var $galleryImage = $(".gallery-image");

$("#search").keyup(function() {
    var term = $.trim($(this).val()).toLowerCase();
    $galleryImage.each(function() {
        //Get the alt text for each image in the gallery
        var altText = $(this).children("a").attr("data-caption").toLowerCase();
        //Check inside the alt text for each image
        if (altText.indexOf(term) > -1) {
            $(this).removeClass("hide").fadeIn(1000); //Show elements that fit the search criteria
        } else {
            $(this).fadeOut(500).addClass("hide"); //Hide elements that don't fulfil the search criteria

        }

    });
});
