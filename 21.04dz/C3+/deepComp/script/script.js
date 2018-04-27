module.exports=function deepComp(arg1, arg2) {
    if (arg1 === arg2) {
        return true;
    }
    if (arg1 == null || arg2 == null || typeof (arg1) != typeof (arg2)) {
        return false;
    }
    if (Array.isArray(arg1) && Array.isArray(arg2)) {
        if (arg1.length != arg2.length) {
            return false;
        }
        else {
            for (var i = 0; i < arg1.length; i++) {
                var rez = deepComp(arg1[i], arg2[i]);
                if (!rez) {
                    return false
                }
            }
            return true;
        }
    }

    if (typeof (arg1) == "object" && typeof (arg2) == "object") {
        if (Object.keys(arg1).length !== Object.keys(arg2).length) {
            return false;
        }
        for (var key in arg1) {
            if(!(key in arg2)||!deepComp(arg1[key], arg2[key])){
                return false;
            }
        }   
        return true;  
    }
    return false;
}