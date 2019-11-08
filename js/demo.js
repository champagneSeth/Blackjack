// Seth Champagne - CMPS 411 - 12.02.15
// UI controller of the blackjack game
//  | blackjack.js  - handles game logic
//  | deck.js       - manages the deck of cards
//  | gameTable.js  - controls all the canvas animations

window.onload = function() {
    console.log('[ ui ] we made it');

    var canvas = document.getElementById('blackjack');
    var startBtn = document.getElementById('start-btn');
    var holdBtn = document.getElementById('hold-btn');
    var hitBtn = document.getElementById('hit-btn');
    var images = document.getElementById('images');

    var event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, false);

    table.init(canvas.getContext('2d'));

    function startPlayerTurn() {
        console.log('[ ui ] beginning player turn');
        if (player.score == 21) {
            holdBtn.dispatchEvent(event);
            endGame();
        }
        hitBtn.disabled = false;
        holdBtn.disabled = false;
    }
    
    function endGame() {
        console.log('[ ui ] end of game');
        hitBtn.disabled = true;
        holdBtn.disabled = true;
    }

    cards.forEach(function(card) {
        var img = document.createElement('img');
        img.setAttribute('src', card.loc);
        img.setAttribute('id', card.id);
        images.appendChild(img);
    })

    startBtn.addEventListener('click', function() {
        // Begins game (blackjack.js)
        console.log('[ ui ] start button clicked');
        startRound(startPlayerTurn);
    });

    hitBtn.addEventListener('click', function() {
        // Call function to draw card for player
        console.log('[ ui ] hit button clicked');
        hit(player);
        if (player.score >= 21) {
            holdBtn.dispatchEvent(event);
        }
    });

    holdBtn.addEventListener('click', function() {
        // Player is done drawing cards
        console.log('[ ui ] hold button clicked');
        hitBtn.disabled = false;
        holdBtn.disabled = false;
        startDealerTurn(endGame);
    });

};

