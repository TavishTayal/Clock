function Sussy() {
    let date = new Date();
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    document.getElementsByClassName('min')[0].innerHTML = min;
    document.getElementsByClassName('sec')[0].innerHTML = sec;
    let sensei = document.getElementsByClassName('sesi')[0]
    if (hrs >= 12) {
        sensei.innerHTML = 'PM'
    } else{
        sensei.innerHTML = 'AM'
    }
    
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    
    document.getElementsByClassName('hrs')[0].innerHTML = hrs;

}
setInterval(Sussy, 10)