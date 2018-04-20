var assert = require("assert");
var deepCopy = require('../script/script.js');
describe('Deep copy', () => {
    var a1 = true;
    var a2 = deepCopy(a1);
    it('1', () => {
        assert.equal(a1 === a2, true);
    })
    it('2', () => {
        assert.equal(typeof (a2) === typeof (a1), true);
    })

    var b1 = "fvfvf";
    var b2 = deepCopy(b1);
    it('3', () => {
        assert.equal(b2 === b1, true);
    })
    it('4', () => {
        assert.equal(typeof (b2) === typeof (b1), true);
    })

    var c1 = null;
    var c2 = deepCopy(c1);
    it('5', () => {
        assert.equal(c2 === c1, true);
    })
    it('6', () => {
        assert.equal(typeof (c2) === typeof (c1), true);
    })

    var d1 = undefined;
    var d2 = deepCopy(d1);
    it('7', () => {
        assert.equal(d2 === d1, true);
    })
    it('8', () => {
        assert.equal(typeof (d2) === typeof (d1), true);
    })

    var e1 = { "a": 1, "b": null, "c": { "a": 11, "b": [4] }, "d": ["fff", undefined] };
    var e2 = deepCopy(e1);
    it('9.1', () => {
        assert.equal(e2.d instanceof Array, true);
    })
    it('9', () => {
        assert.equal(e2 === e1, false);
    })
    it('10', () => {
        assert.equal(typeof (e2) === typeof (e1), true);
    })
    it('11', () => {
        assert.equal(e2.b === e1.b, true);
    })
    it('12', () => {
        assert.equal(e2.d === e1.d, false);
    })
    it('13', () => {
        assert.equal(e2.d[0] === e1.d[0], true);
    })
    it('14', () => {
        assert.equal(e2.d[1] === e1.d[1], true);
    })
    it('15', () => {
        assert.equal(e2.c === e1.c, false);
    })
    it('16', () => {
        assert.equal(e2.c.a === e1.c.a, true);
    })
    it('17', () => {
        assert.equal(e2.c.b === e1.c.b, false);
    })
    it('18', () => {
        assert.equal(e2.c.b[0] === e1.c.b[0], true);
    })

    var f1 = ["fvfvf", [null, undefined, { "a": 1, "b": [null] }], { "c": 88, "d": undefined }];
    var f2 = deepCopy(f1);
    it('19.1', () => {
        assert.equal(f2[1] instanceof Array, true);
    })
    it('19', () => {
        assert.equal(f2 === f1, false);
    })
    it('20', () => {
        assert.equal(typeof (f2) === typeof (f1), true);
    })
    it('21', () => {
        assert.equal(f2[0] === f1[0], true);
    })
    it('22', () => {
        assert.equal(f2[1] === f1[1], false);
    })
    it('23', () => {
        assert.equal(f2[1][1] === f1[1][1], true);
    })
    it('24', () => {
        assert.equal(f2[1][2] === f1[1][2], false);
    })
    it('25', () => {
        assert.equal(f2[1][2].a === f1[1][2].a, true);
    })
    it('26', () => {
        assert.equal(f2[1][2].b === f1[1][2].b, false);
    })
    it('27', () => {
        assert.equal(f2[1][2].b[0] === f1[1][2].b[0], true);
    })
    it('28', () => {
        assert.equal(f2[2] === f1[2], false);
    })
    it('29', () => {
        assert.equal(f2[2].d === f1[2].d, true);
    })

    var g1 = Number.NaN;
    var g2 = deepCopy(g1);
    it('30', () => {
        assert.equal(typeof (g2) === typeof (g1), true);
    })
    it('31', () => {
        assert.equal(isNaN(g2), true);
    })
})

