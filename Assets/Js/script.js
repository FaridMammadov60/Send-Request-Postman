let input = document.getElementById("input");
let c = document.getElementById("c");
let f = document.getElementById("f");
let search = document.getElementById("search");

let info = document.getElementById("info");
let error = document.getElementById("info");

let city = document.getElementById("city");
let country = document.getElementById("country");
let weather = document.getElementById("weather");
let localTime = document.getElementById("localTime");

$(document).ready(function () {
    $("#search").click(function () {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`)
            .then(function (response) {
                //error.className="d-none"
                //info.className="d-show"
                c.style.backgroundColor = "pink";                
                
                city.innerText = response.data.location.name;
                country.innerText = response.data.location.country;
                weather.innerText = response.data.current.temp_c;
                localTime.innerText = response.data.location.localtime;
                $("#c").click(function () {
                    weather.innerText = response.data.current.temp_c;
                    c.style.backgroundColor = "pink";
                    f.style.backgroundColor = "wheat";
                })
                $("#f").click(function () {
                    weather.innerText = response.data.current.temp_f;
                    c.style.backgroundColor = "wheat";
                    f.style.backgroundColor = "pink";
                })
            })
            .catch(function (er) {
                // handle error
                //info.className="d-none"
                //error.className="d-flex"
                console.log(er);
            })
    })

})