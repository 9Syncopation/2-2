'use strict'



let gImgs = createImgs();

var gKeywords = {'happy': 12,'funny puk': 1}

var gMeme = {
 selectedImgId: getFromStorage('imgDetail'),
 selectedTxtIdx: 0,
 txts: [
 {
 line: 'I never eat Falafel',
 size: 20,
 align: 'left',
 color: 'red'
 }
 ]
}





function createImgs() {
    return [
        { id: 1, url: "img/1.jpg", keywords: ['crazy'] },
        { id: 2, url: "img/2.jpg", keywords: ['nature'] },
        { id: 3, url: "img/3.jpg", keywords: ['politics'] },
        { id: 4, url: "img/4.jpg", keywords: ['dogs'] },
        { id: 5, url: "img/5.jpg", keywords: ['baby'] },
        { id: 6, url: "img/6.jpg", keywords: ['cats'] },
        { id: 7, url: "img/7.jpg", keywords: ['dogs'] },
        { id: 8, url: "img/8.jpg", keywords: ['actor'] },
        { id: 9, url: "img/9.jpg", keywords: ['baby'] },
        { id: 10, url: "img/10.jpg", keywords: ['funny'] },
        { id: 11, url: "img/11.jpg", keywords: ['funny'] },
        { id: 12, url: "img/12.jpg", keywords: ['actor'] },
        { id: 13, url: "img/13.jpg", keywords: ['politics'] },
        { id: 14, url: "img/14.jpg", keywords: ['baby'] },
        { id: 15, url: "img/15.jpg", keywords: ['dog'] },
        { id: 16, url: "img/16.jpg", keywords: ['politics'] },
        { id: 17, url: "img/17.jpg", keywords: ['kissing'] },
        { id: 18, url: "img/18.jpg", keywords: ['actor'] },
        { id: 19, url: "img/19.jpg", keywords: ['crazy'] },
        { id: 20, url: "img/20.jpg", keywords: ['movie'] },
        { id: 21, url: "img/21.jpg", keywords: ['movie'] },
        { id: 22, url: "img/22.jpg", keywords: ['movie'] },
        { id: 23, url: "img/23.jpg", keywords: ['movie'] },
        { id: 24, url: "img/24.jpg", keywords: ['politics'] },
    ]
}

function getGalleryImgs (){
    return gImgs
}

function getImg(currId){
    saveToStorage('imgDetail',currId)
    window.open("editor.html","_self"); 
}