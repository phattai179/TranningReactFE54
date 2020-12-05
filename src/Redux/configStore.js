// File quản lý tất cả state của ứng ụng (Thay vì đặt tại component ta đặt state tại stotr)
import {combineReducers, createStore} from 'redux'

// import state giỏ hàng
import {GioHangReducer} from '../Redux/GioHangReducer'

// const stateGioHang = {
//     gioHang: [
//         {
//             maSP: 1,
//             tenSP: "IphoneX",
//             hinhAnh: './img/sp_iphoneX.png',
//             donGia: 1000,
//             soLuong: 5,
//         }
//     ]
// }

const rootReducer = combineReducers({
    // Các state sau này khai báo tại đây
    // stateGioHang: (state = stateGioHang, action) => {

    //     return state;
    // }

    stateGioHang: GioHangReducer

    // Ví dụ khai báo các state gioHang
    // stateGioHvang
    // stateSinhVien
    

})


// Tạo ra store chứa rootReducer (Xem như state tổng của ứng dụng)
export const store = createStore(rootReducer);

