  
//     var angkaAwal = parseInt(prompt('Nilai Awal')); 
//     var angkaAkhir = parseInt(prompt('NIlai AKhiur')); 
  
//   function genap() {
//     for(var i= angkaAwal; i<=angkaAkhir ;i++){
//         if(i%2===0){
//           document.write(" "+i + " ")
//         }
        
//       }
        
//   }



// for (var i = angkaAwal; i <= angkaAkhir; i++) {
//     if (i % 2 === 0) {
//         alert("Angka " + i + " adalah genap");
//     } else {
//         alert("Angka " + i + " adalah ganjil");
//     }

//     if (i % 3 === 0) {
//         alert("Angka " + i + " habis dibagi 3");
//     }

// var angkaAwal = parseInt(prompt('Masukkan angka awal:')); 
//  var angkaAkhir = parseInt(prompt('Masukkan angka akhir:')); 

//     // var angkaGenap = [];
//     // var angkaGanjil = [];
//     // var angkaHabisDibagi3 = [];

//     for (var i = angkaAwal; i <= angkaAkhir; i++) {
//         if (i % 2 === 0) {
//             // angkaGenap.push(i);
//     document.write("<h2>Angka Genap:</h2>");
//      document.write("<p>" + i+ "</p>");
//         } else {
//             // angkaGanjil.push(i);
//             document.write("<h2>Angka Ganjil:</h2>");
//             document.write("<p>" + i + "</p>");
//         }

//         if (i % 3 === 0) {
//             // angkaHabisDibagi3.push(i);
//     document.write("<h2>Angka yang Habis Dibagi 3:</h2>");
//     document.write("<p>" + i+ "</p>");
//         }
//     }




//     document.write("<h2>Angka yang Habis Dibagi 3:</h2>");
//     document.write("<p>" + angkaHabisDibagi3.join(', ') + "</p>");



// var angkaAwal = parseInt(prompt('Masukkan angka awal:')); 
//     var angkaAkhir = parseInt(prompt('Masukkan angka akhir:')); 

//     var angkaGenap = [];
//     var angkaGanjil = [];
//     var angkaHabisDibagi3 = [];

//     for (var i = angkaAwal; i <= angkaAkhir; i++) {
//         if (i % 2 === 0) {
//             angkaGenap.push(i);
//         } else {
//             angkaGanjil.push(i);
//         }

//         if (i % 3 === 0) {
//             angkaHabisDibagi3.push(i);
//         }
//     }

//     document.write("<h2>Angka Genap:</h2>");
//     document.write("<p>" + angkaGenap.join(', ') + "</p>");

//     document.write("<h2>Angka Ganjil:</h2>");
//     document.write("<p>" + angkaGanjil.join(', ') + "</p>");

//     document.write("<h2>Angka yang Habis Dibagi 3:</h2>");
//     document.write("<p>" + angkaHabisDibagi3.join(', ') + "</p>");


    var angkaAwal = parseInt(prompt('Masukkan angka awal:'));
var angkaAkhir = parseInt(prompt('Masukkan angka akhir:'));

document.write("<h2>Angka Genap:</h2>");
document.write("<p>");
for (var i = angkaAwal; i <= angkaAkhir; i++) {
    if (i % 2 === 0) {
        document.write(i + ', ');
    }
}
document.write("</p>");

document.write("<h2>Angka Ganjil:</h2>");
document.write("<p>");
for (var i = angkaAwal; i <= angkaAkhir; i++) {
    if (i % 2 !== 0) {
        document.write(i + ', ');
    }
}
document.write("</p>");

document.write("<h2>Angka yang Habis Dibagi 3:</h2>");
document.write("<p>");
for (var i = angkaAwal; i <= angkaAkhir; i++) {
    if (i % 3 === 0) {
        document.write(i + ', ');
    }
}
document.write("</p>");
