module.exports = function deepCopy(obj) {

    if (obj === null || typeof (obj) === 'undefined' || typeof (obj) === 'number' || typeof (obj) === 'string') {
        return obj;
    }

    if (obj instanceof Object) {
        var copyHash = {};
        for (var key in obj) {
            if (typeof (obj[key]) === "object") {
                copyHash[key] = deepCopy(obj[key]);
            }
            else {
                copyHash[key] = obj[key];
            }
        }
        return copyHash;
    }
    
    if (obj instanceof Array) {
        copyArray = [];
        for (var i = 0; i < obj.length; i++) {
            if (obj[i] instanceof Array) {
                copyArray[i] = deepCopy(obj[i]);
            }
            else {
                copyArray[i] = obj[i];
            }
        }
        return copyArray;
    }
}

