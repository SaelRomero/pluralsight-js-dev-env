import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Nuestro primer texto', () => {
    it('Deberia pasar', () =>{
        expect(true).to.equal(true);
    })
})

describe('index.html', () =>{
    it('Deberia decir Hola mundo', (done) =>{
        const index = fs.readFileSync('./src/index.html',"utf-8");
        jsdom.env(index, function(err,window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hola mundo!");
            done();
            window.close();
        })
    })
})