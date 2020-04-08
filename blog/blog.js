function getData(val) {
    fetch(val)
        .then(response => response.json())
        .then(myJson => {
                document.getElementById("title").innerHTML = myJson.title;
                document.getElementById("content").innerHTML = myJson.content;

            }
        )
}

getData('./json/blog1.json')


fetch("./json/list.json")
    .then(response => response.json())
    .then(myJson => {
        for (let i = 0; i < myJson.length; i++) {
            let li = document.createElement("li")
            let a = document.createElement("a")
            a.innerText = myJson[i].title
            a.href = "javascript:;"
            a.onclick = () => {
                getData(myJson[i].event)
            }
            li.appendChild(a);
            li.className="myli"
            let element = document.getElementById("list")
            element.appendChild(li)
        }
    })


var cns = document.getElementsByClassName("myli");
console.log(cns)
for(let i = 0;i<3;i++)
{

    cns[i].addEventListener('click',function () {

        for(let i = 0;i<cns.length;i++){
            cns[i].className = "";
        }
        this.className = "lis";

    });

}
