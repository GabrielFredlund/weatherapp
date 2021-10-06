function getInfo() {

    var newName = document.getElementById("myCity");
    var myCityName = document.getElementById("myCityName");
    myCityName.innerHTML = newName.value;




fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=82df589e8b8f0cb5242ddea3c630eb8a')
.then(response => response.json())
.then(data => {

    
    for(i = 0; i<5; i++){
        document.getElementById("dag" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°C";
        
    }

    for(i = 0; i<5; i++){
        document.getElementById("dag" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(1) + "°C";
    }
    

     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    
    console.log(data)


})

.catch(err => alert("Något har gått fel"))
}

function defaultScreen(){
    document.getElementById("myCity").defaultValue = "Gävle";
    getInfo();
}

function myGreeting(){
    alert("Välkommen till Gabriels väderapplikation");
}


var d = new Date();
var veckodag = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag",];


function CheckDay(dag){
    if(dag + d.getDay() > 6){
        return dag + d.getDay() - 7;
    }
    else{
        return dag + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("dag" + (i+1)).innerHTML = veckodag[CheckDay(i)];
    }


