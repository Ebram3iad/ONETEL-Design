
// Header IMGs Src
var index = 0;
var imgSrc = new Array();
imgSrc[0] = "IMG/h.jpg";
imgSrc[1] = "IMG/h1.jpg";
imgSrc[2] = "IMG/h3.jpg";
imgSrc[3] = "IMG/h4.jpg";
imgSrc[4] = "IMG/h6.jpg";
imgSrc[5] = "IMG/h7.jpg";
imgSrc[6] = "IMG/h5.png";
imgSrc[7] = "IMG/h2.webp";

// Change Header Imgs Src
function Slider() {
    index++;
    if (index == 7) {
        index = 0;
    }
    document.images["imgShow"].src = imgSrc[index];
}


var item;
//Change Header Imgs Src every 2.5 Sec
function showImgInfinite() {
    item = setInterval("Slider()", 2500);
}

//Make Nav Items Avtive

// Add active class to the current Anchor in Nav Bar (highlight it)
function ActiveMe() {
    var Ul = document.getElementById("myUl");
    var Anchors = Ul.getElementsByClassName("nav-item");
    for (var i = 0; i < Anchors.length; i++) {
        Anchors[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}

// Show the hidden Paragraph

function ShowMore(){
    var p=document.getElementById("hiddenParagraph");
    var btn=document.getElementById("learnMore");
    
    if(p.style.display=="none")
    {
        p.style.display="block";
        btn.value="LEARN LESS";
    }
else{
    p.style.display="none";
        btn.value="LEARN MORE";
}
     
}


//Hide Section Recent Projects
function ShowMoreIMG(){
    var ImgList=document.getElementsByClassName("d-none");
    var btn=document.getElementById("learnMoreImg");
    for (let index = 0; index < ImgList.length; index++) {       
    if(ImgList[index].style.display=="none")
    {
        ImgList[index].style.display="block";
        btn.innerHTML="LEARN LESS";
    }
else{
    ImgList[index].style.display="none";
        btn.innerHTML="LEARN MORE";
}
}    
}