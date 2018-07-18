var request=require("request");
var paramsJson=JSON.stringify({"token":"9a199bdb98a4ac5d147cfd84cfed1047EE6C6BEB363CE635FC5C0E5BD519910BDB440E62"});
var url="https://hst-api.wialon.com/wialon/ajax.html?svc=token/login&params="+paramsJson+"";
request({url: url}, function(error, response, body){
console.log(JSON.parse(body).eid);

var params2Json=JSON.stringify({"itemId":17649454,
				     "id": 1,		
				     "callMode":"create",
				     "n":"test_node_req",
                     "v":"done"});

var url2="https://hst-api.wialon.com/wialon/ajax.html?svc=item/update_custom_field&params="+params2Json+"&sid="+JSON.parse(body).eid+"";
request({url: url2}, function(error, response, body){
    console.log(body);
})
})
