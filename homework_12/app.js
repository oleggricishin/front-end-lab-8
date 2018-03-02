var rootNode = document.getElementById("root");
var divThumbnails = document.createElement("DIV");
var divTank = document.createElement("DIV");
divTank.id = "details";
divTank.style.display = "none";
divThumbnails.className = "thumbnails";
divThumbnails.style.display = "content"
window.location.hash = "#thumbnails";
mainWindow();

function mainWindow() {
    var h1 = document.createElement("H1");
    h1.innerText = "Most popular tanks";
    divThumbnails.append(h1);
    for (var i = 0; i < tanks.length; i++) {
        var div = document.createElement("DIV");
        var div1 = document.createElement("DIV");
        var imgTank = document.createElement("IMG");
        var imgCountry = document.createElement("IMG");
        var pTag = document.createElement("P");
        var pTag1 = document.createElement("P");
        var spanTag = document.createElement("SPAN");
        imgTank.setAttribute("src", tanks[i].preview);
        imgCountry.setAttribute("src", tanks[i].country_image);
        imgCountry.setAttribute("title", tanks[i].country);
        imgTank.className = "imgTank";
        imgCountry.className = "imgCountry";
        div1.className = "div1";
        div.className = "tank";
        spanTag.className = "pInner";
        spanTag.innerText = tanks[i].model;
        spanTag.setAttribute("title", tanks[i].model);
        pTag.innerText = " " + tanks[i].level + " ";
        var iden = tanks[i].model.toString().replace(/ /g, "_")
        div.id = iden;
        div.setAttribute("onClick", "reply_click(this)");
        pTag.append(spanTag);
        div1.append(imgCountry, pTag)
        div.append(imgTank, div1);
        divThumbnails.append(div);

    }
    rootNode.append(divThumbnails);
}


function reply_click(obj) {
    var id = obj.id;
    location.hash = id;
    divThumbnails.style.display = "none";
    divTank.style.display = "inline-block";
    newWindow(id.toString().replace(/_/g, " "));

}


function newWindow(ident) {
    for (var i = 0; i < tanks.length; i++) {
        if (tanks[i].model == ident) {
            var divMain = document.createElement("DIV");
            var divH1 = document.createElement("DIV");
            var divPreview = document.createElement("DIV");
            var divCharacteristic = document.createElement("DIV");
            var h1 = document.createElement("H1");
            var h11 = document.createElement("H1");
            var h2 = document.createElement("H2");
            var h21 = document.createElement("H2");
            var imgCountry = document.createElement("IMG");
            var imgTank = document.createElement("IMG");
            var table = document.createElement("TABLE");
            var aTag = document.createElement("A");
            divMain.id = "divMain";
            h1.className = h11.className = "h1Tank";
            divPreview.className = "preview";
            divCharacteristic.className = "characteristic";
            imgTank.setAttribute("src", tanks[i].preview);
            h2.innerText = "Preview";
            h21.innerText = "Characteristic";
            imgCountry.setAttribute("src", tanks[i].country_image);
            imgCountry.setAttribute("title", tanks[i].country);
            h1.innerText = " " + tanks[i].model;
            h11.innerHTML = " (level " + tanks[i].level + ")";
            aTag.innerText = "Back to list view";
            aTag.setAttribute("onClick", "reply_click1()");

            var keys = Object.keys(tanks[i].details);
            var values = Object.values(tanks[i].details);
            var values1;
            for (var j = 0; j < keys.length; j++) {
                var tr = document.createElement("TR");
                var td = document.createElement("TD");
                var td1 = document.createElement("TD");
                values1 = keys[j].toString().replace(/_/g, " ");
                td.innerText = values1;
                td1.innerText = values[j];
                tr.append(td, td1);
                table.append(tr);
            }

            divPreview.append(h2, imgTank, aTag);
            divCharacteristic.append(h21, table);
            divH1.append(imgCountry, h1, h11);
            divMain.append(divH1, divPreview, divCharacteristic);
            divTank.append(divMain);
            rootNode.append(divTank);
        }

    }

}

function reply_click1() {
    divThumbnails.style.display = "inline-block";
    divTank.style.display = "none";
    location.hash = "#thumbnails";
    var parent = document.getElementById("details");
    var child = document.getElementById("divMain");
    parent.removeChild(child);
}