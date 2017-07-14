$(function() {
	var showText = function(element) {
		hideOpenOnes(function() {
			$($($($(element)).parent()).children()[0]).addClass('hidden');
			$($(element).prev()[0]).addClass('visible');
	  	$(element).addClass('hidden');
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
		$($($($($($(textcontainer)[0]).parent()).parent()).parent()).children()[0]).removeClass('hidden');
	  $($(textcontainer).parent().parent()[0]).removeClass('visible');
	  $(readmore).removeClass('hidden');
	};

	$('.readMore').click(function(element) {
		showText(element.currentTarget);
	});

	$('.project-picture').click(function(element) {
		console.log('click', element);
		showText(element.currentTarget);
	});

	$('.close').click(function(element) {
		hideText(element.currentTarget, $($($($(element.currentTarget)[0]).parent()).parent()).next()[0]);
	});

	$('.right').click(function(element) {
		var id = $(element.currentTarget).prev().attr('id');
		var current = $(element.currentTarget).prev().attr('src');
		var pictures = images[id];

		var fileNameIndex = current.lastIndexOf('/') + 1;
		var filename = current.substr(fileNameIndex);

		var next = pictures[($.inArray(filename, pictures) + 1) % pictures.length];

		$(element.currentTarget).prev().attr('src');
		$($(element.currentTarget).prev()).attr('src', './assets/images/' + next);
	});

		$('.left').click(function(element) {
		var id = $(element.currentTarget).next().attr('id');
		var current = $(element.currentTarget).next().attr('src');
		var pictures = images[id];

		var fileNameIndex = current.lastIndexOf('/') + 1;
		var filename = current.substr(fileNameIndex);

		var prev = pictures[($.inArray(filename, pictures) - 1 + pictures.length) % pictures.length];

		$(element.currentTarget).next().attr('src');
		$($(element.currentTarget).next()).attr('src', './assets/images/' + prev);
	});
});
