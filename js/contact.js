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
    var backGround = document.getElementById("bgClassImage");
    var body = document.getElementById("mainBody");
    var conInfo = document.getElementById("contactInfoContainer");
    var conLinksTwo = document.getElementById("listTwo");
    var conLinks = document.getElementById("listOne");
    var conLogo = document.getElementById("emailLogo");
    var conLogoTwo = document.getElementById("emailLogoTwo");
    var conLogoThree = document.getElementById("emailLogoThree");
    var conLogoFour = document.getElementById("phoneLogo");
    var conLogoFive = document.getElementById("discordLogo");
    var mainLogo = document.getElementById("logo");
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
    backGround.classList.toggle("bgChange");
    body.classList.toggle("bodyChange");
    conInfo.classList.toggle("contactInfoChange");
    conLinksTwo.classList.toggle("contactLinksChange");
    conLinks.classList.toggle("contactLinksChange");
    conLogo.classList.toggle("contactLogoChange");
    conLogoTwo.classList.toggle("contactLogoChange");
    conLogoThree.classList.toggle("contactLogoChange");
    conLogoFour.classList.toggle("contactLogoChange");
    conLogoFive.classList.toggle("contactLogoChange");
    mainLogo.classList.toggle("personaImgChange");
}

// BUILDING START ---------------------------------

function animationBtn() {
    var bOne = document.getElementById("buildingOne");
    var bTwo = document.getElementById("buildingTwo");
    var bThree = document.getElementById("buildingThree");
    var bFour = document.getElementById("buildingFour");
    var bFive = document.getElementById("buildingFive");
    var bSix = document.getElementById("buildingSix");
    var bSeven = document.getElementById("buildingSeven");
    var bEight = document.getElementById("buildingEight");
    var bNine = document.getElementById("buildingNine");
    bOne.classList.toggle("buildingOneChange");
    bTwo.classList.toggle("buildingTwoChange");
    bThree.classList.toggle("buildingThreeChange");
    bFour.classList.toggle("buildingFourChange");
    bFive.classList.toggle("buildingFiveChange");
    bSix.classList.toggle("buildingSixChange");
    bSeven.classList.toggle("buildingSevenChange");
    bEight.classList.toggle("buildingEightChange");
    bNine.classList.toggle("buildingNineChange");
}

// BUILDING END --------------------------------------

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
