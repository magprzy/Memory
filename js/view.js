'use strict'
var view = (function () {
    var piece,
        section,

        //initialNumberOfPieces = 4,


       // getInitialNumberOfPieces = function () {
           // return initialNumberOfPieces;
       // },

        renderPieces = function (pieces) {
            var i;
            clearPieces();
            section = document.getElementById("pieces");
            pieces.forEach(function (piece, i) {
                piece = document.createElement("p");
                piece.setAttribute("class", "piece");
                piece.setAttribute("id", i);
                piece.addEventListener("click", function () {
                    controller.checkPiece(i, pieces);
                });
                section.appendChild(piece);
            })
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
        },

        changeColor = function (i, goodPiece) {
            piece = document.getElementById(i);
            if (goodPiece === true) {
                piece.setAttribute("class", "goodPiece");

                game.checkIfAllPiecesAreGuessed();

            }
            else {
                piece.setAttribute('class', 'badPiece');
                setTimeout(function () {
                    controller.startGame()
                }, 1000);
            }
        },

        getIndex = function (u) {
            var s = u;
            console.log(s);


        }


    return {
       // 'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlight': highlight,
        'getIndex': getIndex,
        'changeColor': changeColor


    }
})
();
