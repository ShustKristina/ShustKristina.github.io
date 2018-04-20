module.exports = function deepCopy(obj) {

    if (obj === null) {
        return obj;
    }

    var newObj;
    if (Array.isArray(obj)) {
        newObj = [];
        for (var i = 0; i < obj.length; i++) {
            newObj.push(deepCopy(obj[i]));
        }
        return newObj;
    }
    if (typeof (obj) === "object") {
        newObj = {};
        for (var key in obj) {
            newObj[key] = deepCopy(obj[key]);
        }
        return newObj;
    }
    return obj;
}
