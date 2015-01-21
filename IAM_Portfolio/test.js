var expand1 = false;
var expand2 = false;
var expand3 = false;
var expand4 = false;
var expand5 = false;

var image1 = false;
var image2 = false;
var image3 = false;
var image4 = false;
var image5 = false;

var imageIndex1 = 1;
var imageIndex2 = 1;
var imageIndex3 = 1;
var imageIndex4 = 1;
var imageIndex5 = 1;

$('#icon1').on({
	'click': function(){
		if(expand1 === false) {
			expand1 = true;
			$('#icon1').animate({
				'top': '3%',
				'opacity': '0.7'
			}, 500);
			$('.bg').css('background-image','url(img/blink/banner_blink'+imageIndex1+'.jpg)');
			$('.arrow').css('opacity','0.8')
			if(expand2 === true) {
				expand2 = false;
				$('#icon2').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand3 === true) {
				expand3 = false;
				$('#icon3').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand4 === true) {
				expand4 = false;
				$('#icon4').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand5 === true) {
				expand5 = false;
				$('#icon5').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}

			image1 = true;
			image2 = false;
			image3 = false;
			image4 = false;
			image5 = false;
		}
		else {
			expand1 = false;
			$('#icon1').animate({
				'top': '-5%',
				'opacity': '1'
			}, 500);
			$('.bg').css('background-image','url(img/banner_main.jpg)');
			imageIndex1 = 1;
			image1 = false;
			$('.arrow').css('opacity','0')
		}
	}
});

$('#icon2').on({
	'click': function(){
		if(expand2 === false) {
			expand2 = true;
			$('#icon2').animate({
				'top': '3%',
				'opacity': '0.7'
			}, 500);
			$('.bg').css('background-image','url(img/webads/banner_webads'+imageIndex2+'.jpg)');
			$('.arrow').css('opacity','0.8')

			if(expand1 === true) {
				expand1 = false;
				$('#icon1').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand3 === true) {
				expand3 = false;
				$('#icon3').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand4 === true) {
				expand4 = false;
				$('#icon4').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand5 === true) {
				expand5 = false;
				$('#icon5').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}

			image1 = false;
			image2 = true;
			image3 = false;
			image4 = false;
			image5 = false;
		}
		else {
			expand2 = false;
			$('#icon2').animate({
				'top': '-5%',
				'opacity': '1'
			}, 500);
			$('.bg').css('background-image','url(img/banner_main.jpg)');
			imageIndex2 = 1;
			image2 = false;
			$('.arrow').css('opacity','0')
		}
	}
});

$('#icon3').on({
	'click': function(){
		if(expand3 === false) {
			expand3 = true;
			$('#icon3').animate({
				'top': '3%',
				'opacity': '0.7'
			}, 500);
			$('.bg').css('background-image','url(img/fundraising/banner_fundraising'+imageIndex3+'.jpg)');
			$('.arrow').css('opacity','0.8')

			if(expand1 === true) {
				expand1 = false;
				$('#icon1').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand2 === true) {
				expand2 = false;
				$('#icon2').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand4 === true) {
				expand4 = false;
				$('#icon4').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand5 === true) {
				expand5 = false;
				$('#icon5').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}

			image1 = false;
			image2 = false;
			image3 = true;
			image4 = false;
			image5 = false;
		}
		else {
			expand3 = false;
			$('#icon3').animate({
				'top': '-5%',
				'opacity': '1'
			}, 500);
			$('.bg').css('background-image','url(img/banner_main.jpg)');
			imageIndex3 = 1;
			image3 = false;
			$('.arrow').css('opacity','0')
		}
	}
});

$('#icon4').on({
	'click': function(){
		if(expand4 === false) {
			expand4 = true;
			$('#icon4').animate({
				'top': '3%',
				'opacity': '0.7'
			}, 500);
			$('.bg').css('background-image','url(img/mentor/banner_mentor'+imageIndex4+'.jpg)');
			$('.arrow').css('opacity','0.8')

			if(expand1 === true) {
				expand1 = false;
				$('#icon1').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand2 === true) {
				expand2 = false;
				$('#icon2').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand3 === true) {
				expand3 = false;
				$('#icon3').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand5 === true) {
				expand5 = false;
				$('#icon5').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}

			image1 = false;
			image2 = false;
			image3 = false;
			image4 = true;
			image5 = false;
		}
		else {
			expand4 = false;
			$('#icon4').animate({
				'top': '-5%',
				'opacity': '1'
			}, 500);
			$('.bg').css('background-image','url(img/banner_main.jpg)');
			imageIndex4 = 1;
			image4 = false;
			$('.arrow').css('opacity','0')
		}
	}
});

