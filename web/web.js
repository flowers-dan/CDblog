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

fetch("./json/list.json")
    .then(response => response.json())
    .then(myJson => {
        for (let i = 0; i < myJson.length; i++) {
            console.log(myJson)
            var li = document.createElement("li")
            var a = document.createElement("a")
            a.innerText = myJson[i].title
            a.href = "javascript:;"
            a.onclick = () => {
                getData(myJson[i].event)
            }
            li.appendChild(a);
            var element = document.getElementById("list")
            list.appendChild(li)
        }
    })