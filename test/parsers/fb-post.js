const assert = require('assert');
const fileHelper = require('./file-helper');
const moment = require('moment');
const parseData = require('../../src/parsers/fb-post');

describe('Test parsers - FB-post', () => {
    it('Parse FB-post', (done) => {
        fileHelper.loadData('./test/data/fb-post.html')
            .then((html) => {
                const testDate = moment('23.10.2017', 'DD.MM.YYYY');
                const menu = parseData(html, testDate);
                assert.equal(menu,
                    'PONDĚLÍ 23.10.2017\n' +
                    'BROKOLICOVÝ KRÉM\n' +
                    'MEXICKÁ TORTILLA S KUŘECÍM MASEM (80G), SÝREM, RAJČATY, CIBULKOU A HOŘČIČNÝM DRESINGEM, SMAŽENÉ HRANOLKY A SALÁT COLESLAW\n' +
                    '119,- \n' +
                    'SMAŽENÝ SÝR (150G) S VAŘENÝM MLADÝM BRAMBŮRKEM S PETRŽELKOU, MAJONÉZA\n' +
                    '99,- \n' +
                    'UZENÝ HOVĚZÍ JAZYK (120G) S KŘENOVOU OMÁČKOU, HOUSKOVÝ KNEDLÍK\n' +
                    '99,-'
                );
                done();
            })
            .catch((e) => done(e));
    });
});
