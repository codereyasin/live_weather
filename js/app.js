window.addEventListener("load", () => {
  let lon;
  let lat;
  let tempertureDegree = document.querySelector('.temperture-degree')
  let locationTimezone = document.querySelector('.location-timezone')
  let tempatureDescription = document.querySelector('.tempature-description')
  let Icons = document.querySelector('.icons')
  let degreeSection = document.querySelector('.degree-section')
  let temperaturespan = document.querySelector('.temperature span')
  let tempertureh2 = document.querySelector('.temperture-degree h2')
  let weather_img = document.querySelector('.weather_img')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      let api = `http://api.weatherapi.com/v1/current.json?key=f532b5669a374cac9ec62417223105&q=${lat},${lon}`;
      fetch(api)
        .then(response => response.json())
        .then((data) =>{
            console.log(data)
            const {temp_c, icon} = data.current;
            tempertureDegree.innerHTML = Math.floor(temp_c);
            tempatureDescription.innerHTML = data?.current?.condition?.text;
            locationTimezone.innerHTML = data?.location?.name + ', ' + data?.location?.country;
            let farenhit = data?.current?.temp_f;
            weather_img.src = data?.current?.condition?.icon
            degreeSection.addEventListener('click', () =>{
                if(temperaturespan.innerHTML === "°C"){
                  temperaturespan.innerHTML = "°F"
                  tempertureDegree.innerHTML = Math.floor(farenhit)
                }else{
                  temperaturespan.innerHTML = "°C"
                  tempertureDegree.innerHTML = Math.floor(temp_c)
                }
            })
        })
    });
  }
});
