
//Array van verschillende locaties als voorbeeld

export const locations = [
    [3.103591575112688, 50.95144615799327],
    [3.1244691250083845, 50.9453856706939],
    [3.09949, 50.94618],
    [3.112412287872935, 50.94690875665132],
    [3.119497136232929, 50.97870134021972],
    [3.2703700374064946, 50.82660166612885]];
//ratio meters/pixels voor resp 0°,20°,40°,60°,80° breedte
export const latRatios = [
    [78271484, 73551136, 59959436, 39135742, 13591701],
    [39135742, 36775568, 29979718, 19567871, 6795850],
    [19567871, 18387784, 14989859, 9783936, 3397925],
    [9783936, 9193892, 7494929, 4891968, 1698963],
    [4891968, 4596946, 3747465, 2445984, 849481],
    [2445984, 2298473, 1873732, 1222992, 424741],
    [1222992, 1149237, 936866, 611496, 212370],
    [611496, 574618, 468433, 305748, 106185],
    [305748, 287309, 234217, 152874, 53093],
    [152874, 143655, 117108, 76437, 26546],
    [76437, 71827, 58554, 38218, 13273],
    [38218, 35914, 29277, 19109, 6637],
    [19109, 17957, 14639, 9555, 3318],
    [9555, 8978, 7319, 4777, 1659],
    [4777, 4489, 3660, 2389, 830],
    [2389, 2245, 1830, 1194, 415],
    [1194, 1122, 915, 597, 207],
    [597, 561, 457, 299, 104],
    [299, 281, 229, 149, 52],
    [149, 140, 114, 75, 26],
    [75, 70, 57, 37, 13],
    [37, 35, 29, 19, 6],
    [19, 18, 14, 9, 3]
];

export const latitudes = [0, 20, 40, 60, 80];

export let map_width = 400;

export let radius = 200;

export let map ;


export const getZoomLevelFromRadius = (latitude, containerWith, radius) => {
    let lowerIndex = latitudes.findIndex(el => Math.abs(latitude) <= el) - 1;
    let interpolatedRatios = latRatios.map(zoomRatio => zoomRatio[lowerIndex] - (zoomRatio[lowerIndex] - zoomRatio[lowerIndex + 1])
        * (latitude - latitudes[lowerIndex]) / 20);
    let zoomLevel = interpolatedRatios.findIndex((el) => 2 * radius / containerWith * 1000 > el);
    return zoomLevel;
};

export const drawMap = event => {
    map_width = document.getElementById('map').clientWidth;
    let target = event.target;
    let calcZoomLevel = getZoomLevelFromRadius(50.94, map_width, radius);
    mapboxgl.accessToken = 'pk.eyJ1Ijoia29lbnJhYWRkZWNyb29zIiwiYSI6ImNrd3V2ODFtMDBtcmoybnFuZ2cyanpycWoifQ.T1XgjHAIT92__bhS8GtUOQ';
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',//mapbox://styles/mapbox/streets-v11',
        center: [3.09949, 50.94618],//29.977540509458233, 31.13217090674319 //3.09949,50.94618
        zoom: calcZoomLevel,
    });
    locations.forEach((location) => {
        let marker = new mapboxgl.Marker({color: 'red', rotation: 0})
            .setLngLat(location)
            .addTo(map)
    })
};

export const updateRadius = ()=>{
    let radia = [0.2, 0.5, 1, 2, 5, 10];
    let index = parseFloat(document.getElementById('maxAfstand').value);
    let newRadius = radia[index];
    console.log('radius', newRadius);
    let calcZoomLevel = getZoomLevelFromRadius(50.94, map_width, newRadius * 1000);
    console.log(calcZoomLevel);
    console.log(map_width);
    map.zoom = calcZoomLevel;
    map.setZoom(calcZoomLevel);

}

export const initMap = () => {
    var tab = document.getElementById('contact');

document.getElementById('contact-tab').addEventListener('shown.bs.tab',drawMap);
document.getElementById('maxAfstand').addEventListener('change', updateRadius);

};

export const searchLocation = ()=> {
    let searchLocation = document.getElementById('inputLocation').value.split(" ").join("%20");
    let searchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchLocation}.json?access_token=pk.eyJ1Ijoia29lbnJhYWRkZWNyb29zIiwiYSI6ImNrd3V2ODFtMDBtcmoybnFuZ2cyanpycWoifQ.T1XgjHAIT92__bhS8GtUOQ`;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", getLatLong);
    xhr.open("get", searchUrl, true);
    xhr.send();
    xhr.responseType = 'text';
}

export const getLatLong = ()=> {
    let response = xhr.responseText;
    let places = JSON.parse(response);
    console.log(places.features);
    console.log(places.features[0].center[0] + " " + places.features[0].center[1]);
    map.setCenter(places.features[0].center);
}


