import React, { Component } from 'react'
import ProductList from './ProductList'

export default class PropsWithEvent extends Component {



    render() {
        return (
            <div className = "container">
                
                <div className = "text-right">
                    <button data-toggle="modal" data-target="#modelId">Giỏ hàng
                    </button>
                </div>
                <h3 className = "text-center my-4" >Danh Sách Sản Phẩm</h3>
                <ProductList/>
            </div>
        )
    }
}

// Nếu đổi tên file export default tenmoi