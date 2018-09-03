'use strict'
var view = (function () {
    var piece,
        section,
        site,

        renderPieces = function (pieces, checkPieceCallback) {
            var i;
            clearPieces();
            section = document.getElementById("pieces");
            pieces.forEach(function (piece, i) {
                piece = document.createElement("p");
                piece.className = "piece";
                piece.id = i;
                piece.addEventListener("click", checkPieceCallback);
                section.appendChild(piece);
            })
        },

        showInformation = function(numberOfPieces){
        var information,
            informationSection = document.getElementById("information");
            information = document.createTextNode(numberOfPieces + " pieces to  guess!");
            informationSection.appendChild(information);
        },
        clearPieces = function () {
            document.getElementById("pieces").innerHTML = "";
        },
        highlight = function (pieces) {
            showPiecesToGuess(pieces)
            setTimeout(function () {
                hidePiecesToGuess(pieces)
            }, 1000);
        },

        showPiecesToGuess = function (pieces) {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    piece = document.getElementById(i);
                    piece.className = "piece highlightPiece";
                }
            }
            site = document.getElementById("body");
            site.className = "avoid-clicks";
        },

        hidePiecesToGuess = function (pieces) {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    piece = document.getElementById(i);
                    piece.className = "piece";
                }
            }
            site.className = "allow-clicks";
        },

        changeColor = function (i, goodPiece) {
            piece = document.getElementById(i);
            if (goodPiece === true) {
                piece.className = "piece goodPiece";
                return true;
            }
            else {
                piece.className = "piece badPiece";
                return false;
            }
        }


    return {
        'renderPieces': renderPieces,
        'highlight': highlight,
        'changeColor': changeColor,
        'showInformation': showInformation


    }
})
();