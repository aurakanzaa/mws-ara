let kota=["surabaya","probolinggo","malang","lasem"];

let placess=[
    {"lokasi": [-7.9699335,112.6157525], "status": "gudang", "gambar": "a.png"}
];

// konvensional
for(i=0; i<kota.length; i++){
    console.log(kota[i]);
}

// modern
for (var ix in kota){
    console.log(kota[ix]);
}


// ini paling praktis, caranya js
for (var k of kota){
    console.log(k);
}