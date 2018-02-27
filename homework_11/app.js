var rootNode = document.getElementById("root");

function treeView(structure) {
  let ul = document.createElement("ul");

  for (let i = 0; i < structure.length; i++) {

    let li = document.createElement("li");
    console.log(structure[i]);
    console.log(structure[i].folder)

    if (structure[i].folder) {
      li.innerHTML = `<p class="folder-item" onclick="elementView()">
  <i class="material-icons">folder</i>
  <span>${structure[i].title}</span>
</p>`;
      li.className = "folder";
      ul.appendChild(li);

      if (structure[i].children) {
        let childElements = (treeView(structure[i].children));
        li.appendChild(childElements);
      }

      else {
        let p = document.createElement("p");
        p.innerHTML = "folder is empty";
        p.className = "folder-empty";
        li.appendChild(p);
      }
    }

    else {
      li.innerHTML = `<p class="folder-item">
   <i class="material-icons">insert_drive_file</i>
   <span>${structure[i].title}</span>
  </p>`
      li.className = "file";
    }

    ul.appendChild(li);
  }
  return ul;
}

rootNode.appendChild(treeView(structure));
