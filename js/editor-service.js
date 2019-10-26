'use strict'

let gCanvas
let gCtx


function initMeme(){
    
// debugger;

    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d')
    drawImgInCanvas();
    
}

function getCurrImg(){
    
        return gImgs[gMeme.selectedImgId - 1];
        //  getFromStorage('imgDetail')
    
}