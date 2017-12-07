function getDate() {

    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    document.getElementById('time').innerHTML = day + '|' + hours + ':' + minutes;
}
setInterval(getDate, 0);
