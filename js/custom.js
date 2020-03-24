jQuery(document).ready(function($){
	var cloud_opts = {
		size: {
			grid: 5,
			factor: 0.1
		},
		options: {
			rotationRatio: 0.35,
		},
		color: {
			background: 'transparent',
			start: '#fff',
			end: '#fff'
		},
		font: 'DINRoundPro-Light, Arial, Verdana',
		shape: 'square'
	};
	$('#tags').awesomeCloud(cloud_opts);

	$('.header-account-avatar, .header-account-name').click(function() {
		$(this).parent('.header-account').toggleClass('header-account-active');
		$('.header-account-drop').slideToggle();
		return false;
	});
	$(document).click(function() {
		$('.header-account-drop').slideUp();
		$('.wallpaper-side-section-fav-drop').slideUp();
		$('.wallpaper-side-section-properties-source').fadeOut();
		$('.header-account').removeClass('header-account-active');
	});
	$('.header-account-drop, .wallpaper-side-section-fav-drop, .wallpaper-side-section-properties-source').click(function(e) {
		e.stopPropagation();
	});

	$('.select').styler();

	$('.user-profile-data-age label input, .search-filter-tags label input').each(function() {
		$(this).css({
			'position':'absolute',
			'left':'-500px',
			'top':'0',
			'opacity':'0',
			'width':'100%',
			'height':'100%'
		});
	});
	$('.user-profile-data-age label input, .search-filter-tags label input').each(function() {
		$('input:not(:checked)').parent().removeClass("user-profile-data-age-active");
		$('input:checked').parent().addClass("user-profile-data-age-active");
    });
    $('.user-profile-data-age label input, .search-filter-tags label input').click(function() {
		$('input:not(:checked)').parent().removeClass("user-profile-data-age-active");
		$('input:checked').parent().addClass("user-profile-data-age-active");
    });

    $('.btn-favorites').click(function() {
    	$('.wallpaper-side-section-fav-drop').slideToggle();
    	return false;
    });
    $('.wallpaper-side-section-properties-source-link').click(function() {
    	$('.wallpaper-side-section-properties-source').fadeIn();
    	return false;
    });

    $('.wallpaper-side-section-download-select').on('change', function() {
    	$(this).next('button').prop('disabled', false);
    });

    $('.wallpaper-side-section-get-link-type').each(function(i) {
		var storage = localStorage.getItem('tab' + i);
		if (storage) {
			$(this).find('li').removeClass('wallpaper-side-section-get-link-type-active').eq(storage).addClass('wallpaper-side-section-get-link-type-active').closest('.wallpaper-side-section-get-link').find('.wallpaper-side-section-get-link-box').removeClass('wallpaper-side-section-get-link-box-active').eq(storage).addClass('wallpaper-side-section-get-link-box-active');
		}
	});
	$('.wallpaper-side-section-get-link-type').on('click', 'li:not(.wallpaper-side-section-get-link-type-active)', function() {
		$(this).addClass('wallpaper-side-section-get-link-type-active').siblings().removeClass('wallpaper-side-section-get-link-type-active').closest('.wallpaper-side-section-get-link').find('.wallpaper-side-section-get-link-box').removeClass('wallpaper-side-section-get-link-box-active').eq($(this).index()).addClass('wallpaper-side-section-get-link-box-active');
		var ulIndex = $('.wallpaper-side-section-get-link-type').index($(this).parents('.wallpaper-side-section-get-link-type'));
		localStorage.removeItem('tab' + ulIndex);
		localStorage.setItem('tab' + ulIndex, $(this).index());
	});

	$('.tags-content').columnize();

	$('.user-side-section-title-link').click(function() {
		$(this).closest('.wallpaper-side-section').find('.user-side-section-list, .user-side-section-list-tags').slideToggle();
		return false;
	});

})
function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).val()).select();
	document.execCommand("copy");
	$temp.remove();
}