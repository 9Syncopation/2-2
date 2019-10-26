'use strict'


function init() {
    renderGalleryImgs();
}


function renderGalleryImgs() {
    var imgs = getGalleryImgs()
    let elImgGallery = document.querySelector('.gallery');
    let strHtml = ''
    imgs.map(function (currImg) {
        strHtml += `<img src= "${currImg.url}" id="${currImg.id}" onclick="getImg('${currImg.id}')"></img>`
    })
    elImgGallery.innerHTML = strHtml
}

function drawImgInCanvas() {
    // debugger
    let currImg = getCurrImg()
    let img = new Image()
    img.src = currImg.url
    img.onload = () => {
        gCanvas.width = img.width
        gCanvas.height = img.height
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }

}
