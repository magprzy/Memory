'use strict'
var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        numberOfPiecesToHighlight,
        pieces = [],

        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
        },

        getPieces = function () {
            for (var i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
                pieces[i].toGuess = false;
            }
            return pieces;
        },

        getNumberOfPiecesToHighlight = function () {
            numberOfPiecesToHighlight = (currentNumberOfPieces / 2) - 1;
            return numberOfPiecesToHighlight;
        },
        clearPiecesToGuess = function () {
            for (var i = 0; i < pieces.length; i++) {
                pieces[i].toGuess = false;
            }
        },

        getPiecesToHighlight = function () {
            var randomIndex,
                i = 0;
            clearPiecesToGuess();
            while (i < getNumberOfPiecesToHighlight()) {
                randomIndex = Math.floor(Math.random() * currentNumberOfPieces);

                if (pieces[randomIndex].toGuess === false) {
                    pieces[randomIndex].toGuess = true;
                    i++;
                }
            }
            return pieces;
        };


    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'getPiecesToHighlight': getPiecesToHighlight
    }
})();

 