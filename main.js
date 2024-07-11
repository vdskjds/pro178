let latitude = 22.7868542,logitude= 88.3643296
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYW5nYSIsImEiOiJjbGdxbWk4a2EwZmtuM3Ntczl6c3NrOWl5In0.q5hoAME72bwjEBkaOnAhEw'

var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[logitude,latitude],
    zoom:4
})
var img1= document.querySelector("#amber")
var marker1=new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133,26.98547])
.addTo(map)
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)