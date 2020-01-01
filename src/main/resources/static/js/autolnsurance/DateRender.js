function render(time) {
    var d = new Date(time);
    var times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-';
    var day=d.getDate();
    if (parseInt(day)<10){
        day='0'+day;
    }
    times+=day;
    return times;
}