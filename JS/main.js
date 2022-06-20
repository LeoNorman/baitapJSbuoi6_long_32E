//bài tập 1: tìm số chẳn/lẻ < 100
document.getElementById('btnXemKetQua_1').onclick = function () {
    var iSo1 = 0;
    //Output: soChan : string, soLe : string
    var soChan = '';
    var soLe = '';
    //B1: Yếu tố thay đổi
    var dem1 = 0;
    //B2: Thiết lập điều kiện lặp
    while (dem1 < 100) {
        //khối lệnh thực thi
        if (iSo1 % 2 === 0) {
            soChan = soChan + iSo1 + ' ';
        } else if (iSo1 % 2 !== 0) {
            soLe = soLe + iSo1 + ' ';
        }
        iSo1++;
        //thay đổi điều kiện
        dem1++;
    }
    document.getElementById('ketQua_b1').innerHTML = 'Số chẵn: ' + soChan + '<br>' + 'Số lẻ: ' + soLe;
}

//BÀI TẬP 2: Đếm số chia hết cho 3 và nhỏ hơn 1000
document.getElementById('btnXemKetQua_2').onclick = function () {
    var iSo2 = 0;
    //output: soDem2: String
    var soDem2 = 0;
    //yếu tố thay đổi
    var dem2 = 0;
    //thiết lập điều kiện
    while (dem2 < 1000) {
        //khối lệnh thực thi
        if (iSo2 % 3 === 0) {
            soDem2++;
        }
        iSo2++;
        //thay đổi điều kiện 
        dem2++;
    }

    document.getElementById('ketQua_b2').innerHTML = 'Số chia hết cho 3 nhỏ hơn 1000: ' + soDem2 + ' số';
}

//Bài tập 3: Bài tập 3: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
document.getElementById('btnXemKetQua_3').onclick = function () {
    var soDem3 = 0;
    var tong3 = 0;
    //B1: Yếu tố thay đổi
    var soNguyen3 = 1;
    //B2: Thiết lập điều kiện lặp
    while (tong3 < 10000) {
        //xử lí
        if (tong3 < 10000) {
            tong3 += soNguyen3;
            soNguyen3++;
        }
        //thay đổi điều kiện lặp
        soDem3++;
    }
    //in output ra giao diện
    document.getElementById('ketQua_b3').innerHTML = 'số nguyên dương nhỏ nhất: ' + soDem3;
}

//BÀI TẬP 4: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2+ x^3 + … + x^n (Sử dụng vòng lặp và hàm)

document.getElementById('btnTinhTong_4').onclick = function () {
    //input: x4:number, n4:number
    var x4 = Number(document.getElementById('nhapSoX_4').value);
    var n4 = Number(document.getElementById('nhapSoN_4').value);
    //output: ketQua4 : string
    var ketQua4 = '';
    //progress
    var tong4 = 0;
    var iSo4 = 1;
    // yếu tố thay đổi
    var soDem4 = 0;
    // thiết lập điều kiện lặp
    while (soDem4 < n4) {
        //khối lệnh xử lí
        if (iSo4 <= n4) {
            tong4 += x4 ** iSo4;
            iSo4++;
        }
        //thay đổi điều kiện
        soDem4++;
    }
    document.getElementById('ketQua_b4').innerHTML = 'Tổng: ' + tong4;
}

//Bài tập 5: Nhập vào n. Tính giai thừa 1*2*...n
document.getElementById('btnTinh_5').onclick = function () {
    //input: n5: number
    var n5 = Number(document.getElementById('nhapSoN_5').value);
    //output: ketQua5: String
    var ketQua5
    //progress
    var giaiThua = 1;
    var iSo5 = 1;
    // yếu tố thay đổi
    var soDem5 = 0;
    // thiết lập điều kiện lặp
    while (soDem5 < n5) {
        //khối lệnh xử lí
        if (iSo5 <= n5) {
            giaiThua *= iSo5;
            iSo5++;
        }
        //thay đổi điều kiện lặp
        soDem5++;
    }
    document.getElementById('ketQua_b5').innerHTML = 'Giai Thừa: ' + giaiThua;
}

//BÀI TẬP 6 : Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh

document.getElementById('btnTaoThe_6').onclick = function () {
    //output: html: string
    var html = '';
    //yếu tố thay đổi
    var dem6 = 1;
    //progress
    var divChan = '<div class="bg-danger text-white px-2 py-2">Div chẵn</div>';
    var divLe = '<div class="bg-primary text-white px-2 py-2">Div lẻ</div>';
    //thiết lập điều kiện lặp
    while (dem6 < 11) {
        //khối lệnh xử lí
        if (dem6 % 2 != 0) {
            html += divLe;
        } else if (dem6 % 2 == 0) {
            html += divChan;
        }
        //thay đổi điều kiện
        dem6++;
    }
    document.getElementById('ketQua_b6').innerHTML = html;
}

//BÀI TẬP 7: In số nguyên tố
document.getElementById('btnInSo_7').onclick = function () {
    //input: n7 : number
    var n7 = Number(document.getElementById('nhapSoN_7').value);
    //output: string
    ketQua7 = '';
    //yếu tố thay đổi
    iSo7 = 2;
    //Thiết lập điều kiện lặp
    for (var iSo7 = 2; iSo7 <= n7; iSo7++) {
        var checkSNT = true;
        for (i = 2; i <= Math.sqrt(iSo7); i++) {
            if (iSo7 % i === 0) {
                checkSNT = false;
                break;
            }
        }
        if (checkSNT) {
            ketQua7 += iSo7 + ' ';
        }
    }
    document.getElementById('ketQua_b7').innerHTML = ketQua7;
}

