describe('Game', function () {
   it('should have 4 pieces after game start', function () {
      var pieces;

      game.startGame();

      pieces = game.getPieces();

      expect(pieces.length).toBe(4);
   });

    it('one pieces should be to guess after game start', function () {
        var piecesToGuess;
        game.startGame();

        piecesToGuess = game.getNumberOfPiecesToGuess();

        expect(piecesToGuess).toBe(1);
    });

    it ('should calculate pieces to guess when is 20 pieces on board', function () {
        var  result,
            config = {
                numberOfPieces: 20
            };
        game.startGame(config);
        game.getPieces(game.getCurrentNumberOfPieces());

        result = game.getNumberOfPiecesToGuess();

        expect(result).toBe(9);
    })

    it('should start game with configured number of pieces', function () {
        var pieces,
            config = {
               numberOfPieces: 6
            };
        game.startGame(config);

        pieces = game.getPieces();

        expect(pieces.length).toBe(6);
    });

    it ('should return false when piece is not to guess' , function () {

      var result,
          config = {
          numberOfPieces: 10
      };
        game.startGame(config);
        game.getPieces(game.getCurrentNumberOfPieces());

        result = game.guessPiece(1);

            expect(result).toBe(false);

    });
    it('should get 4 random pieces to guess', function () {
        var result,
            config = {
                numberOfPieces: 10
            };
        game.startGame(config);
        game.getPieces();
        result = game.getPiecesToHighlight();
        result = result.filter(function(piece){
            return piece.toGuess === true} )
        expect(result.length).toBe(4);
    });

    it('should allow to guess piece only once', function () {
        var result,
            piece,
            piecesToGuess=[],
            config = {
                numberOfPieces: 10
            };
        game.startGame(config);
        game.getPieces();
        result = game.getPiecesToHighlight();
        for (var i=0 ; i <result.length; i++){
            if (result[i].toGuess === true){
                piecesToGuess.push(result[i]);

            }
        }

        game.guessPiece(piecesToGuess[0].id);

        expect(piecesToGuess[0].toGuess).toBe(false);
    });


    /* function findPiecesToGuess(pieces) {
         return pieces.filter(function (piece) {
            return piece.toGuess;
         });
     }*/
});
