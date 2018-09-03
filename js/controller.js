'use strict'
var controller = (function () {
    var startGame = function (numberOfPiece) {

            game.startGame(numberOfPiece);
            view.renderPieces(game.getPieces(), checkPiece);
            view.highlight(game.getPiecesToHighlight());
        },
        highlight = function () {
            view.highlight(game.getPiecesToHighlight());
        },

        checkPiece = function (event) {
            var id = event.target.id,
                guessedPiece,
                continueGame;

            guessedPiece = view.changeColor(id, game.pieceToGuess(id));

            if (guessedPiece) {
                continueGame = game.checkIfAllPiecesAreGuessed();
                if (continueGame) {
                    setTimeout(function () {
                        controller.startGame(game.getCurrentNumberOfPieces()
                        )
                    }, 1000);
                }
            }
            else {
                setTimeout(function () {
                    controller.startGame()
                }, 1000);
            }
        },

        addPiece = function () {
            game.addPiece();
            startGame(game.getCurrentNumberOfPieces());
        }

    return {
        'startGame': startGame,
        'highlight': highlight,
        'checkPiece': checkPiece,
        'addPiece': addPiece
    }
})();
