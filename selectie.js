
var tablets = [
    {merk:"apple", kleur:"zilver", formaat:10, afb: "apple zilver 10.png",
    link:"apple_1.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"apple", kleur:"spacegrey", formaat:10, afb: "apple space grey 10.png",
    link:"apple_2.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"apple", kleur:"wit", formaat:10, afb: "apple wit 10.png",
    link:"apple_3.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"lenovo", kleur:"zilver", formaat:10, afb: "lenovo zilver 10.png",
    link: "lenovo_1.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"lenovo", kleur:"zwart", formaat:7, afb: "lenovo-tablet-tab3-7-essential-main.png",
    link: "lenovo_2.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"lenovo", kleur:"zwart", formaat:10, afb: "lenovo zwart 10.png",
    link: "lenovo_3.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"microsoft", kleur:"zilver", formaat:10, afb: "microsoft.png",
    link: "microsoft_1.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"samsung", kleur:"goud", formaat:10, afb: "samsung goud 10.jpg",
    link: "samsung_1.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"samsung", kleur:"zilver", formaat:10, afb: "samsung zilver 10.png",
    link: "samsung_2.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"samsung", kleur:"zwart", formaat:7, afb: "samsung zwart 7.jpg",
    link: "samsung_3.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0},
    {merk:"samsung", kleur:"zwart", formaat:10, afb: "samsung zwart 10.png",
    link: "samsung_4.html", tonenMerk:0, tonenKleur:0, tonenFormaat:0}]
;
//hier nog 2 tablet objecten toevoegen

var merken = ["apple", "samsung", "lenovo", "microsoft"];

var kleuren = ["zilver", "zwart", "spacegrey", "goud", "wit"];

var formaat = [10, 7];

var fKleur = false;
var fMerk = false;
var fFormaat = false;
function initialiseer() {
    for (var i=1;i<=11;i++) {
        document.getElementById("img"+i).src = "";
        document.getElementById("img"+i).style.display = "none";
    }
    var tlen =tablets.length;
    for(var i=0;i<tlen;i++) {
        tablets[i].tonenMerk=0;
        tablets[i].tonenKleur=0;
        tablets[i].tonenFormaat=0;
    }
    fKleur = false;
    fMerk = false;
    fFormaat = false;

}
function toonTablet(index, pos) {
    document.getElementById("img"+pos).src = "img/" + tablets[index].afb;
    document.getElementById("img"+pos).style.display = "inline";
    document.getElementById("imgLink"+ pos).href = tablets[index].link;

}
function toonSelectie(){
    initialiseer();
    filterMerk();
    filterKleur();
    filterFormaat();
    var getoondeImg = 1;
    var tlen =tablets.length;
    //bepaal of een tablet getoond wordt.
    for(var i=0;i<tlen;i++) {
        if (fMerk && fKleur && fFormaat) {
            if (tablets[i].tonenMerk == 1 && tablets[i].tonenKleur==1 && tablets[i].tonenFormaat==1) {
                toonTablet(i,getoondeImg);
                getoondeImg++;
            }
        } else if (fMerk && !fKleur && fFormaat) {
            if (tablets[i].tonenMerk == 1 && tablets[i].tonenFormaat == 1) {
                toonTablet(i,getoondeImg);
                getoondeImg++;
            }
        } else if (!fMerk && fKleur && fFormaat) {
            if (tablets[i].tonenKleur==1 && tablets[i].tonenFormaat == 1) {
                toonTablet(i,getoondeImg);
                getoondeImg++;
            }
        } else if (fMerk && fKleur && !fFormaat) {
            if (tablets[i].tonenMerk == 1 && tablets[i].tonenKleur==1) {
                toonTablet(i,getoondeImg);
                getoondeImg++;
            }
        } else if (fMerk && !fKleur && !fFormaat) {
            if (tablets[i].tonenMerk == 1 ) {
                toonTablet(i,getoondeImg);
                getoondeImg++;
            }
        } else if (!fMerk && fKleur && !fFormaat) {
            if (tablets[i].tonenKleur==1 ) {
                toonTablet(i,getoondeImg);
                getoondeImg++;
            }
        } else{ // als er geen selectie is gemaakt, laat dan alles zien
            showAll();
        }
    }
}

function filterMerk() {
    var tlen =tablets.length;
    var mlen = merken.length;
    console.log(tlen);
    for (var m=0;m<mlen;m++) {
        if (document.getElementById("filter-"+ merken[m]).checked) {
            fMerk = true;
            for(var i=0;i<tlen;i++) {
                if (tablets[i].merk == merken[m]) {
                    tablets[i].tonenMerk = 1;
                }
            }
            // merkGevonden = true
        }
    }
}

function filterKleur(){
    var klen = kleuren.length;
    var tlen =tablets.length;
    for (var k=0;k<klen;k++) {
        if (document.getElementById(kleuren[k]).checked) {
            fKleur = true;
            for(var i=0;i<tlen;i++) {
                if (tablets[i].kleur == kleuren[k]){
                    tablets[i].tonenKleur = 1;
                }
            }
        }
    }

}

function filterFormaat() {
    var tlen =tablets.length;
    var flen = formaat.length;
    for (var f=0;f<flen;f++) {
        if (document.getElementById(formaat[f]).checked) {
            console.log(tlen);

            fFormaat = true;
            for(var i=0;i<tlen;i++) {
                if (tablets[i].formaat == formaat[i]) {
                    console.log(formaat[i]);
                    tablets[i].tonenFormaat = 1;
                }
            }
        }
    }
}

//laat alle items zien
function showAll(){
    var tlen =tablets.length;
    var getoondeImg = 1;
    for(var i=0;i<tlen;i++) {
        toonTablet(i,getoondeImg);
        getoondeImg++;


    }
}

showAll();//bij volledig laden van de DOM wordt deze functie aangeroepen
