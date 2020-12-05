import React, { Component } from 'react'

export default class Product extends Component {
    render() {

        const {prod, onViewDetail, onAddToCart} = this.props

        return (
            <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src={prod.hinhAnh} alt="124" />
                    <div className="card-body">
                        <h4 className="card-title">{prod.tenSP}</h4>
                        <button onClick={() => onViewDetail(prod)} className="btn btn-success">Xem chi tiết</button>

                        <button onClick = {() => onAddToCart(prod)} className = "btn btn-danger ml-3">Thêm vỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
