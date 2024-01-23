// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log('angkot no '+noAngkot+ 'beroperasi');
//     } else {
//         console.log('angkot no '+ noAngkot + 'Tidak beroperasi');
//     }
// }

//-----------------ELIF

var angka = prompt('masukan angka');

if (angka % 2 == 0) {
    console.log(angka + "  Bilangan genap")
} else if (angka % 2 == 1) {
    console.log(angka + '  bilangan ganjil')
} else {
    console.log(false)
}

//-------------------------------