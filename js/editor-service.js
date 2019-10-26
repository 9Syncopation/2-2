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
            stroke: 'black',
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

function getCurrImg() {

    return gImgs[gMeme.selectedImgId - 1];
}

function getMeme() {
    return gMeme;
}

function changeText(elText) {
    gMeme.txts[gSelectedTxtIdx].line = elText

}

function changeFontSize(size) {
    let diffSize;
    if (size === 1) diffSize = 1
    else diffSize = -1

    gMeme.txts[gSelectedTxtIdx].size += diffSize
}

function changePos(pos) {
    let diffY = 3;
    if (pos === 'up') gMeme.txts[gSelectedTxtIdx].y -= diffY;
    else gMeme.txts[gSelectedTxtIdx].y += diffY;
}

function editTxtColor(color) {
    gMeme.txts[gSelectedTxtIdx].color = color
    console.log('color', color);

}

function ChangeStroke(color) {
    gMeme.txts[gSelectedTxtIdx].stroke = color;
}

function alignText(pos) {
    let currentTxt = gMeme.txts[gSelectedTxtIdx].line;
    let textWidth = gCtx.measureText(currentTxt).width;
    let x
    if (pos === 'center') {
        x = (gCanvas.width / 2) - (textWidth / 2)
    }
    if (pos === 'left') {
        x = 20;
    }
    if (pos === 'right') {
        x = gCanvas.width - textWidth - 10;
    }
    gMeme.txts[gSelectedTxtIdx].x = x;
}

// function addLine(txt) {
//     if (gSelectedTxtIdx === 2) return;
//     gMeme.selectedTxtIdx += 1;
//     let y;
//     if (gSelectedTxtIdx === 1) {
//         y = gCanvas.height - 20;
//     }
//     if (gSelectedTxtIdx === 2) {
//         y = gCanvas.height / 2;
//     }

//     addTxt(txt, 20, y);
// }

// function clearTxt() {
//     let elTxt = document.querySelector('#txtInput');
//     elTxt.value = '';
// }

// function addTxt(text, x, y) {
//     let txt = {
//         line: text,
//         stroke: 'black',
//         font: 'Impact',
//         size: 32,
//         align: 'bottom',
//         color: 'white',
//         x: 30,
//         y: 30,
//     }
//     gMeme["txts"].push(txt);
// }

function editTxtStyle(txtStyle) {

    gMeme.txts[gSelectedTxtIdx].txtStyle = txtStyle

}