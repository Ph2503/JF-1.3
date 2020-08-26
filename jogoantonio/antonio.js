function loadi() {
    var n = 0;
    var l = document.getElementById("number");
    window.setInterval(function(){
    l.innerHTML = n;
    if(n == 4) {
        window.location.href = "home.html"
    }
    n++;
    
    },1000);

}

