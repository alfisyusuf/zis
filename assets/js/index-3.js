const Urlgsheet2 =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBJju7IHGWyJBMxHd0B21gwpN9q7SOuIk3OO30_94NXyjnqbM28O6mSvcAtBQRMrUQuNiA0s2uEMX/pub?gid=1783096276&single=true&output=csv';

    let arrayObj2 = [];
    let d4 = ``;
    let d5 = ``;

    Papa.parse(Urlgsheet2,{
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            arrayObj2 = results.data;
            console.log(arrayObj2);

            for(let data = 0; data < 12; data++){
                DisplayBody2(arrayObj2[data]['Kelas'],
                arrayObj2[data]['Jumlah Siswa Berdonasi'],
                arrayObj2[data]['Total Kelas'],
                arrayObj2[data]['Infaq Pembangunan'],
                arrayObj2[data]['Orang Tua Asuh'],
                arrayObj2[data]['Donasi Buka Puasa'],
                arrayObj2[data]['Program Cinta Dhuafa'],
                arrayObj2[data]['Zakat Fitrah (Uang)'],
                arrayObj2[data]['Zakat Fitrah (Beras)'],
                arrayObj2[data]['Zakat Mal'],
                arrayObj2[data]['Infaq (Umum)'],
                arrayObj2[data]['Shodaqoh'],
                arrayObj2[data]['Fidyah'],
                arrayObj2[data]['Status']
                );
            }  
            
            DisplayFoot2(arrayObj2[12]['Kelas'],
                arrayObj2[12]['Jumlah Siswa Berdonasi'],
                arrayObj2[12]['Total Kelas'],
                arrayObj2[12]['Infaq Pembangunan'],
                arrayObj2[12]['Orang Tua Asuh'],
                arrayObj2[12]['Donasi Buka Puasa'],
                arrayObj2[12]['Program Cinta Dhuafa'],
                arrayObj2[12]['Zakat Fitrah (Uang)'],
                arrayObj2[12]['Zakat Fitrah (Beras)'],
                arrayObj2[12]['Zakat Mal'],
                arrayObj2[12]['Infaq (Umum)'],
                arrayObj2[12]['Shodaqoh'],
                arrayObj2[12]['Fidyah'],
                arrayObj2[12]['Status']
            );

        }
    })

function DisplayBody2(kls,don,tot,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd,stt){
    let status = '';
    
    if(stt == 'danger'){
        status = `<button disabled type="button" class="btn btn-danger btn-sm">${tot}</button>`;
    } else if(stt == 'warning'){
        status = `<button disabled type="button" class="btn btn-warning btn-sm">${tot}</button>`;
    } else {
        status = `<button disabled type="button" class="btn btn-success btn-sm">${tot}</button>`;
    }
    
    d4 = d4 + `
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

    const data2 = document.getElementById('tbodyrekap2');
    data2.innerHTML = d4;
}

function DisplayFoot2(kls,don,tot,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd,stt){
    let statusf = '';
    
    if(stt == 'danger'){
        statusf = `<button disabled type="button" class="btn btn-danger btn-sm"><b>${tot}</b></button>`;
    } else if(stt == 'warning'){
        statusf = `<button disabled type="button" class="btn btn-warning btn-sm"><b>${tot}</b></button>`;
    } else {
        statusf = `<button disabled type="button" class="btn btn-success btn-sm"><b>${tot}</b></button>`;
    }
    
    d5 = d5 + `
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

    const data3 = document.getElementById('tfootrekap2');
    data3.innerHTML = d5;
}
