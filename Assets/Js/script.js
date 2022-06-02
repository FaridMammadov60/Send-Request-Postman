let input = document.getElementById("input");
let c = document.getElementById("c");
let f = document.getElementById("f");
let search = document.getElementById("search");

let info = document.getElementById("Info");
let errors = document.getElementById("errors");

let city = document.getElementById("city");
let country = document.getElementById("country");
let weather = document.getElementById("weather");
let sky = document.getElementById("sky");
let skyicon = document.getElementById("skyicon");
let localTime = document.getElementById("localTime");

$(document).ready(function () {
    $("#search").click(function () {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`)
            .then(function (response) {
                console.log(response.data);
                c.style.backgroundColor = "pink";
                errors.className = "d-none";
                info.className = "d-block";               
                
                city.innerText = response.data.location.name;
                country.innerText = response.data.location.country;
                weather.innerText = response.data.current.temp_c;
                sky.innerText = response.data.current.condition.text;
                //skyicon.getAttribute("src") = response.data.current.condition.icon;
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
            .catch(function (error) {

                errors.className = "d-flex"
                info.className = "d-none";
                console.log(error);
            })
    })

})