$('#icon5').on({
	'click': function(){
		if(expand5 === false) {
			expand5 = true;
			$('#icon5').animate({
				'top': '3%',
				'opacity': '0.7'
			}, 500);
			$('.bg').css('background-image','url(img/bs/banner_bs'+imageIndex5+'.jpg)');
			$('.arrow').css('opacity','0.8')

			if(expand1 === true) {
				expand1 = false;
				$('#icon1').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand2 === true) {
				expand2 = false;
				$('#icon2').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand3 === true) {
				expand3 = false;
				$('#icon3').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}
			if(expand4 === true) {
				expand4 = false;
				$('#icon4').animate({
					'top': '-5%',
					'opacity': '1'
				}, 500);
			}

			image1 = false;
			image2 = false;
			image3 = false;
			image4 = false;
			image5 = true;
		}
		else {
			expand5 = false;
			$('#icon5').animate({
				'top': '-5%',
				'opacity': '1'
			}, 500);
			$('.bg').css('background-image','url(img/banner_main.jpg)');
			imageIndex5 = 1;
			image5 = false;
			$('.arrow').css('opacity','0')
		}
	}
});

$('#next').on({
	'click': function(){
		if(image1 === true){
			imageIndex1++;
			if(imageIndex1 > 23)
			{
				imageIndex1 = 1;
			}
			$('.bg').css('background-image','url(img/blink/banner_blink'+imageIndex1+'.jpg)');
		}
		if(image2 === true){
			imageIndex2++;
			if(imageIndex2 > 15)
			{
				imageIndex2 = 1;
			}
			$('.bg').css('background-image','url(img/webads/banner_webads'+imageIndex2+'.jpg)');
		}
		if(image3 === true){
			imageIndex3++;
			if(imageIndex3 > 15)
			{
				imageIndex3 = 1;
			}
			$('.bg').css('background-image','url(img/fundraising/banner_fundraising'+imageIndex3+'.jpg)');
		}
		if(image4 === true){
			imageIndex4++;
			if(imageIndex4 > 14)
			{
				imageIndex4 = 1;
			}
			$('.bg').css('background-image','url(img/mentor/banner_mentor'+imageIndex4+'.jpg)');
		}
		if(image5 === true){
			imageIndex5++;
			if(imageIndex5 > 17)
			{
				imageIndex5 = 1;
			}
			$('.bg').css('background-image','url(img/bs/banner_bs'+imageIndex5+'.jpg)');
		}
	}
});

$('#prev').on({
	'click': function(){
		if(image1 === true){
			imageIndex1--;
			if(imageIndex1 < 1)
			{
				imageIndex1 = 23;
			}
			$('.bg').css('background-image','url(img/blink/banner_blink'+imageIndex1+'.jpg)');
		}
		if(image2 === true){
			imageIndex2--;
			if(imageIndex2 < 1)
			{
				imageIndex2 = 1;
			}
			$('.bg').css('background-image','url(img/webads/banner_webads'+imageIndex2+'.jpg)');
		}
		if(image3 === true){
			imageIndex3--;
			if(imageIndex3 < 1)
			{
				imageIndex3 = 15;
			}
			$('.bg').css('background-image','url(img/fundraising/banner_fundraising'+imageIndex3+'.jpg)');
		}
		if(image4 === true){
			imageIndex4--;
			if(imageIndex4 < 1)
			{
				imageIndex4 = 14;
			}
			$('.bg').css('background-image','url(img/mentor/banner_mentor'+imageIndex4+'.jpg)');
		}	if(image5 === true){
			imageIndex5--;
			if(imageIndex5 < 1)
			{
				imageIndex5 = 17;
			}
			$('.bg').css('background-image','url(img/bs/banner_bs'+imageIndex5+'.jpg)');
		}
	}
});