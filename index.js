const uiNavElements = [
    {title: "Home", link: "../index.html"},
    {title: "Blogs", link: "../Blogs/blogIndex.html"},
    {title: "Internet Art", link: "../Internet Art/artIndex.html"},
    {title: "About", link: "../About/aboutIndex.html"}
]

function displayUiNavElements(){
    let nav = document.getElementById("navigation");
    let ul = document.createElement("ul");
    ul.setAttribute("id", "listItem-Container");
    nav.appendChild(ul);


    for(let i = 0; i<uiNavElements.length; i++){
        const li = document.createElement("li");
        li.setAttribute("class","list-Item");
        const a = document.createElement("a");

        a.innerHTML = uiNavElements[i].title;
        a.href = uiNavElements[i].link;

        ul.appendChild(li);
        li.appendChild(a);

    }
}
document.addEventListener('DOMContentLoaded', displayUiNavElements());