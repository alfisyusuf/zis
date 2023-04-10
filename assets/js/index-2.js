const Urlgsheet =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBJju7IHGWyJBMxHd0B21gwpN9q7SOuIk3OO30_94NXyjnqbM28O6mSvcAtBQRMrUQuNiA0s2uEMX/pub?gid=1934706763&single=true&output=csv';

    let arrayObj = [];
    let d2 = ``;
    let d3 = ``;

    Papa.parse(Urlgsheet,{
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            arrayObj = results.data;
            

            for(let data = 0; data < 12; data++){
                DisplayBody(arrayObj[data]['Kelas'],
                arrayObj[data]['Jumlah Siswa Berdonasi'],
                arrayObj[data]['Total Kelas'],
                arrayObj[data]['Infaq Pembangunan'],
                arrayObj[data]['Orang Tua Asuh'],
                arrayObj[data]['Donasi Buka Puasa'],
                arrayObj[data]['Program Cinta Dhuafa'],
                arrayObj[data]['Zakat Fitrah (Uang)'],
                arrayObj[data]['Zakat Fitrah (Beras)'],
                arrayObj[data]['Zakat Mal'],
                arrayObj[data]['Infaq (Umum)'],
                arrayObj[data]['Shodaqoh'],
                arrayObj[data]['Fidyah'],
                arrayObj[data]['Status']
                );
            }  
            
            DisplayFoot(arrayObj[12]['Kelas'],
                arrayObj[12]['Jumlah Siswa Berdonasi'],
                arrayObj[12]['Total Kelas'],
                arrayObj[12]['Infaq Pembangunan'],
                arrayObj[12]['Orang Tua Asuh'],
                arrayObj[12]['Donasi Buka Puasa'],
                arrayObj[12]['Program Cinta Dhuafa'],
                arrayObj[12]['Zakat Fitrah (Uang)'],
                arrayObj[12]['Zakat Fitrah (Beras)'],
                arrayObj[12]['Zakat Mal'],
                arrayObj[12]['Infaq (Umum)'],
                arrayObj[12]['Shodaqoh'],
                arrayObj[12]['Fidyah'],
                arrayObj[12]['Status']
            );

        }
    })

function DisplayBody(kls,don,tot,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd,stt){
    let status = '';
    
    if(stt == 'danger'){
        status = `<button disabled type="button" class="btn btn-danger btn-sm">${tot}</button>`;
    } else if(stt == 'warning'){
        status = `<button disabled type="button" class="btn btn-warning btn-sm">${tot}</button>`;
    } else {
        status = `<button disabled type="button" class="btn btn-success btn-sm">${tot}</button>`;
    }
    
    d2 = d2 + `
            <tr>
            <td align="center"><a class="btn btn-primary btn-sm" href="/rekap-kelas/${kls}/" role="button">${kls}</a></td>
            <td align="right">${don}</td>
            <td align="right">${status}</td>
            <td align="right">${ip}</td>
            <td align="right">${ota}</td>
            <td align="right">${dbp}</td>
            <td align="right">${pcd}</td>
            <td align="right">${zfu}</td>
            <td align="right">${zfb}</td>
            <td align="right">${zm}</td>
            <td align="right">${iu}</td>
            <td align="right">${shd}</td>
            <td align="right">${fd}</td>
            </tr>
    `;

    const data2 = document.getElementById('tbodyrekap');
    data2.innerHTML = d2;
}

function DisplayFoot(kls,don,tot,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd,stt){
    let statusf = '';
    
    if(stt == 'danger'){
        statusf = `<button disabled type="button" class="btn btn-danger btn-sm"><b>${tot}</b></button>`;
    } else if(stt == 'warning'){
        statusf = `<button disabled type="button" class="btn btn-warning btn-sm"><b>${tot}</b></button>`;
    } else {
        statusf = `<button disabled type="button" class="btn btn-success btn-sm"><b>${tot}</b></button>`;
    }
    
    d3 = d3 + `
            <tr style="font-weight:bold">
            <td align="center">${kls}</td>
            <td align="right">${don}</td>
            <td align="right">${statusf}</td>
            <td align="right">${ip}</td>
            <td align="right">${ota}</td>
            <td align="right">${dbp}</td>
            <td align="right">${pcd}</td>
            <td align="right">${zfu}</td>
            <td align="right">${zfb}</td>
            <td align="right">${zm}</td>
            <td align="right">${iu}</td>
            <td align="right">${shd}</td>
            <td align="right">${fd}</td>
            </tr>
    `;

    const data3 = document.getElementById('tfootrekap');
    data3.innerHTML = d3;
}
