let filmstudio = require('./filmstudio');
let assert = require('chai').assert;

describe("FilmStudio", function () {
        describe('constructor', function () {
            it('films is array', () => {
                let filmStudio = new FilmStudio();

                assert.isArray(filmStudio.films);
            });
            it('receive two param', function(){
                let filmStudio = new FilmStudio();

                filmStudio.makeMovie('Iron-Man',[]);
                assert.isArray(filmStudio.makeMovie);
            });
        });

});
