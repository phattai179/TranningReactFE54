import React, { Component } from 'react'
import {connect} from 'react-redux'

class TableSinhVien extends Component {

    renderSinhVien = () => {
        return this.props.mangSinhVien.map((sv, index) => (
                <tr key = {index}>
                    <td>{sv.maSinhVien}</td>
                    <td>{sv.tenSinhVien}</td>
                    <td>{sv.email}</td>
                    <td>{sv.soDienThoai}</td>
                    <td>
                        <button className = "btn btn-danger">Xóa</button>
                        <button className = "btn btn-primary" onClick = {() => {
                            this.props.dispatch({
                                type: 'SUA_SINH_VIEN',
                                sinhVienSua: sv
                            })
                        }}>Sửa</button>


                        
                    </td>
                </tr>
            )
        )        
    }

    render() {
        return (
            <div className = "mt-5">
                <table className = "table" >
                    <thead>
                        <tr className = "bg-dark text-white">
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Ví dụ () => {return {...}} ==== () => ({...})
// Ví dụ () => {return <div>...</div>}  === () => (<div>...</div>)

const mapStateToProps = (state) => ({
        mangSinhVien : state.QuanLySinhVienReducer.mangSinhVien
})


export default connect(mapStateToProps)(TableSinhVien)
