// var x = 100;    
// console.log('Hello World!');
// console.log('isi dari variabel x adalah ' + x);

// // popup box: alert, prompt, confirm (boolean)
// alert('oy Bangg');
// alert('ribut yuk');
// // alert('cupu');      //boleh kasih lebih dari 1 popup 

// var nama = prompt('masukkan nama');
// alert('selamat datang '+ nama);

// var test = confirm('kamu yakin??');
// alert(test);

// var test = confirm('kamu yakin?? (lagi wkwk)');
// if(test === true){
//     alert('user menekan OK');
// }else {
//     alert('user menekan CANCEL');
// }

// -------------------------------------------------------------

// pengulangan
alert('Selamat Datang..');
var lagi = true;

while(lagi === true){
    var nama = prompt('Masukkan Nama: ');
    alert('halo' + nama);

    lagi = confirm('coba lagi?');
}

alert('Terima Kasih..');