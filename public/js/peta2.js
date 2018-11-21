// INI SUDAH BERHASIL

window.onload = function(){

var mymap = L.map('mapid').setView([-7.9699335,112.6157525], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiaWZpa2FyaWZpbiIsImEiOiJjamxndm83cTQwZjYwM3BvMHBma3dndGJqIn0.6LyWJiWv-yvp7mNPbyebYA'
    }).addTo(mymap);
//var marker = L.marker([-8.701660,115.169856]).addTo(mymap); --> memberi marker

function findLocation(x,y) {
    // console.log(x,y);
    for (var i=0; i< places.length;i++) {
        if (places[i].lokasi[0]==x &&
            places[i].lokasi[1]==y) {
            return i;
            }
    }
    return -1;
    }
    
    function showLocation(e) {
    //console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
    let ix= findLocation(e.latlng.lat,e.latlng.lng);
        if (ix >=0) {
        img.src= places[ix].gambar;
        par.textContent=places[ix].review;
        }
    }
    
    let gambar= document.getElementById("gambar");
    let review= document.getElementById("review");
    let img= document.createElement('img');
    let par= document.createElement('p');
    gambar.appendChild(img);
    review.appendChild(par);

    let places = null;

    //fetch
    fetch("/data/peta.json")
    .then(res=>res.json())
    .then(res =>{
        // places = res.['places'];
        places = res.places;
        for (var p of places) {
            let marker=
            L.marker(p.lokasi)
            .addTo(mymap)
            .bindPopup(p.popup);
            marker.on('click', showLocation);
            }
    })

    .catch(e => {
        console.log(e);
    });

//     let review1 = "Good ambience, tasty food, a little bit pricy but worth it.";
//     let review2 = "One of best meatball in Malang.. 10/10 will come back again.. Crowded place in small place.. But the taste is very yummy.. You should try";
//     let review3 = "The legendary Soto Lombok, affordable price for one bowl of Soto Ayam with IDR 25k, the place is clean and neat. The taste is always pleased your tongue and made you to add one more bowl :)";
//     let review4 = "Try the level 5 spicy noodles and cry until you think there's no more tears to shed! What I like about the noodles is that beyond the tang they have excellent flavor. The sausage and veggies coming with them are also a nice touch to alleviate your tongue. Also, if you're looking into sides, the dim sum is a great choice! Thanks, Mie Sean, for the memories!";
//     let review5 = "the peanut sauce is superb.  slightly spicy but has a very smooth texture. the price is very cheap.  1 porsion for 11.000. they also sell other traditional food.  If you love the peanut sauce , you can buy from them";
    
//     let places = [
//         {"lokasi" : [-7.9806987,112.6281433], "popup" : "Toko OEN", "gambar" : "./img/1.jpg", "review" : review1},
//         {"lokasi" : [-7.9687958,112.6318293], "popup" : "Bakso Bakar Pak Man", "gambar" : "./img/2.jpg", "review" : review2},
//         {"lokasi" : [-7.9872182,112.6260826], "popup" : "Soto Ayam Lombok", "gambar" : "./img/3.jpg", "review" : review3},
//         {"lokasi" : [-7.9820655,112.6251713], "popup" : "Mie Setan", "gambar" : "./img/4.jpg", "review" : review4},
//         {"lokasi" : [-7.975696,112.6177973], "popup" : "Pecel Kawi 'Hj. Musilah' Asli 1975 ", "gambar" : "./img/5.jpg", "review" : review5},
//     ];

// for (var p of places) {
//     var marker=
//     L.marker(p.lokasi).addTo(mymap)
//     .bindPopup(p.popup);
//     marker.on('click', showLocation);
//     }
// }

}
    