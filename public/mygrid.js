// let mymap = L.map('mapid').setView([-7.9699335,112.6157525], 15);
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 20,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoiYXVyYWthbnphYSIsImEiOiJjam50bXl4YmQwMHp0M3NvaTR5enczdXY5In0.diO4nB65NMjMvraaHQN-Qw'
// }).addTo(mymap);

// let tempatmakan = [
//     {"lokasi" : [-7.9806987,112.6281433], "sponsor" : "TOKO OEN"},
//     {"lokasi" : [-7.9687958,112.6318293], "sponsor" : "Bakso Bakar Pak Man"},
//     {"lokasi" : [-7.9872182,112.6260826], "sponsor" : "Soto Ayam Lombok"},
//     {"lokasi" : [-7.982409,112.6247586], "sponsor" : "Sate Kambing Pak Sholeh"},
//     {"lokasi" : [-7.9820655,112.6251713], "sponsor" : "Mie Setan"},
//     {"lokasi" : [-7.9832459,112.6317166], "sponsor" : "Bakpao Boldy Malang"}
// ];

// for (var tm of tempatmakan){
//     var marker = L.marker(tm.lokasi).addTo(mymap)
//     .bindPopup(p.sponsor);

// }



// let mymap = L.map('mapid').setView([-8.701660, 115.169856], 14);
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1Ijoia29tYW5nd2lzbnUiLCJhIjoiY2psdWk3eWVtMGt1dDNwcjZkeGFhZ29zMSJ9.LrMn3rgK13m7FQiaQUU0jA'
// }).addTo(mymap);

let mymap = L.map('mapid').setView([-7.9699335,112.6157525], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXVyYWthbnphYSIsImEiOiJjam50bXl4YmQwMHp0M3NvaTR5enczdXY5In0.diO4nB65NMjMvraaHQN-Qw'
}).addTo(mymap);

function onMarkerClick() {
    let gambar = document.querySelector("#gambar");
    let review = document.querySelector("#review");
    gambar.innerHTML = `<img src="img/${this.epen.gambar}">`;
    review.textContent = this.epen.review;
}
var arr_marker = [
        {
            location: [-7.9806987,112.6281433],
            popup: "Toko OEN",
            event : {
                gambar: "img1.jpg",
                review: "Toko OEN"
            }
        },
        {
            location: [-7.9687958,112.6318293],
            popup: "Bakso Bakar Pak Man",
            event: {
                gambar: "img2.jpg",
                review: "Bakso Bakar Pak Man"
            }
        },
        {
            location: [-7.9872182,112.6260826],
            popup: "Soto Ayam Lombok",
            event: {
                gambar: "img3.jpg",
                review: "Soto Ayam Lombok"
            }
        },
        {
            location: [-7.9820655,112.6251713],
            popup: "Mie Setan",
            event: {
                gambar: "img4.jpg",
                review: "Mie Setan"
            }
        },
        {
            location: [-7.9832459,112.6317166],
            popup: "Bakpao Boldy Malang",
            event: {
                gambar: "img5.jpg",
                review: "Bakpao Boldy Malang"
            }
        }
];

for (m of arr_marker) {
    let marker = L.marker(m.location);
    marker.bindPopup(m.popup).on('click', onMarkerClick).addTo(mymap);
    marker["epen"] = m.event;
}
// onclick event showing location
// function onMapClick(e) {
//     alert("you clicked the map at : "+e.latlng);
// }
// mymap.on('click',onMapClick);

    