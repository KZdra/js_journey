// How To Make infinite looop 
// while (true) {
//     console.log('hello World')
// }

//hentikan loop dari user 

// var coba = true;
// while (coba) {
//     document.write('halow dunia<br>')
//     console.log('hlowdunia')
//     coba = confirm('lanjut or ga?')
// }


//hentikan dari program 
// var num = 1
// while (num <= 50) {
//     console.log('PERULANGAN KE' + num + "x");
//     num++;
// }


//nambah count 
var ulangi = confirm('tambah angka +1');
var counter = 0;

while (ulangi) {
    counter++;
    ulangi = confirm('tambah lagi?')
}
document.write('JUMLAH ANGKA YANG DITAMBAH ' + counter + ' kali')