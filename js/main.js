/**
 * TÍNH TIỀN GRAB
 */
//GRAB_X
const GRAB_X_1 = 8000;
const GRAB_X_2 = 7500;
const GRAB_X_3 = 7000;
const GRAB_X_WAIT = 2000;

//GRAB_SUV_
const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

//GRAB_BLACK_
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

// BIẾN TÍNH TIỀN KM
var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tienCho = 0;
var tongTien = 0;

// function cho document.getElementById
function getEle(id) {
    return document.getElementById(id);
}

//function loại xe
function layLoaiXe() {
    var grabX = getEle("grabX");
    var grabSUV = getEle("grabSUV");
    var grabBlack = getEle("grabBlack");
    var loaiXe = "";

    //Điều Kiện
    if (grabX.checked) {
        loaiXe = "grabX";
    } else if (grabSUV.checked) {
        loaiXe = "grabSUV";
    } else if (grabBlack.checked) {
        loaiXe = "grabBlack";
    }
    return loaiXe;
}
//điều kiện tính tiền chờ
function tinhGiaCho(tgCho, giaCho) {
    var kq = 0;
    if (tgCho >= 3) {
        kq = Math.floor(tgCho / 3) * giaCho;
    }
    return kq;
}
// tính tiền chi tiết cho từng loại Grab
function tinhTienChiTiet(
    soKM,
    tgCho,
    giaCho,
    tienGrab_1,
    tienGrab_2,
    tienGrab_3) {
    tienCho = tinhGiaCho(tgCho, giaCho)
    if (0 < soKM && soKM <= 1) {
        // tính tiền KM1
        tienKm_1 = tienGrab_1;
        tongTien = tienCho + tienKm_1;
    } else if (1 < soKM && soKM <= 19) {
        //tính tiền KM 2
        tienKm_1 = tienGrab_1;
        tienKm_2 = tienGrab_2 * (soKM - 1);
        tongTien = tienCho + tienKm_1 + tienKm_2;
    } else if (19 < soKM) {
        //Tính tiền KM 3
        tienKm_1 = tienGrab_1;
        tienKm_2 = tienGrab_2 * (19 - 1);
        tienKm_3 = tienGrab_3 * (soKM - 19);
        tongTien = tienCho + tienKm_1 + tienKm_2 + tienKm_3;
    }
}
getEle("btnTinhTien").onclick = function () {
    var loaiXe = layLoaiXe();
    var soKM = getEle("soKM").value * 1;
    var tgCho = getEle("tgCho").value * 1;
    // getEle("divThanhTien").innerHTML = "Tổng tiền của bạn là", tongTien;
    switch (loaiXe) {
        case "grabX":
            tinhTienChiTiet(
                soKM,
                tgCho,
                GRAB_X_WAIT,
                GRAB_X_1,
                GRAB_X_2,
                GRAB_X_3)
            // tienCho = tinhGiaCho(tgCho, GRAB_X_WAIT)
            // if (0 < soKM && soKM <= 1) {
            //     // tính tiền KM1
            //     tienKm_1 = GRAB_X_1;
            //     tongTien = tienCho + tienKm_1;
            // } else if (1 < soKM && soKM <= 19) {
            //     //tính tiền KM 2
            //     tienKm_1 = GRAB_X_1;
            //     tienKm_2 = GRAB_X_2 * (soKM - 1);
            //     tongTien = tienCho + tienKm_1 + tienKm_2;
            // } else if (19 < soKM) {
            //     //Tính tiền KM 3
            //     tienKm_1 = GRAB_X_1;
            //     tienKm_2 = GRAB_X_2 * (19 - 1);
            //     tienKm_3 = GRAB_X_3 * (soKM - 19);
            //     tongTien = tienCho + tienKm_1 + tienKm_2 + tienKm_3;
            // }
            break;
        case "grabSUV":
            tinhTienChiTiet(
                soKM,
                tgCho,
                GRAB_SUV_WAIT,
                GRAB_SUV_1,
                GRAB_SUV_2,
                GRAB_SUV_3)
            break;
        case "grabBlack":
            tinhTienChiTiet(
                soKM,
                tgCho,
                GRAB_BLACK_WAIT,
                GRAB_BLACK_1,
                GRAB_BLACK_2,
                GRAB_BLACK_3)
            break;

        default:
            alert("Vui Lòng Chọn Loại Xe!")
            break;
    }
    //Kết quả
    var currencyFormat = new Intl.NumberFormat("vn-VN");
    var tongTienVND = currencyFormat.format(tongTien);
    getEle("divThanhTien").style.display = "block";
    getEle("xuatTien").innerHTML = tongTienVND;
    // if (loaiXe === grabX) {
    //     //tính tiền grab
    // } else if (loaiXe === grabSUV) {
    //     //tính tiền grab SUV
    // } else if (loaiXe === grabBlack) {
    //     //tính tiền grab SUV
    // }

    // enabled nút in hoá đơn
    getEle("inHoaDon").disabled = false;
}
getEle("inHoaDon").onclick = function () {
    console.log(123);
}