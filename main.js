function getInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";
}

fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=399742cdcb44f520879454415508fa74")
    .then(response => response.json())
    .then(data =>{
        for(i=0; i<5; i++){
            document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" +Number(data.list[i].main.temp_min -288.53).toFixed(1)+"°";     
          }
          for(i=0; i<5; i++){
            document.getElementById("day" +(i+1)+"Max").innerHTML = "Min:" +Number(data.list[i].main.temp_max -288.53).toFixed(1)+"°";
          }
    } )
