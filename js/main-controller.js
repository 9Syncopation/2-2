'use strict'

let gCanvas;
let gCtx;

function init() {
    renderGalleryImgs();
    renderKeywords();
    document.querySelector('.search-input').addEventListener('input', event => {
        renderGalleryImgs(event.target.value);
    })
}


function renderGalleryImgs(filter = null) {
    let imgs = filter ? filterImages(filter) : getImgs();
    let elImgGallery = document.querySelector('.gallery');
    let strHtml = ''
    imgs.map(function (currImg) {
        strHtml += `<img src= "${currImg.url}" id="${currImg.id}" onclick="getImg('${currImg.id}')"></img>`
    })
    elImgGallery.innerHTML = strHtml
}

function drawImgInCanvas() {

    let currImg = getCurrImg()
    let img = new Image()
    img.src = currImg.url
    img.onload = () => {
        gCanvas.width = img.width
        gCanvas.height = img.height
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }

}

function renderCanvas() {

    // TODO FIND ELGANT SOLUTION TO THIS IMG_ID.ONLOAD AT drawImgInCanvas()
    let currImg = getCurrImg()
    let img = new Image()
    img.src = currImg.url
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    gCanvas.width = img.width
    gCanvas.height = img.height
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    // drawImgInCanvas();
    let currTxt = getCurrentText();
    document.querySelector('#txtInput').value = currTxt.line;
    let allText = getAllTxt();
    allText.map(txt => {
        gCtx.textAlign = txt.align;
        gCtx.fillStyle = txt.color;
        gCtx.font = txt.size + 'px ' + txt.txtStyle;
        gCtx.strokeText(txt.line, gCanvas.width / 2, txt.y, gCanvas.width)
        // debugger;
        gCtx.fillText(txt.line, gCanvas.width / 2, txt.y, gCanvas.width);
    })
}


function onChangeText() {
    let elTxt = document.querySelector('#txtInput').value
    changeText(elTxt)
    renderCanvas()
}

function onChangeFontSize(size) {
    changeFontSize(size);
    renderCanvas();
}

function onChangePos(pos) {
    changePos(pos);
    renderCanvas();
}

function onEditTxtColor() {
    let elColor = document.querySelector('#font-color').value
    editTxtColor(elColor);
    renderCanvas()
}

function onChangeStroke() {
    let elStroke = document.querySelector("#txtStroke").value;
    ChangeStroke(elStroke)
    renderCanvas();
}

function onAlignText(pos) {
    alignText(pos);
    renderCanvas();
}

function onAddLine() {
    let elTxt = document.querySelector('#txtInput').value;
    addText(elTxt);
    setNextText();
    elTxt = '';
    renderCanvas();
}

function onEditTxtStyle(txtStyle) {
    editTxtStyle(txtStyle);
    renderCanvas();
}

function onNext() {
    setNextText();
}


//////// galerry filter/////
function renderKeywords() {
    let currKeywords = getKeywords();
    let strHtml = ''
    for (let currKey in currKeywords) {
        let currValue = currKeywords[currKey];
        let wordSize = currValue + 15 + 'px';
        strHtml += `<li class="keyword-item" onclick="onFilterByKeyword('${currKey}')" style="font-size:${wordSize}">${currKey}</li>`
    }
    document.querySelector('.key-words').innerHTML = strHtml
    console.log(currKeywords);


}
function onFilterByKeyword(txt) {
    // debugger;
    setFilter(txt);
    renderGalleryImgs();
}