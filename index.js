function increase() {
    // Change the variable to modify the speed of the number increasing from 0 to (ms)
    let SPEED = 40;
    // Retrieve the percentage value

    document.querySelectorAll(".value1").forEach(element => {
        let limit = parseInt(element.innerHTML, 10);
        for(let i = 0; i <= limit; i++) {
            setTimeout(function () {
                element.innerHTML = i + "%";
            }, SPEED * i);
        }
    })
}


document.getScrollY = function() {
    if (window.pageYOffset != undefined) {
        return pageYOffset;
    } else {
        var sy, d = document,
            r = d.documentElement,
            b = d.body;
        sy = r.scrollTop || b.scrollTop || 0;
        return  sy;
    }
}

let boolEventTriggered = false;
window.addEventListener('scroll', function(e) {
    if(document.getScrollY() > 450 && !boolEventTriggered){
        boolEventTriggered = true;
        increase();
        document.getElementById("aimable").classList.add("aimable")
        document.getElementById("carac2").classList.add("carac2")
        document.getElementById("carac3").classList.add("carac3")
        document.getElementById("carac4").classList.add("carac4")
        document.getElementById("carac5").classList.add("carac5")

    }
});

// *****************scroll progress bar**********************
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressionScrollBar").style.width = scrolled + "%";
}
