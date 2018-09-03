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
            var id = event.target.id;
            view.changeColor(id, game.checkPiece(id));
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
