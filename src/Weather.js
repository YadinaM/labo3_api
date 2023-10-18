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
            const temperature = data.current_weather.temperature;
            
            const h2Sentence = document.createElement("h1");
            h2Sentence.textContent = "It is currently";
            
            const h2Temperature = document.createElement("h1");
            h2Temperature.textContent = `${temperature}°C`;
            
            const weatherContainer = document.querySelector("#weather");
            weatherContainer.appendChild(h2Sentence);
            weatherContainer.appendChild(h2Temperature);      
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
                imgElement.style.width = "320px";

                document.querySelector("#weather").appendChild(imgElement);

                const pElement = document.createElement("p");
                pElement.textContent = "the perfect temperature to watch our new foxes";
    
                const weatherContainer = document.querySelector("#weather");
                weatherContainer.appendChild(pElement);
            })
            .catch(error => {
                console.log(error);
            });
     }

    error(){
        console.log(error);
    }
}
