$(function() {
	var currentVisible = {};

	var showText = function(element) {
		hideOpenOnes(function() {
			$($(element).prev()[0]).addClass("visible");
	  	$(element).addClass("hidden");
		});
	};

	var hideOpenOnes = function(cb) {
		var textcontainer = null;
		var readmore = null;

		$('.columns').each(function(index, element) {
			textcontainer = $(element).find('span.close')[0];
			readmore = $(element).find('div.readMore.hidden')[0];

			if(readmore) {
				hideText(textcontainer, readmore);
			}
		});

		cb();
	};

	var hideText = function(textcontainer, readmore) {
	  $($(textcontainer).parent()[0]).removeClass("visible");
	  $(readmore).removeClass("hidden");
	};

	$(".readMore").click(function(element) {
		showText(element.currentTarget);
	});

	$(".close").click(function(element) {
		hideText(element.currentTarget, $($(element.currentTarget).closest('div').next()[0]));
	});
});