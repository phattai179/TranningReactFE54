const stateDefault = {
    datCuoc: true, // true: Tài, false: Xỉu
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        {hinhAnh: './img/imgGame/6.png', diem: 6},
        {hinhAnh: './img/imgGame/6.png', diem: 6},
        {hinhAnh: './img/imgGame/6.png', diem: 6},
    ]
}

export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {


    return {...state}
}