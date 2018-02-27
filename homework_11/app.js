var rootNode = document.getElementById("root");

var mainDoc = document.createElement("DIV");

mainDoc.appendChild(checkArray(structure, true));

rootNode.appendChild(mainDoc);

function checkArray(array, isFirst) {
    var newDiv = document.createElement("DIV");
    array.forEach(function (p1) {
        if (p1.folder) {
            var newFolder = document.createElement("DIV");
            var newFolderSpan = document.createElement("SPAN");
            var newFolderName = document.createTextNode(p1.title);

            newFolderSpan.appendChild(newFolderName);
            newFolderSpan.addEventListener("click", function() {
                openFunction(p1.title);
            });
            newFolderSpan.style.verticalAlign = 'super';

            newFolder.setAttribute('id', p1.title);
            newFolder.appendChild(createIcon('folder', p1.title));
            newFolder.style.cursor = 'pointer';
            newFolder.appendChild(newFolderSpan);

            if (!isFirst) {
                newFolder.classList.add('childrenFolder');
            }
            if (p1.children) {
                newFolder.appendChild(checkArray(p1.children, false));
            } else {
                var empty = document.createElement("DIV");
                var emptyText = document.createTextNode('Folder is empty');
                empty.appendChild(emptyText);
                empty.classList.add('emptyFolder');
                newFolder.appendChild(empty);
            }
            newDiv.appendChild(newFolder);
        } else {
            var newDocument = document.createElement("DIV");
            var newDocumentName = document.createTextNode(p1.title);
            var newDocumentSpan = document.createElement("SPAN");
            newDocumentSpan.appendChild(newDocumentName);
            newDocumentSpan.style.verticalAlign = 'super';
            newDocument.appendChild(createIcon('insert_drive_file', p1.title));
            newDocument.appendChild(newDocumentSpan);
            newDocument.style.cursor = 'pointer';
            if (!isFirst) {
                newDocument.classList.add('childrenFolder');
            }
            newDiv.appendChild(newDocument);
        }
    });
    return newDiv;
}

//create folder element
function createIcon(type, id) {
    var icon = document.createElement("i");
    var iconName = document.createTextNode(type);
    icon.appendChild(iconName);
    icon.classList.add('material-icons');
    if (type === 'insert_drive_file'){
        icon.style.color = "#cccccc";
    } else {
        icon.style.color = "#f5cd3d";
        icon.addEventListener("click", function() {
            openFunction(id);
        });
    }
    return icon;
}

function openFunction(id){
    var folder = document.getElementById(id);
    for (var i = 0; i < folder.children.length; i++){
        if (folder.children[i].nodeName === 'DIV'){
            var el = folder.children[i];
            if (el.style.display === 'block'){
                el.style.display = 'none';
                for (var y = 0; y < el.children.length; y++){
                    el.children[y].style.display = 'none';
                }
            } else {
                el.style.display = 'block';
                for (var z = 0; z < el.children.length; z++){
                    el.children[z].style.display = 'block';
                }
            }
        } else if (folder.children[i].nodeName === 'I') {
            if (folder.children[i].innerHTML === 'folder'){
                folder.children[i].innerHTML = 'folder_opens';
                folder.children[i].style.maxWidth = '24px';
            } else {
                folder.children[i].innerHTML = "folder"
            }

        }
    }
}