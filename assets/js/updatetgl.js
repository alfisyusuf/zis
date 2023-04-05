const Urlgsheetz =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPNuPNEaYzjoadWNvXN8yBSc_lijUp-d9CgwHLEb5bwrcj8iBYa0leAL_7slzp7cSDKQMLrSxigEqY/pub?gid=0&single=true&output=csv';

    let arrayObjz = [];

    Papa.parse(Urlgsheetz,{
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            arrayObjz = results.data;
            console.log(arrayObjz);

            let tanggalupdate = `Updated : ` + arrayObjz[15]['Jumlah'];
            const updatetanggal = document.getElementById('updated');
            updatetanggal.innerHTML = tanggalupdate;
        }
    })