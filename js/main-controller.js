'use strict'


function init() {
    renderGalleryImgs();
    renderKeyWords();
}


function renderGalleryImgs() {
    var imgs = getImgsForDisplay()
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
    let txt = gMeme.txts[gSelectedTxtIdx].line
    document.querySelector('#txtInput').value = txt;
    let memeTxt = getMeme().txts
    memeTxt.map(txt => {
        gCtx.textAlign = txt.align;
        gCtx.fillStyle = txt.color;
        gCtx.font = txt.size + 'px ' + txt.txtStyle;
        gCtx.strokeText(txt.line, txt.x, txt.y)
        // debugger;
        gCtx.fillText(txt.line, txt.x, txt.y);
        console.log(txt.line);
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

// function onAddLine() {
//     clearTxt();
//     let elTxt = document.querySelector('#txtInput').value;
//     addLine(elTxt);
//     renderCanvas();
// }

function onEditTxtStyle(txtStyle) {
    editTxtStyle(txtStyle);
    renderCanvas();
}


//////// galerry filter/////
function renderKeyWords() {
    let currKeyWords = getKeyWords();
    let strHtml = ''
    for (let currKey in currKeyWords) {
        let currValue = currKeyWords[currKey];
        let wordSize = currValue + 15 + 'px';
        strHtml += `<li  onclick="onFilterByKeyWord('${currKey}')" style="font-size:${wordSize}">${currKey}</li>`
    }
    document.querySelector('.filter-bar').innerHTML = strHtml
    console.log(currKeyWords);

    
}
function onFilterByKeyWord(txt) {
    // debugger;
    setFilter(txt);
    renderGalleryImgs();
}