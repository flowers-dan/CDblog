function openchart(i) {
    console.log(i)
    let myChart = echarts.init(document.getElementById('mychart'));

    fetch("./json/" + i + ".json")
        .then(response => response.json())
        .then(json => {
            console.log(json)
            myChart.setOption(json.data);
            document.getElementById("content").innerHTML=json.content;
        })
}
openchart('mychart')