

let picsArr = ["https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685518_960_720.jpg", "https://cdn.pixabay.com/photo/2017/09/20/11/53/architecture-2768284_960_720.jpg", "https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_960_720.jpg", "https://cdn.pixabay.com/photo/2016/11/22/21/46/arches-1850730_960_720.jpg", "https://cdn.pixabay.com/photo/2016/01/19/17/02/spiral-1149509_960_720.jpg", "https://cdn.pixabay.com/photo/2016/08/12/20/43/stained-glass-1589648_960_720.jpg"];

let imgTag = document.getElementById("header-img-1");
let i = 0;
console.log(imgTag);

var intervalId;


function changeImage(){
    intervalId=setInterval(moveNext,3000);
}
function moveNext() {


    imgTag.setAttribute("src", picsArr[i]);
    i++;

    if (i == picsArr.length) {
        i = 0;
    }

}

function movePrev() {
    imgTag.setAttribute("src", picsArr[i]);
    i--;
    if (i < 0) {
        i = picsArr.length - 1;
    }
}