function HashStorage() {
    var storage = {};
    this.addValue = function (key, value) {
        storage[key] = value;
    }

    this.getValue = function (key) {
        return storage[key];
    }

    this.deleteValue = function (key) {
        if (key in storage) {
            delete storage[key];
            return true;
        } else {
            return false;
        }
    }

    this.getKeys = function () {
        return Object.keys(storage);
    }
}