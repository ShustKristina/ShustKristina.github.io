var assert = require("assert");
var deepComp = require('../script/script.js');
describe('Deep compare', () => {
    var a1 = 77;
    var a2 = "77";
    it('1', () => {
        assert.equal(deepComp(a1, a2), false);
    })

    var b1 = 77;
    var b2 = 77;
    it('2', () => {
        assert.equal(deepComp(b1, b2), true);
    })

    var c1 = "asd";
    var c2 = "asd";
    it('3', () => {
        assert.equal(deepComp(c1, c2), true);
    })

    var c11 = "asd";
    var c21 = "asdf";
    it('4', () => {
        assert.equal(deepComp(c11, c21), false);
    })

    var d1 = [1, 2, "ss"];
    var d2 = [1, 2, "ss"];
    it('5', () => {
        assert.equal(deepComp(d1, d2), true);
    })
    var e1 = [1, "ss", 2];
    var e2 = [1, 2, "ss"];
    it('6', () => {
        assert.equal(deepComp(e1, e2), false);
    })

    var f1 = [1, [3], []];
    var f2 = [1, [3], []];
    it('7', () => {
        assert.equal(deepComp(f1, f2), true);
    })

    var g1 = [1, [3], [1]];
    var g2 = [1, [3], []];
    it('8', () => {
        assert.equal(deepComp(g1, g2), false);
    })

    var h1 = { "a": 1, "b": null, "c": { "a": 11, "b": [4] }, "d": ["fff", undefined] };
    var h2 = { "a": 1, "b": null, "c": { "a": 11, "b": [4] }, "d": ["fff", undefined] };
    it('9', () => {
        assert.equal(deepComp(h1, h2), true);
    })

    var i1 = { "a": 1, "b": 2, "c": 3 };
    var i2 = { "a": 1, "c": 3, "b": 2 };
    it('10', () => {
        assert.equal(deepComp(i1, i2), true);
    })

    var k1 = { "a": 1, "b": [2, 4, 4], "c": 3 };
    var k2 = { "a": 1, "c": 3, "b": [2, 4, 4] };
    it('11', () => {
        assert.equal(deepComp(k1, k2), true);
    })

    var l1 = { "a": 1, "b": { "a": 2, "b": 4, "c": 4 }, "c": 3 };
    var l2 = { "a": 1, "c": 3, "b": { "a": 2, "c": 4, "d": 4 } };
    it('12', () => {
        assert.equal(deepComp(l1, l2), false);
    })

    it('13', () => {
        assert.equal(deepComp(null, null), true);
    })

    it('14', () => {
        assert.equal(deepComp(null, undefined), false);
    })

    it('15', () => {
        assert.equal(deepComp(f1, i2), false);
    })

    it('16', () => {
        assert.equal(deepComp(a1, undefined), false);
    })
    var m1 = { "a": 1, "b": { "a": [4], "c": 3 }, "c": 3, };
    var m2 = { "a": 1, "c": 3, "b": { "a": [4], "c": 3 } };
    it('17', () => {
        assert.equal(deepComp(m1, m2), true);
    })
    
    var n1 = [4, null];
    var n2 = [4, null];
    it('18', () => {
        assert.equal(deepComp(n1, n2), true);
    })
})

