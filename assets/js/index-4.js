const Urlgsheet3 =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBJju7IHGWyJBMxHd0B21gwpN9q7SOuIk3OO30_94NXyjnqbM28O6mSvcAtBQRMrUQuNiA0s2uEMX/pub?gid=564792263&single=true&output=csv';

    let arrayObj3 = [];
    let d6 = ``;
    let d7 = ``;

    Papa.parse(Urlgsheet3,{
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            arrayObj3 = results.data;
            console.log(arrayObj3);

            for(let data = 0; data < 12; data++){
                DisplayBody3(arrayObj3[data]['Kelas'],
                arrayObj3[data]['Total Kelas'],
                arrayObj3[data]['Infaq Pembangunan'],
                arrayObj3[data]['Orang Tua Asuh'],
                arrayObj3[data]['Donasi Buka Puasa'],
                arrayObj3[data]['Program Cinta Dhuafa'],
                arrayObj3[data]['Zakat Fitrah (Uang)'],
                arrayObj3[data]['Zakat Fitrah (Beras)'],
                arrayObj3[data]['Zakat Mal'],
                arrayObj3[data]['Infaq (Umum)'],
                arrayObj3[data]['Shodaqoh'],
                arrayObj3[data]['Fidyah'],
                arrayObj3[data]['Status']
                );
            }  
            
            DisplayFoot3(arrayObj3[12]['Kelas'],
                arrayObj3[12]['Total Kelas'],
                arrayObj3[12]['Infaq Pembangunan'],
                arrayObj3[12]['Orang Tua Asuh'],
                arrayObj3[12]['Donasi Buka Puasa'],
                arrayObj3[12]['Program Cinta Dhuafa'],
                arrayObj3[12]['Zakat Fitrah (Uang)'],
                arrayObj3[12]['Zakat Fitrah (Beras)'],
                arrayObj3[12]['Zakat Mal'],
                arrayObj3[12]['Infaq (Umum)'],
                arrayObj3[12]['Shodaqoh'],
                arrayObj3[12]['Fidyah'],
                arrayObj3[12]['Status']
            );

        }
    })

function DisplayBody3(kls,tot,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd,stt){
    let status = '';
    
    if(stt == 'danger'){
        status = `<button disabled type="button" class="btn btn-danger btn-sm">${tot}</button>`;
    } else if(stt == 'warning'){
        status = `<button disabled type="button" class="btn btn-warning btn-sm">${tot}</button>`;
    } else {
        status = `<button disabled type="button" class="btn btn-success btn-sm">${tot}</button>`;
    }
    
    d6 = d6 + `
            <tr>
            <td align="center"><a class="btn btn-primary btn-sm" href="/zis/rekap-kelas/${kls}/" role="button">${kls}</a></td>
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

    const data2 = document.getElementById('tbodyrekap3');
    data2.innerHTML = d6;
}

function DisplayFoot3(kls,tot,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd,stt){
    let statusf = '';
    
    if(stt == 'danger'){
        statusf = `<button disabled type="button" class="btn btn-danger btn-sm"><b>${tot}</b></button>`;
    } else if(stt == 'warning'){
        statusf = `<button disabled type="button" class="btn btn-warning btn-sm"><b>${tot}</b></button>`;
    } else {
        statusf = `<button disabled type="button" class="btn btn-success btn-sm"><b>${tot}</b></button>`;
    }
    
    d7 = d7 + `
            <tr style="font-weight:bold">
            <td align="center">${kls}</td>
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

    const data3 = document.getElementById('tfootrekap3');
    data3.innerHTML = d7;
}