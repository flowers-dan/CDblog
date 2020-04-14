function getData(val) {
    console.log(val)
    fetch(val)
        .then(response => response.json())
        .then(myJson => {
                console.log(myJson)
                document.getElementById("title").innerHTML = myJson.title;
                document.getElementById("content").innerHTML = myJson.content;
                document.getElementById("form").innerHTML = myJson.form;
            }
        )
}

getData("./json/web1.json")

function getActive() {
    let x = document.getElementsByClassName("cd_list")
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("active")
    }
    this.classList.add("active")
}

fetch("./json/list.json")
    .then(response => response.json())
    .then(myJson => {
        for (let i = 0; i < myJson.length; i++) {
            let li = document.createElement("li")
            li.className = "cd_list"
            li.addEventListener("click", getActive)
            let a = document.createElement("a")
            a.innerText = myJson[i].title
            a.href = "javascript:;"
            a.onclick = () => {
                getData(myJson[i].event)
            }
            li.appendChild(a);

            let element = document.getElementById("list")
            element.appendChild(li)
        }
        let x = document.getElementsByClassName("cd_list")
        x[0].classList.add("active")
    })
