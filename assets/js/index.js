const Urlgsheet =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBJju7IHGWyJBMxHd0B21gwpN9q7SOuIk3OO30_94NXyjnqbM28O6mSvcAtBQRMrUQuNiA0s2uEMX/pub?gid=624997922&single=true&output=csv';

    let arrayObj = [];
    let d2 = ``;
    let d3 = ``;
    let d4 = ``;
    let d5 = ``;
    let d6 = ``;

    Papa.parse(Urlgsheet,{
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            arrayObj = results.data;
            

            DisplayTotal(arrayObj[10]['Jumlah'],arrayObj[11]['Jumlah']);
            DisplayTotalBrs(arrayObj[5]['Jumlah'],arrayObj[12]['Jumlah']);

            let ee = `Rp ` + arrayObj[0]['Jumlah'] + `,-</br>(` + arrayObj[19]['Jumlah'] + ` paket)`;
            DisplayBody(arrayObj[0]['Keterangan'],ee);
            
            DisplayBody(arrayObj[1]['Keterangan'],`Rp ` + arrayObj[1]['Jumlah'] + `,-`);

            let aa = `Rp ` + arrayObj[2]['Jumlah'] + `,-</br>(` + arrayObj[13]['Jumlah'] + ` paket)`;
            DisplayBody(arrayObj[2]['Keterangan'],aa);

            let bb = `Rp ` + arrayObj[3]['Jumlah'] + `,-</br>(` + arrayObj[14]['Jumlah'] + ` paket)`;
            DisplayBody(arrayObj[3]['Keterangan'],bb);

            let cc = `Rp ` + arrayObj[4]['Jumlah'] + `,-</br>(` + arrayObj[11]['Jumlah'] + ` jiwa)`;
            DisplayBody(arrayObj[4]['Keterangan'],cc);

            let dd = arrayObj[5]['Jumlah'] + ` kg</br>(` + arrayObj[12]['Jumlah'] + ` jiwa)`;
            DisplayBody(arrayObj[5]['Keterangan'],dd);

            for(let i = 6; i < 10; i++){
                DisplayBody(arrayObj[i]['Keterangan'],`Rp ` + arrayObj[i]['Jumlah'] + `,-`);
            }  
            
            DisplayTotalPresentase(arrayObj[16]['Jumlah'],arrayObj[17]['Jumlah'],arrayObj[18]['Jumlah'],arrayObj[25]['Jumlah']);
            
            for (let j=20; j<25; j++){
                DisplayPeringkat(arrayObj[j]['Keterangan'],arrayObj[j]['Jumlah'],j-19);
            }
        }
    })

function DisplayBody(ket,jml){
    d2 = d2 + `
            <tr>
            <td align="left">${ket}</td>
            <td align="left">${jml}</td>
            </tr>
    `;

    const data2 = document.getElementById('tbody');
    data2.innerHTML = d2;
}

function DisplayTotal(jml1,jml2){
    d3 = d3 + `
        <h5 style="font-size: 1.5em; color:#012970"><b>Rp ${jml1},-</b></h5>
    `;

    const totaluang = document.getElementById('totaluang');
    totaluang.innerHTML = d3;
}

function DisplayTotalBrs(jml3,jml4){
    d4 = d4 + `
        <h5 style="font-size: 1.7em; color:#012970"><b>${jml3} kg</b></h6>
        <span class="text-success small pt-1 fw-bold">beras khusus zakat fitrah</span>
    `;

    const totalberas = document.getElementById('totalberas');
    totalberas.innerHTML = d4;
}

function DisplayTotalPresentase(s1,ts,prs,umm){
    
    xy = prs.replace(/,/g,'.');
    console.log(xy);

    d5 = `
        <div class="progress bm-2" style="height: 20px;">
            <div class=progress-bar bg-success" role="progressbar" style="width: ${xy}%" aria-valuenow="${xy}" aria-valuemin="0" aria-valuemax="100">${prs}%</div>
        </div>
        <p><b>${s1}</b> dari <b>${ts}</b> siswa telah berpartisipasi</br>dan <b>${umm}</b> donasi umum</p>
    `;
    
    const presentase = document.getElementById('presentase');
    presentase.innerHTML = d5;
}

function DisplayPeringkat(klss,jmll,nmr){
    d6 = d6 + `
            <tr>
            <td align="center" style="vertical-align: middle;">${nmr}</td>
            <td align="left" style="vertical-align: middle;">${klss}</td>
            <td align="left" style="vertical-align: middle;">Rp ${jmll},-</td>
            </tr>
    `;

    const peringkat = document.getElementById('tperingkat');
    peringkat.innerHTML = d6;
}

