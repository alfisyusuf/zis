const Urlgsheetzz =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPNuPNEaYzjoadWNvXN8yBSc_lijUp-d9CgwHLEb5bwrcj8iBYa0leAL_7slzp7cSDKQMLrSxigEqY/pub?gid=0&single=true&output=csv';

    let arrayObjzz = [];

    Papa.parse(Urlgsheetzz,{
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            arrayObjzz = results.data;

            let tanggalupdate2 = `Updated : ` + arrayObjzz[15]['Jumlah'];
            const updatetanggal2 = document.getElementById('updated2');
            updatetanggal2.innerHTML = tanggalupdate2;
        }
    })