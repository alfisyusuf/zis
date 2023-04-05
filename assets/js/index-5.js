const Urlgsheet4 =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBJju7IHGWyJBMxHd0B21gwpN9q7SOuIk3OO30_94NXyjnqbM28O6mSvcAtBQRMrUQuNiA0s2uEMX/pub?gid=198911545&single=true&output=csv';

    let arrayObj4 = [];
    let d8 = ``;
    let d9 = ``;

    Papa.parse(Urlgsheet4,{
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            arrayObj4 = results.data;

            DisplayBody4(arrayObj4[0]['Nama'],
                arrayObj4[0]['Total Kelas'],
                arrayObj4[0]['Infaq Pembangunan'],
                arrayObj4[0]['Orang Tua Asuh'],
                arrayObj4[0]['Donasi Buka Puasa'],
                arrayObj4[0]['Program Cinta Dhuafa'],
                arrayObj4[0]['Zakat Fitrah (Uang)'],
                arrayObj4[0]['Zakat Fitrah (Beras)'],
                arrayObj4[0]['Zakat Mal'],
                arrayObj4[0]['Infaq (Umum)'],
                arrayObj4[0]['Shodaqoh'],
                arrayObj4[0]['Fidyah']
                );
            
            DisplayFoot4(arrayObj4[1]['Nama'],
                arrayObj4[1]['Total Kelas'],
                arrayObj4[1]['Infaq Pembangunan'],
                arrayObj4[1]['Orang Tua Asuh'],
                arrayObj4[1]['Donasi Buka Puasa'],
                arrayObj4[1]['Program Cinta Dhuafa'],
                arrayObj4[1]['Zakat Fitrah (Uang)'],
                arrayObj4[1]['Zakat Fitrah (Beras)'],
                arrayObj4[1]['Zakat Mal'],
                arrayObj4[1]['Infaq (Umum)'],
                arrayObj4[1]['Shodaqoh'],
                arrayObj4[1]['Fidyah']            
            );

        }
    })

function DisplayBody4(kls,tot,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd){
    d8 = d8 + `
            <tr>
            <td align="center"><a class="btn btn-primary btn-sm" href="/zis/rekap-kelas/${kls}/" role="button">${kls}</a></td>
            <td align="right">${tot}</td>
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

    const data4 = document.getElementById('tbodyrekap4');
    data4.innerHTML = d8;
}

function DisplayFoot4(kls,tot,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd){
    d9 = d9 + `
            <tr style="font-weight:bold">
            <td align="center">${kls}</td>
            <td align="right">${tot}</td>
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

    const data5 = document.getElementById('tfootrekap4');
    data5.innerHTML = d9;
}