'use strict'
var controller = (function () {
    var startGame = function () {
            game.startGame();
            view.renderPieces(game.getPieces());
            view.highlight(game.getPiecesToHighlight());
        },
        highlight = function () {
            view.highlight(game.getPiecesToHighlight());
        };

    return {
        'startGame': startGame,
        'highlight': highlight
    }
})();
