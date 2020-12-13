const stateDefault = {
    mangSinhVien : [
        {maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', email : 'nguyenvana@gmail.com', soDienThoai: '0999999999'},

        {maSinhVien: '2', tenSinhVien: 'Nguyễn hữu Cầu', email : 'nguyenvanB@gmail.com', soDienThoai: '0888888888'}
    ],

    sinhVienSua : {
        maSinhVien: '10',
        tenSinhVien: 'A',
        email: '',
        soDienThoai: '',
    },

    sinhVienRedux : {
        values: {
            maSinhVien: "",
            tenSinhVien: "",
            email: "",
            soDienThoai: "",
        },

        errors: {
            maSinhVien: "",
            tenSinhVien: "",
            email: "",
            soDienThoai: "",
        }
    }
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'THEM_SINH_VIEN' : {
            
            const mangSinhVienCapNhat = [...state.mangSinhVien, action.sinhVien];

            // mangSinhVienCapNhap.push(action.sinhVien)

            // state.mangSinhVien = mangSinhVienCapNhat

            const mangSinhVienUpdate = [...state.mangSinhVien, state.sinhVienRedux.values]

            return {...state, mangSinhVien: mangSinhVienUpdate}
        }

        case 'CAP_NHAT_SINH_VIEN' : {
            const mangSinhVienCapNhat = [...state.mangSinhVien];

            let svUpdate = mangSinhVienCapNhat.find(sv => sv.maSinhVien === state.sinhVienRedux.values.maSinhVien);

            if(svUpdate) {
                svUpdate.tenSinhVien = state.sinhVienRedux.values.tenSinhVien;
                svUpdate.email = state.sinhVienRedux.values.email;
                svUpdate.soDienThoai = state.sinhVienRedux.values.soDienThoai;
            }

            state.mangSinhVien = mangSinhVienCapNhat;

            return {...state}
        }

        case 'SUA_SINH_VIEN' : {
            
            state.sinhVienSua = {...action.sinhVienSua};

            // Cập nhật lại state của formredux

            let newSinhVienRedux = {...state.sinhVienRedux}

            newSinhVienRedux.values = {...action.sinhVienSua};
            
            return {...state, sinhVienRedux: newSinhVienRedux};
        }

        case 'SET_SV_REDUX' : {
            state.sinhVienRedux = action.sinhVienRedux;

            return {...state}
        }


    }

    return {...state}
}