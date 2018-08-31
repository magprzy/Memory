'use strict'
var view = (function () {
    var piece,
        section,


        getInitialNumberOfPieces = function () {
            return 4;
        },

        renderPieces = function (pieces) {
            var i;
            section = document.getElementById("pieces");
            for (i = 0; i < pieces.length; i++) {
                piece = document.createElement("p");
                piece.setAttribute("class", "piece");
                piece.setAttribute("id", i);
                section.appendChild(piece);
            }
        },

        highlight = function (pieces) {
            showPiecesToGuess(pieces)
            setTimeout(function () {hidePiecesToGuess(pieces)
                }, 1000);


        },

        showPiecesToGuess = function (pieces) {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    piece = document.getElementById(i);
                    piece.setAttribute("class", "highlightPiece");
                }
            }
        },

        hidePiecesToGuess = function (pieces) {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    piece = document.getElementById(i);
                    piece.setAttribute("class", "piece")
                }
            }
        }


    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlight': highlight
    }
})
();
