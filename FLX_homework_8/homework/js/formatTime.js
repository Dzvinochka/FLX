    let formatTime = function(minutesAmount) {
    let days = Math.floor(minutesAmount / 1440);
    let hours = Math.floor((minutesAmount - (days * 1440)) / 60);
    let minutes = minutesAmount - (days * 1440) - (hours *60);
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).';
};
formatTime(185);