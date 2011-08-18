
if (punchNum == undefined) {
	var punchNum = 0;
}

var popupText = 'Punch it UP!'

switch (punchNum) {
	case 0: 
		jQuery('html a, html p, h1, h2, h3').each(function() {
			jQuery(this).css('color', randomColor());
		});
		popupText = chooseRandom([
			'Add some color!',
			'The colors suck! Let\'s make better ones!',
			'Colors!?! Punch it UP!',
			'Those old colors made my eyes bleed! Hooray for Punch-it-up!',
			'Add some color!',
			'Add some color!'
		]);
		break;
	case 1:
		jQuery('html div').not('#punchAlert').each(function() {
			if (punchRandom()) {
				jQuery(this).css('border-radius', '20px');
			}
		});
		popupText = chooseRandom([
			'Ronded corners make everything better!',
			'Let\'s round EVERYTHING for saftey',
			'I just got cut by a sharp edge--round those mofos!',
			'How did the internet exist before rounded edges',
			'Round those edges!',
			'Round those edges!',
			'Round those edges!',
			'Round those edges!',
			'Round those edges!',
			'Round those edges!'
		]);
		break
	case (2 || 3):
		jQuery('html div').not('#punchAlert').each(function() {
			if (punchRandom()) {
				jQuery(this).css('border-radius', '30px');
			}
			if (punchRandom()) {
				jQuery(this).css({
					'border-width': Math.floor(Math.random()*11),
					'border-style': chooseRandom(['dotted', 'dashed', 'solid', 'double']),
					'border-color': randomColor()
				});
			}
			popupText = chooseRandom([
				'Wow, if only I could unvisit this website, I don\'t know where the borders are',
				'There, I punched it up for you',
				'uh...excuse me...punch it up...please!',
				'Punch it UP...right?!',
				'Punch it UP, dude!',
				'Punch it UP!',
				'Punch it UP!',
				'Punch it UP!'
			]);
		});
		break;
	case (3 || 4):
		jQuery('html *').not('#punchAlert').each(function() {
			if (punchRandom()) {
				jQuery(this).css('box-shadow', r(5) + 'px ' + r(5) + 'px ' + r(25) + 'px ' + randomColor());
			}
			popupText = chooseRandom([
				'You can\'t have a page without shadow',
				'Adding some depth; don\'t drown',
				'Hey website, do you need a license to be that ugly? Punch it up!',
				'I bet this website\'s mother had a loud bark',
				'Punch it up',
				'Punch it up',
				'Punch it up'
			]);
		});
		break;
	default:
		jQuery('html *').not('#punchAlert').each(function() {
			if (punchRandom() && punchRandom()) {
				if (!jQuery(this).children().children()[0]) {
					switch (r(3)) {
						case 0:
							jQuery(this).addClass('grow-pulse');
							break;
						case 1:
							jQuery(this).addClass('twist-pulse');
							break;
						case 2:
							jQuery(this).addClass('twist-pulse-reverse');
							break;
						case 3:
							if (punchRandom() && punchRandom()) {
								jQuery(this).addClass('grow-pulse-fast');
							}
					}	
				}
			}
		});
	break;
}

punchNum++;

if (!jQuery('#punchAlert')[0]) {
	jQuery('body').prepend(jQuery('<div id="punchAlert"/>').css({
	'position': 'fixed',
	'margin-top': '-30px',
	'top': '50%',
	'font-size': '30px',
	'text-align': 'center',
	'width': '100%',
	'color': 'white',
	'z-index': 999999,
	'padding': '4px'
	}));
}
jQuery('#punchAlert').css({'text-shadow': ('0 0 20px ' + randomColor()), 'background-color': randomColor(true)});
jQuery('#punchAlert').html('Punch Level ' + punchNum + '<br/>' + popupText);
jQuery('#punchAlert').stop(true, true).show().css('opacity', 1).fadeOut(3000);

function punchRandom() {
	return !Math.round(Math.random()*1.5)
}

r = function(n){
        return Math.floor( ((n + 1) || 10) * Math.random() );
}

function randomColor(dark) {
	var red = Math.round(Math.random()*255);
	var blue = Math.round(Math.random()*255);
	var green = Math.round(Math.random()*255);
	if (dark && red < 150 && blue < 150 && green < 150) {
		switch(Math.floor(Math.random()*4)) {
			case 0:
				red = Math.round(Math.random()*100) + 150;
				break;
			case 1:
				blue = Math.round(Math.random()*100) + 150;
				break;
			case 2:
				green = Math.round(Math.random()*100) + 150;
		}
	}
	return ('#' + red.toString(16) + green.toString(16) + blue.toString(16));
}

function chooseRandom(items) {
	return items[(Math.floor(Math.random()*items.length))]
}
// jQuery('div').each(function() {
// 	if (!Math.round(Math.random()*2)) {
// 		jQuery(this).css('background-color', 'red');
// 	}
// });