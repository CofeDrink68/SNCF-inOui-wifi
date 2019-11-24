var setTitle = function() {
    var wifi = document.getElementsByClassName("HeaderIndicators__Link__Item__Text__Value")[1];
    // wifi = wifi.innerHTML;

    document.title = wifi.innerText;
};

var loop = function() {
    window.setTimeout(loop, 250);
    setTitle();
};

window.setTimeout(loop, 1500);