    let x1 = ``;
    let x2= ``;
    let arrayObjX = [];
    let stx1 = "";
    let stx2 = "";
    let UrlX = '';
    let a = 0; let b = 0;
            let c = 0; let d = 0;
            let e = 0; let f = 0;
            let g = 0; let h = 0;
            let i = 0; let j = 0;
            let k = 0; let l = 0;
            let m = 0; let n = 0;
            let o = 0; let p = 0;
            let q = 0; let r = 0;
            let s = 0; let t = 0;
            let u = 0; let v = 0;
            let w = 0; let x = 0;
    let nm = 0;
    

function TampilkanData(datakelas,level){
    switch (level){
        case 0:
            UrlX = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBJju7IHGWyJBMxHd0B21gwpN9q7SOuIk3OO30_94NXyjnqbM28O6mSvcAtBQRMrUQuNiA0s2uEMX/pub?gid=0&single=true&output=csv';
            a = 2; b = 36;
            c = 36; d = 69;
            e = 69; f = 102;
            g = 102; h = 132;
            i = 132; j = 164;
            k = 164; l = 198;
            m = 198; n = 233;
            o = 233; p = 260;
            q = 260; r = 287;
            s = 287; t = 314;
            u = 314; v = 342;
            w = 342; x = 371;
            break;
        case 1:
            UrlX = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBJju7IHGWyJBMxHd0B21gwpN9q7SOuIk3OO30_94NXyjnqbM28O6mSvcAtBQRMrUQuNiA0s2uEMX/pub?gid=544917679&single=true&output=csv';
            a = 2; b = 33;
            c = 33; d = 59;
            e = 59; f = 84;
            g = 84; h = 112;
            i = 112; j = 142;
            k = 142; l = 174;
            m = 174; n = 201;
            o = 201; p = 231;
            q = 231; r = 259;
            s = 259; t = 288;
            u = 288; v = 316;
            w = 316; x = 348;
            break;
        case 2:
            UrlX = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBJju7IHGWyJBMxHd0B21gwpN9q7SOuIk3OO30_94NXyjnqbM28O6mSvcAtBQRMrUQuNiA0s2uEMX/pub?gid=2002945574&single=true&output=csv';
            a = 2; b = 30;
            c = 30; d = 61;
            e = 61; f = 92;
            g = 92; h = 124;
            i = 124; j = 157;
            k = 157; l = 184;
            m = 184; n = 212;
            o = 212; p = 239;
            q = 239; r = 265;
            s = 265; t = 291;
            u = 291; v = 316;
            w = 316; x = 348;
            break;
        case 3:
            UrlX = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBJju7IHGWyJBMxHd0B21gwpN9q7SOuIk3OO30_94NXyjnqbM28O6mSvcAtBQRMrUQuNiA0s2uEMX/pub?gid=443183563&single=true&output=csv';
    }
    
    
    Papa.parse(UrlX,{
        download: true,
        header: false,
        worker: true,
        skipEmptyLines: true,
        complete: function(results){
            arrayObjX = results.data;
            console.log(arrayObjX);
            
            switch (datakelas){
                case 1:
                    Loop(a,b,'datax1');
                    break;
                case 2:
                    Loop(c,d,'datax2');
                    break;
                case 3:
                    Loop(e,f,'datax3');
                    break;
                case 4:
                    Loop(g,h,'datax4');
                    break;
                case 5:
                    Loop(i,j,'datax5');
                    break;
                case 6:
                    Loop(k,l,'datax6');
                    break;
                case 7:
                    Loop(m,n,'datax7');
                    break;
                case 8:
                    Loop(o,p,'datax8');
                    break;
                case 9:
                    Loop(q,r,'datax9');
                    break;
                case 10:
                    Loop(s,t,'datax10');
                    break;
                case 11:
                    Loop(u,v,'datax11');
                    break;
                case 12:
                    Loop(w,x,'datax12'); 
                    break;
                case 13:
                    for(nm = 2; nm < 10; nm++){
                        DisplayBodyUmum(
                        arrayObjX[nm][0],
                        arrayObjX[nm][1],
                        arrayObjX[nm][2],
                        arrayObjX[nm][3],
                        arrayObjX[nm][4],
                        arrayObjX[nm][5],
                        arrayObjX[nm][8],
                        arrayObjX[nm][6],
                        arrayObjX[nm][10],
                        arrayObjX[nm][11],
                        arrayObjX[nm][12],
                        arrayObjX[nm][13]);
                    }
            }
        }
    });
}

function DisplayBodyX1(dtt,nama,st,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd){
    x1 = x1 + `
            <tr>
            <td align="left">${nama}</td>
            <td align="center">${st}</td>
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

    const datax1s = document.getElementById(dtt);
    datax1s.innerHTML = x1;
}

function DisplayBodyUmum(nama,st,ip,ota,dbp,pcd,zfu,zfb,zm,iu,shd,fd){
    if(st == ''){
        st = '-';
    }
    
    if(ip == ''){
        ip = '0';
    }

    if(ota == ''){
        ota = '0';
    }
    
    if(dbp == ''){
        dbp = '0';
    }
    
    if(pcd == ''){
        pcd = '0';
    }
    
    if(zfu == ''){
        zfu = '0';
    }
    
    if(zfb == ''){
        zfb = '0,00';
    }
    
    if(zm == ''){
        zm = '0';
    }
    
    if(iu == ''){
        iu = '0';
    }
    
    if(shd == ''){
        shd = '0';
    }
    
    if(fd == ''){
        fd = '0';
    }
    
    x2 = x2 + `
            <tr>
            <td align="left">${nama}</td>
            <td align="left">${st}</td>
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

    const dataumum = document.getElementById('dataumum');
    dataumum.innerHTML = x2;
}

function Loop(aw,akh,dt){
    let datax1 = 0;
                    for(datax1 = aw; datax1 < akh; datax1++){
                        if (arrayObjX[datax1][1] == 'FALSE'){
                            stx1 = '<button disabled type="button" class="btn btn-danger btn-sm">✘</button>';
                        } else {
                            stx1 = '<button disabled type="button" class="btn btn-success btn-sm">✔</button>';
                        }
                
                        DisplayBodyX1(dt, arrayObjX[datax1][2],
                        stx1,
                        arrayObjX[datax1][3],
                        arrayObjX[datax1][4],
                        arrayObjX[datax1][5],
                        arrayObjX[datax1][6],
                        arrayObjX[datax1][9],
                        arrayObjX[datax1][7],
                        arrayObjX[datax1][11],
                        arrayObjX[datax1][12],
                        arrayObjX[datax1][13],
                        arrayObjX[datax1][14]            
                        );
                    }
}

