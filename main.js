const newName = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");


window.addEventListener("load" ,() =>{
    document.getElementById("iconsContainer").style.visibility = 'visible';
    document.getElementById("weatherContainer").style.visibility = 'hidden';

    if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }   else{
            alert("Your browser does not support geolocation api");
                }
    }
    );
    
    
    
    function onSuccess(position){
        const { latitude, longitude } = position.coords;
        document.getElementById("iconsContainer").style.visibility = 'visible';
        document.getElementById("weatherContainer").style.visibility = 'hidden';
  
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=399742cdcb44f520879454415508fa74`)
        
            .then(response => response.json())
            
            .then(data =>{
                console.log(data);
             document.getElementById(cityName.innerHTML="--"+data.city.name+"--");
                for(i=0; i<5; i++){
                    document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" +Number(data.list[i].main.temp_min -272.15).toFixed(1)+"°";     
                  }
                for(i=0; i<5; i++){
                    document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" +Number(data.list[i].main.temp_max -272.15).toFixed(1)+"°";
                  }
                
                for(i=0; i<5; i++){
                    document.getElementById("img" +(i+1)).src = "https://openweathermap.org/img/wn/" +data.list[i].weather[0].icon+".png";
                }
              
            })
    
    }

    
    function onError(err)
    {
        let weatherContainer = document.getElementById("weatherContainer");
        weatherContainer.style.visibility='visible';
        let errorHandle=document.createElement("h1");
        errorHandle.innerHTML="Geoloaction not supported";
        weatherContainer.appendChild(errorHandle).style.textAlign = 'center';
        document.getElementById("iconsContainer").style.visibility = 'hidden';
     

    }
     
       
    function getInfo(){

    document.getElementById("iconsContainer").style.visibility = 'visible';
    document.getElementById("weatherContainer").style.visibility = 'hidden';
    cityName.innerHTML = "--"+newName.value+"--";
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=399742cdcb44f520879454415508fa74')
    .then(response => response.json())
    .then(data =>{
       
        for(i=0; i<5; i++){
            document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" +Number(data.list[i].main.temp_min -272.15).toFixed(1)+"°";     
          }
        for(i=0; i<5; i++){
            document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" +Number(data.list[i].main.temp_max -272.15).toFixed(1)+"°";
          }
        
        for(i=0; i<5; i++){
            document.getElementById("img" +(i+1)).src = "https://openweathermap.org/img/wn/" +data.list[i].weather[0].icon+".png";
        }
       
    })

    .catch(err => {
        
        let weatherContainer = document.getElementById("weatherContainer");
            weatherContainer.style.visibility='visible';
        let errorHandle=document.createElement("h1");
            errorHandle.innerHTML="Enter a valid city name";
            weatherContainer.appendChild(errorHandle).style.textAlign = 'center';
            document.getElementById("iconsContainer").style.visibility = 'hidden';
                newName.value=""; 
       
                
})

    }
   

const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day){

    if(day +d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

for(i=0; i<5; i++){
    document.getElementById("day"+(i+1)).innerHTML =weekday[checkDay(i)];
}

