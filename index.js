
// <img src="https://media.istockphoto.com/id/494251010/photo/light-bulb.jpg?s=612x612&w=0&k=20&c=XxHOsnlt-Qfe4XnMxILdQNDZYF43tJw1JgrbTupvma4=" alt="">



let bulbImgEl = document.getElementById("bulbImg");

let catImgEl = document.getElementById("catImg");

let msgEl = document.getElementById("msg");

let offBtnEl = document.getElementById("offBtn");

let onBtnEl = document.getElementById("onBtn");


function onHidecat(){

    bulbImgEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

    catImgEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    msgEl.textContent = "Switch Off";

    offBtnEl.style.backgroundColor = "grey";

    onBtnEl.style.backgroundColor = "green";

}

function onShowcat(){

    bulbImgEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

    catImgEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png" ;

    msgEl.textContent = "Switch On";

    offBtnEl.style.backgroundColor = "red";

    onBtnEl.style.backgroundColor = "grey";



    
}