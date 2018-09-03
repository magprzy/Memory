'use strict'
var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        numberOfPiecesToHighlight,
        pieces = [],
        guessedPieces = 0,

        startGame = function (config) {
            clearWindow();
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

        getCurrentNumberOfPieces = function () {
            return {
                numberOfPieces: currentNumberOfPieces
            };

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
        },
        clearWindow = function () {
            while (pieces.length !== 0) {
                pieces.pop();
            }
        },
        checkPiece = function (i) {

            if (pieces[i].toGuess === true) {
                pieces[i].toGuess = false;
                guessedPieces++;
                return true;
            }
            else {
                guessedPieces = 0;
                return false;
            }
        },

        checkIfAllPiecesAreGuessed = function () {

            if (guessedPieces === getNumberOfPiecesToHighlight()) {
                guessedPieces = 0;
                currentNumberOfPieces += 2;

                setTimeout(function () {
                    controller.startGame(
                        {
                            numberOfPieces: currentNumberOfPieces
                        }
                    )
                }, 1000);

            }

        },

        addPiece = function () {
            currentNumberOfPieces += 2;

        }

    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'getPiecesToHighlight': getPiecesToHighlight,
        'checkPiece': checkPiece,
        'checkIfAllPiecesAreGuessed': checkIfAllPiecesAreGuessed,
        'getNumberOfPiecesToHighlight': getNumberOfPiecesToHighlight,
        'addPiece': addPiece,
        'getCurrentNumberOfPieces': getCurrentNumberOfPieces
    }
})();

 