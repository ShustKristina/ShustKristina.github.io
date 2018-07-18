var array=new Array();
   function parsing(){
    var url = "input.xlsx";
    var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";
        oReq.onload = function(e) {
    var arraybuffer = oReq.response;

/* convert data to binary string */
    var data = new Uint8Array(arraybuffer);
    var arr = new Array();
    for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");

/* Call XLSX */
    var workbook = XLSX.read(bstr, {type:"binary"});

/* DO SOMETHING WITH workbook HERE */
    var first_sheet_name = workbook.SheetNames[0];

/* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    array=XLSX.utils.sheet_to_json(worksheet,{raw:true})
        console.log(array);
        array.length=10;
        console.log(array);
for (var i=0; i<array.length; i++){
    // create circle geofence using entered data
        // construct object using entered data
        var res = 17634994;
        var obj = { n: ""+array[i].Название+"", //geofence name
            t: 3, // type (3 - circle)
            f: 0, // flags
            w: 700, // radius
            c: 2566914048, // color
            p: [{x: array[i].Широта, y: array[i].Долгота, r: 700}] // points (for circle, center coords and radius)
        };
    
        var resource = wialon.core.Session.getInstance().getItem(res); // get resource by id
        resource.createZone(obj, // create geofence
            function(code, data){ // create geofence callback
                if(code){ msg(wialon.core.Errors.getErrorText(code)); return; } // exit if error code
                msg("<b>'"+data.n+"'</b> geofence created successfully"); // print create succeed message
            });    
}
     
}
oReq.send();

}
parsing();
$(document).ready(function () {
    //saveCircle();

    wialon.core.Session.getInstance().initSession("https://hst-api.wialon.com"); // init session

    wialon.core.Session.getInstance().loginToken("9a199bdb98a4ac5d147cfd84cfed1047EE6C6BEB363CE635FC5C0E5BD519910BDB440E62", "", // try to login
        function (code) { // login callback
            if (code){ msg(wialon.core.Errors.getErrorText(code)); return; } // exit if error code
    });
});
