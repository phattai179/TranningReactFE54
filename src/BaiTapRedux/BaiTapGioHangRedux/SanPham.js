import React, { Component } from 'react'
import {connect} from 'react-redux' 

class SanPham extends Component {
    render() {
        console.log("prop SanPham", this.props)
        let { sanPham } = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={sanPham.hinhAnh} alt="124" height = "350"/>
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.donGia.toLocaleString()}</p>
                </div>
                <div className="card-footer">
                    <button onClick = {() => {
                        this.props.themGioHang(sanPham)
                    }} className="btn btn-success" >Thêm vỏ hàng</button>
                </div>
            </div>
        )
    }
}

// 
const mapDispatchToProps = (dispatch) => {
    // dispatch là tham số tử redux trả ra (nó là 1 hàm dùng để gửi giá trị lên store)
    return {
        themGioHang: (spClick) => {
            // Gửi dữ liệu lên redux

            // Bước 1: Tạo action 

            const action = {
                type: 'THEM_GIO_HANG', // Type thuộc tính bắt buộc
                sanPhamClick : {...spClick, soLuong:1} // Thuộc tính thứ 2 giá trị gửi lên redux

            }

            // Bước 2 sử dụng phương thức dispatch để đưa action lên redux (reducer)
            dispatch (action)
            console.log('spClick', spClick)
        }
    }

}


// Kết nối component với store
// Tham số 1 của connect là mapStateToProps (nếu không lấy dữ liệu nào từ store về thì để null)
// Tham số thứ 2 của connect : lá mapDisPatchToProps hàm này sẽ tạo ta props là function đưa dữ liệu lên store

export default connect(null, mapDispatchToProps)(SanPham)