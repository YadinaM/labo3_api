export default class Weather{
    constructor(){
        this.getLocation();
        this.getAnimal();
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(this.haveLocation.bind(this), this.error.bind(this));
    }

    haveLocation(result){
        this.la = result.coords.latitude;
        this.lo = result.coords.longitude;
        this.getWeather();
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

    getAnimal() {
        let url2 = `https://randomfox.ca/floof/`;
        fetch(url2)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const imageUrl = data.image;
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                document.querySelector("#weather").appendChild(imgElement);
            })
            .catch(error => {
                console.log(error);
            });
    }

    error(){
        console.log(error);
    }
}
