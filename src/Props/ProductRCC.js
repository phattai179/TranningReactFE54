import React, { Component } from 'react'

export default class ProductRCC extends Component {


    // this.prosps là thuộc tính có sẵn có react class component dùng để nhận giá trị tử component cha truyền vào 

    // this.props thuộc tính không được gán lại giá trị mới 

    render() {

        let { sanPham } = this.props;
        // let {maSP, tenSP, giaBan, hinhAnh} = this.props.sanPham

        return (
            <div className="card">
                <img className="card-img-top" src={sanPham.hinhAnh} alt='123' />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                </div>
            </div>

        )
    }
}
