function getData(val) {
    console.log(val)
    fetch(val)
        .then(response => response.json())
        .then(myJson => {
                console.log(myJson)
                document.getElementById("title").innerHTML = myJson.title;
                document.getElementById("pic1").href = myJson.pic[0];
                document.getElementById("pic1").children[0].src = myJson.pic[0];
                document.getElementById("pic2").href = myJson.pic[1];
                document.getElementById("pic2").children[0].src = myJson.pic[1];
                document.getElementById("pic3").href = myJson.pic[2];
                document.getElementById("pic3").children[0].src = myJson.pic[2];
                document.getElementById("pic4").href = myJson.pic[3];
                document.getElementById("pic4").children[0].src = myJson.pic[3];
                document.getElementById("subtitle").innerHTML = myJson.subtitle;
                document.getElementById("content").innerHTML = myJson.content;

            }
        )
}

getData('./json/view.json')


fetch("./json/list.json")
    .then(response => response.json())
    .then(myJson => {
        for (let i=0;i<myJson.length;i++) {
            console.log(myJson[i])
            let li = document.createElement("li")
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
    })
