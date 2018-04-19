module.exports = function deepCopy(obj) {

    if (obj === null || typeof (obj) === 'undefined' || typeof (obj) === 'number' || typeof (obj) === 'string') {
        return obj;
    }
    var newObj;
    if (Array.isArray(obj)) {
        newObj = []
    }
    else {
        newObj = {};
    }
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            newObj[key] = deepCopy(obj[key])
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
