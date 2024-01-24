var angkaAwal = parseInt(prompt('Masukan Angka Pertama :'));
var angkaKedua = parseInt(prompt('Masukan Angka Kedua :'));
var angkaKetiga = parseInt(prompt('Masukan Angka Ketiga: '));
var angkaKeempat = parseInt(prompt('Masukan Angka Keempat :'));

function hitung(menu) {
    var divHasil = document.getElementById('hasil');

    switch (menu) {
        case 'perkalian':
            hasilPk =  angkaAwal * angkaKedua * angkaKetiga * angkaKeempat; 
            divHasil.innerText='Ini Hasil Perkalian ' +  angkaAwal +"x"+ angkaKedua +"x"+ angkaKetiga +"x"+ angkaKeempat +" = "+ hasilPk;
            break;
        case 'penjumlahan':
            hasilP =  angkaAwal + angkaKedua + angkaKetiga + angkaKeempat; 
            divHasil.innerText='Ini Hasil Penjumlahan ' +  angkaAwal +"+"+ angkaKedua +"+"+ angkaKetiga +"+"+ angkaKeempat +" = "+ hasilP;
            break;
        case 'ganjil':
            var angkaGanjil = [angkaAwal, angkaKedua, angkaKetiga, angkaKeempat].filter(function(angka) {
                return angka % 2 !== 0;
            });
            divHasil.innerText   = "Angka ganjil: " + angkaGanjil.join(', ');
            break;
        case 'genap':
                var angkaGenap = [angkaAwal, angkaKedua, angkaKetiga, angkaKeempat].filter(function(angka) {
                    return angka % 2 == 0;
                });
                divHasil.innerText   = "Angka genap: " + angkaGenap.join(', ');
                break;   
        default:
            console.log('gak work')
            break;
    }
}