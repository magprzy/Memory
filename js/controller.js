'use strict'
var controller = (function () {
    var startGame = function (numberOfPiece) {

            game.startGame(numberOfPiece);
            view.renderPieces(game.getPieces());
            view.highlight(game.getPiecesToHighlight());
        },
        highlight = function () {
            view.highlight(game.getPiecesToHighlight());
        },

        checkPiece = function (i, pieces) {
            view.changeColor(i, game.checkPiece(i, pieces));
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
