'use strict'

let gMeme = {
    selectedImgId: getFromStorage('imgDetail'),
    selectedTxtIdx: 0,
    txts: [
        {
            line: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            stroke: 'black',
            txtStyle: 'impact',
            x: 20,
            y: 40,
        }
    ]
}

function initMeme() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d')
    drawImgInCanvas();
}

function getCurrentText() {
    return gMeme.txts[gMeme.selectedTxtIdx];
}

function setNextText() {
    gMeme.selectedTxtIdx < gMeme.txts.length - 1 ? gMeme.selectedTxtIdx++ : gMeme.selectedTxtIdx = 0;
}

function getCurrImg() {
    return gImgs[gMeme.selectedImgId - 1];
}

function getAllTxt() {
    return gMeme.txts;
}

function changeText(elText) {
    gMeme.txts[gMeme.selectedTxtIdx].line = elText
}

function changeFontSize(size) {
    let diffSize;
    if (size === 1) diffSize = 1
    else diffSize = -1

    gMeme.txts[gMeme.selectedTxtIdx].size += diffSize
}

function changePos(pos) {
    let diffY = 3;
    if (pos === 'up') gMeme.txts[gMeme.selectedTxtIdx].y -= diffY;
    else gMeme.txts[gMeme.selectedTxtIdx].y += diffY;
}

function editTxtColor(color) {
    gMeme.txts[gMeme.selectedTxtIdx].color = color
    console.log('color', color);

}

function ChangeStroke(color) {
    gMeme.txts[gMeme.selectedTxtIdx].stroke = color;
}

function alignText(pos) {
     gMeme.txts[gMeme.selectedTxtIdx].align = pos;
}

function addText(line) {
    let txt = {
        line,
        stroke: 'black',
        font: 'Impact',
        size: 32,
        align: 'bottom',
        color: 'white',
        y: gMeme.txts.length === 0 ? 30 : 250,
    }
    gMeme["txts"].push(txt);
}

function editTxtStyle(txtStyle) {
    gMeme.txts[gMeme.selectedTxtIdx].txtStyle = txtStyle
}