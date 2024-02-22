$(document).ready(function(){
    $("#DIV-VALORANT").hover(divCursorInValorant,divCursorOutValorant)
    $("#DIV-LOL").hover(divCursorInLOL,divCursorOutLOL)
    $("#DIV-CSGO").hover(divCursorInCSGO,divCursorOutCSGO)
    $("#DIV-DOTA2").hover(divCursorInDOTA2,divCursorOutDOTA2)  
});

function divCursorInValorant() {
    $("#EVENTO-VALORANT-FIGURA").animate({"right":"+=2%"},{duration:500})
}
function divCursorOutValorant() {
    $("#EVENTO-VALORANT-FIGURA").animate({"right":"-=2%"},{duration:500})
}

function divCursorInLOL() {
    $("#EVENTO-LOL-FIGURA").animate({"right":"+=2%"},{duration:500})
}
function divCursorOutLOL() {
    $("#EVENTO-LOL-FIGURA").animate({"right":"-=2%"},{duration:500})
}

function divCursorInCSGO() {
    $("#EVENTO-CSGO-FIGURA").animate({"right":"+=2%"},{duration:500})
}
function divCursorOutCSGO() {
    $("#EVENTO-CSGO-FIGURA").animate({"right":"-=2%"},{duration:500})
}

function divCursorInDOTA2() {
    $("#EVENTO-DOTA2-FIGURA").animate({"right":"+=2%"},{duration:500})
}
function divCursorOutDOTA2() {
    $("#EVENTO-DOTA2-FIGURA").animate({"right":"-=2%"},{duration:500})
}