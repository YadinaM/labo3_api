export default class Weather{
    constructor(){
        this.getLocation();
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(this.haveLocation.bind(this), this.error.bind(this));
    }

    haveLocation(result){
        this.la = result.coords.latitude;
        this.lo = result.coords.longitude;
        this.getWeather();
        //console.log(this.la);
    }

    getWeather(){
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${this.la}&longitude=${this.lo}&current_weather=true`
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector("#weather").innerHTML = data.current_weather.temperature;
        }).catch(error => {
            console.log(error);
        })
    }

    error(){
        console.log(error);
    }
}
