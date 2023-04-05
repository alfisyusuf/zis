let sekarang = ``;
let menit = ``;

arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
date = new Date();
millisecond = date.getMilliseconds();
detik = date.getSeconds();
menit = String(date.getMinutes());
jam = String(date.getHours());
hari = date.getDay();
tanggal = date.getDate();
bulan = date.getMonth();
tahun = date.getFullYear();

if(menit.length == 1){
    menit = '0' + menit;
}

if(jam.length == 1){
    jam = '0' + jam;
}

sekarang = `Tanggal : ` + tanggal + ` ` + arrbulan[bulan] + ` ` + tahun + ` ` + jam + `:` + menit;
const dd = document.getElementById('update');
dd.innerHTML = sekarang;