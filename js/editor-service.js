'use strict'

let gCanvas
let gCtx
let gCurrTxt
let gSelectedTxtIdx = gMeme.selectedTxtIdx

var gMeme = {
    selectedImgId: getFromStorage('imgDetail'),
    selectedTxtIdx: 0,
    txts: [
        {
            line: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            x:20,
            y:40,
        }
    ]
}



function initMeme() {

    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d')
    drawImgInCanvas();

}

function getCurrImg() {

    return gImgs[gMeme.selectedImgId - 1];
}

function getMeme() {
    return gMeme;
}

function changeText(elText) {
    gMeme.txts[gSelectedTxtIdx].line = elText
    
}