
let symbols = ['diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'anchor', 'leaf', 'bicycle', 'diamond', 'bomb', 'leaf', 'bomb', 'bolt', 'bicycle', 'paper-plane-o', 'cube'],
openedCards = [], 
matchedCards = 0, Clicks = 0,
$Playground = $('.Playground'),
$scorePanel = $('#scores'),
$move = $('.moves'),
$ratingStars = $('.fa-star'),
$Restart = $('.Restart'),
$seconds = $('.seconds'),
delay = 400,  currentseconds, second = 0, 
totalbox = symbols.length / 2,
stars3 = 10, stars2 = 18, stars1 = 24;

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// Start Game
function startGame() {
	let box = shuffle(symbols);
    $Playground.empty();
    Clicks = 0; matchedCards = 0;
	$move.text('0');
	$ratingStars.removeClass('.checked').addClass('fa-star');
	for (var i = 0; i < box.length; i++) {
		$Playground.append($('<li class="box"><i class="fa fa-' + box[i] + '"></i></li>'))
	}
	play();
    second = 0;
	resetseconds(currentseconds);
	$seconds.text(`${second}`);
	time();
};


//Restart
$Restart.bind('click', function () {
   swal({
		allowEscapeKey: false,
		allowOutsideClick: false,
		title: 'Want to restart?',
		text: "Are you sure?",
		type: 'warning',
		confirmButtonColor: '#02cdba',
        cancelButtonColor: '#f94c3c',
        confirmButtonText: 'Yes',
        showCancelButton: true,
	}).then(function (isConfirm) {
		if (isConfirm) {
			startGame();
		}
	})
});


//Rating
function Ratings(moves) {
    let totalStars = 3;
    if(moves>stars3 && moves < stars2) {
        $ratingStars.eq(2).removeClass('fa-star').addClass('.checked');
        totalStars=2;
    } else if (moves>stars2 && moves < stars1) {
        $ratingStars.eq(1).removeClass('fa-star').addClass('.checked');
        totalStars=1; 
    } 
    return { score: totalStars };
};


//End game
function endGame(Clicks, score) {
	swal({
		allowEscapeKey: false,
		allowOutsideClick: false,
		title: 'Congratulations! You Won!',
		text: 'With ' + Clicks + ' Moves and ' + score + ' Stars in ' + second + ' Seconds.',
		type: 'success',
		confirmButtonColor: '#02cdba',
		confirmButtonText: 'Play again!'
	}).then(function (isConfirm) {
		if (isConfirm) {
			startGame();
		}
    })
    second = 0;
	resetseconds(currentseconds);
	$seconds.text(`${second}`);
}


// play
var play = function () {
    
     $Playground.find('.box').bind('click', function () {
        var $this = $(this)
        if ( $this.hasClass('match') || $this.hasClass('show')) 
            { return true; }
        var box = $this.context.innerHTML;
        $this.addClass('show open');
        openedCards.push(box);
        if (openedCards.length > 1) {
            if (box === openedCards[0]) {
                $Playground.find('.open').addClass('match infinite animated');
                setTimeout(function () {
                    $Playground.find('.match').removeClass('open infinite show animated');
                    }, delay);
                    matchedCards++;
                } 
            else {
                $Playground.find('.open').addClass('notmatch infinite animated  wobble');
                setTimeout(function () {
                    $Playground.find('.open').removeClass('animated infinite wobble');
                    }, delay / 1.5);
                setTimeout(function () {
                    $Playground.find('.open').removeClass('open show infinite animated notmatch  wobble');
                    }, delay);
                }
                openedCards = [];
                Clicks++;
                Ratings(Clicks);
                $move.html(Clicks);
            }

        if (totalbox === matchedCards) {
			Ratings(Clicks);
			var score = Ratings(Clicks).score;
			setTimeout(function () {
				endGame(Clicks, score);
			}, 500);
		}
	});
};

//Time function from https://codepen.io/mkryad/pen/aYdyEV

function time() {
        currentseconds = setInterval(function() {
            $seconds.text(`${second}`)
            second = second+1 
        },1000);
}

function resetseconds(seconds) {
        if(seconds) {
               clearInterval(seconds);
            }
         }
      
         startGame();
     

    


            
        


