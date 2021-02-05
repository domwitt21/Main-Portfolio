function rainbowBtn() {
    var d = document.getElementById("d");
    var a = document.getElementById("a");
    var r = document.getElementById("r");
    var k = document.getElementById("k");
    var m = document.getElementById("m");
    var o = document.getElementById("o");
    var dd = document.getElementById("dd");
    var e = document.getElementById("e");
    var navBar = document.getElementById("home");
    var navBarTwo = document.getElementById("contact");
    var navBarThree = document.getElementById("port");
    var facebook = document.getElementById("facebook");
    var twitter = document.getElementById("twitter");
    var instagram = document.getElementById("instagram");
    var linkedin = document.getElementById("linkedin");
    var github = document.getElementById("github");
    var body = document.getElementById("background2");
    d.classList.toggle("d");
    a.classList.toggle("a");
    r.classList.toggle("r");
    k.classList.toggle("k");
    m.classList.toggle("m");
    o.classList.toggle("o");
    dd.classList.toggle("dd");
    e.classList.toggle("e");
    navBar.classList.toggle("navChange");
    navBarTwo.classList.toggle("navChange");
    navBarThree.classList.toggle("navChange");
    facebook.classList.toggle("facebookChange");
    twitter.classList.toggle("twitterChange");
    instagram.classList.toggle("instagramChange");
    linkedin.classList.toggle("linkedinChange");
    github.classList.toggle("githubChange");
    body.classList.toggle("backgroundChange");
}

function mobileFunction() {
    var mobNav = document.getElementById("nav-mob-links");
    var br1 = document.getElementById("br-1-mob");
    var br2 = document.getElementById("br-2-mob");
    var br3 = document.getElementById("br-3-mob");
    var br4 = document.getElementById("mobileMainContainer");
    mobNav.classList.toggle("openMobNav");
    br1.classList.toggle("br-1-mobChange");
    br2.classList.toggle("br-2-mobChange");
    br3.classList.toggle("br-3-mobChange");
    br4.classList.toggle("br-4-mobChange");
}


// window.onscroll = function() {slideUp()};

// function slideUp() {
//     if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
//         document.getElementById("feature").className = "slideUp";
//     }
// }