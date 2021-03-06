import React, { Component } from 'react'

export default class RenderWithMap extends Component {


    products = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'iphone X', price: 2000 },
        { id: 3, name: 'iphone XS', price: 3000 },
        { id: 4, name: 'iphone 5', price: 500 },


    ]

    // renderProduct = () => {
    //     let arrJSX = [];

    //     for (let index in this.products) {
    //         // Mỗi lần lặp lấy ra 1 đổi tượng sản phẩm
    //         let product = this.products[index]
    //         // Tử đối tượng sản phẩm tạo ra đối tượng jsx
    //         let jsxProduct = <div className="col-4">
    //             <div className="card">
    //                 <img className="card-img-top" src="https://picsum.photos/200/200" alt="132.jpg" />
    //                 <div className="card-body">
    //                     <h4 className="card-title">{product.name}</h4>
    //                     <p className="card-text">{product.price}</p>
    //                 </div>
    //             </div>
    //         </div>;

    //         arrJSX.push(jsxProduct); // Đưa phẩn tử jsx được từ dữ liệu sản phẩm
    //     }

    //     return arrJSX;
    // }


    renderProductWithMap = () => {
        return this.products.map((product, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200/200" alt="132.jpg" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        });

       // return arrJSX; // Khai báo const ở trên
    }

    renderTable = () => {
        return this.products.map((product,index) => {
            return <tr key = {index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {/* {this.renderProduct()} */}
                    {this.renderProductWithMap()}
                    <table className = "table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
