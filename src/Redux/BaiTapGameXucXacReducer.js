const stateDefault = {
    datCuoc: true, // true: Tài, false: Xỉu
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './img/imgGame/6.png', diem: 6 },
        { hinhAnh: './img/imgGame/6.png', diem: 6 },
        { hinhAnh: './img/imgGame/6.png', diem: 6 },
    ]
}

export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'DAT_CUOC': {
            state.datCuoc = action.datCuoc;
            return { ...state }
        }

        case 'RANDOM_XUC_XAC': {
            console.log('action', action)
            // Random 
            // Tạo một mảng xúc xắc ngẫu nhiên

            const mangXXNN = [];

            // Xử lý random 3 lần tạo ra 3 xúc xắc
            for (let i = 0; i < 3; i++) {
                const soNN = Math.floor(Math.random() * 6) + 1;

                // Từ số ngẫu nhiên tạo ra object xúc xắc
                const xxNN = { hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN };

                // Thêm xx ngẫu nhiên vào màng XXNN
                mangXXNN.push(xxNN);

            }

            // Gán lại state của mảng xuc xắc = mangXXNN;
            state.mangXucXac = mangXXNN;


            // Cập nhật lại state.soBanChoi

            const tongDiem = state.mangXucXac.reduce((td, xucXac, index) => {
                return td += xucXac.diem
            },0)

            if((state.datCuoc && tongDiem > 10) || (!state.datCuoc && tongDiem <= 10)){
                state.soBanThang += 1;
            }

            // Cập nhật lại số bàn chơi 
            state.soBanChoi += 1
            
            return { ...state }
        }
    }

    return { ...state }
}