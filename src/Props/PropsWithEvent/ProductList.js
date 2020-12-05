import React, { Component } from 'react'
import productList from '../Data/productList.json';
import Modal from './Modal';
import Product from './Product';


export default class ProductList extends Component {

    state = {
        productDetail: productList[0],
        cart: [
            // {
            //     "maSP": 1,
            //     "tenSP": "VinSmart Live",
            //     "donGia": 5700000,
            //     "hinhAnh": "./img/vsphone.jpg",
            //     "soLuong": 1,

            // }
        ]
    };

    renderProductListHandler = () => {
        return productList.map((product, index) => {
            return <Product onViewDetail={this.viewDetailHandler} prod={product} key={index} onAddToCart = {this.addToCart} />

            // <div className="col-4" key={index}>
            //     <div className="card">
            //         <img className="card-img-top" src={product.hinhAnh} alt="124" />
            //         <div className="card-body">
            //             <h4 className="card-title">{product.tenSP}</h4>
            //             <button onClick = {() => this.viewDetailHandler(product)} className="btn btn-success">Xem chi tiết</button>
            //         </div>
            //     </div>
            // </div>
        })
    }

    viewDetailHandler = (product) => {
        // console.log(product)
        this.setState({
            productDetail: product,

        })
    }
 
    addToCart = (product) => {
        // console.log(product)

        // const productUpdate = {...product, soLuong: 1, }
        const index = this.state.cart.findIndex(prod => prod.maSP === product.maSP);

        if(index !== -1) {

            const newCart = [...this.state.cart];
            newCart[index].soLuong += 1;

            this.setState({
                // cart: [...this.state.cart, (this.state.cart[index].soLuong += 1)]
                cart: newCart,
            });
        }else{
            const productUpdate = {...product, soLuong: 1};
            this.setState({
                cart: [...this.state.cart, productUpdate],
            
            })
        }

    }

    // Định nghĩa sự kiện xóa giỏ hàng tại nơi chứa state giỏ hàng
    deleteItem = (maSPClick) => {
        //console.log(maSP);
        
        // Tạo ra 1 giỏ hàng mới giống giá trị giỏ hàng cũ
        let  gioHangCapNhat = [...this.state.cart];

        // Xử lý xóa trên giỏ hàng mới 
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSPClick);

        if(index !== -1){
            gioHangCapNhat.splice(index,1);
        }

        this.setState({
            cart: gioHangCapNhat
        })
        
        // Gán lại giỏ hàng cũ bằng giỏ hàng mới 
    }

    // Định nghĩa hàm thay đổi số lượng tại nơi chứa state số lượng (số lượng nằm trong cart[])
    tangGiamSoLuong = (maSPClick, soLuong) => {
        //console.log(maSP, soLuong);
        let gioHangCapNhat = [...this.state.cart];

        // Tìm trong giỏ hàng có sản phẩm mã SP === với sản phẩm được click

        let spGioHang = gioHangCapNhat.find(spGH => spGH.maSP === maSPClick)
        // Tìm thấy sản phẩm trong giỏ hàng
        if(spGioHang) {
            spGioHang.soLuong += soLuong
        }

        // Cập nhật lại giỏ hàng
        this.setState({
            cart: gioHangCapNhat
        })
    }

    render() {

        const { productDetail, cart} = this.state

        return (
            <div>
                {/* import Modal vào ProductList */}
                <Modal tangGiamSoLuong = {this.tangGiamSoLuong} deleteItem = {this.deleteItem} cart = {cart} />
                <div className="row">
                    {this.renderProductListHandler()}

                </div>

                <div className="row mt-4">
                    <div className="col-6 text-center">
                        <h5>{productDetail.tenSP}</h5>
                        <img src={productDetail.hinhAnh} alt="123" width="300" />
                    </div>

                    <div className="col-6">
                        <h5>Thông số kỹ thuật</h5>
                        <table className="table" >
                            <tr>
                                <th>Màn hình</th>
                                <td>{productDetail.manHinh}</td>
                            </tr>

                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{productDetail.heDieuHanh}</td>
                            </tr>

                            <tr>
                                <th>Camera trước</th>
                                <td>{productDetail.cameraTruoc}</td>
                            </tr>

                            <tr>
                                <th>Camera sau</th>
                                <td>{productDetail.cameraSau}</td>
                            </tr>

                            <tr>
                                <th>RAM</th>
                                <td>{productDetail.ram}</td>
                            </tr>

                            <tr>
                                <th>ROM</th>
                                <td>{productDetail.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
