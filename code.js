// random image

function randomImg() {
    console.log("running")
        // create a new array and name it myImages
    var myImages = new Array();

    // add images to array
    myImages[1] = "./images/11.png";
    myImages[2] = "./images/12.png";
    myImages[3] = "./images/13.png";
    myImages[4] = "./images/14.png";
    myImages[5] = "./images/15.png";
    myImages[6] = "./images/16.png";
    myImages[7] = "./images/17.png";
    myImages[8] = "./images/18.png";
    myImages[9] = "./images/19.png";
    myImages[10] = "./images/21.png";
    myImages[11] = "./images/2.png";
    myImages[12] = "./images/22.png";
    myImages[13] = "./images/23.png";
    myImages[14] = "./images/24.png";
    myImages[15] = "./images/issue1.png";



    var rnd = Math.floor(Math.random() * myImages.length);
    if (rnd == 0) {
        rnd = 1;
    }

    //show the banner
    document.write('<img src="' + myImages[rnd] + '" style=" z-index: 0; position:absolute; top:' +
        randomY() + '%; left:' + randomX() + '%; width: 30%;"' + '"border="0"></a>');
}

// + '"style="top:' +
//         randomY() + '%; left:' + randomX() + '%; width: 20%;"

function randomY() {
    var rnd_y = 10 + Math.floor(Math.random() * 70);
    return rnd_y;

}

function randomX() {
    var rdd_x = Math.floor(Math.random() * 80);
    return rdd_x;
}

function refresh() {
    console.log('yay')
    window.location.reload();
    randomImg();
}