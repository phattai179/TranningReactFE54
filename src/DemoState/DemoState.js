
import React, { Component } from 'react'

export default class DemoState extends Component {

    // state là thuộc tính có sẵn của components => dùng để quản lý nguồn dữ liệu thay đổi trên giao diện khi người dùng thao tác (click, change, blur, ...)
    state = {
        isLogin: true,
    }

    //isLogin = false;
    userName = 'Phát Tài';

    renderContent = () => {
        if(this.state.isLogin) {
            return <p>
                Hello ! {this.userName}
            </p>
        }
        return <button onClick = {() =>{
            this.handleLogin();
        }} className = "btn btn-success">Đăng nhập</button>
    }


    handleLogin = () =>{

        // Không được thay đổi state trực tiệp mà phải thông qua phương thức this.setState

        // setState (): là phương thức có sẵn của lớp đối tượng component => Dùng để thay đổi giá trị this.state đồng thời gọi là hàm render

        // this.state.isLogin = true;
        // console.log('islogin', this.state.isLogin);

        // const newState = {
        //     isLogin : true,
        // }

        this.setState({
            isLogin: true
        });
        
    }

    render() {

        return (
            <div className = "container">
                <h3>If else react</h3>
                {/* {this.isLogin ? <p>Hello {this.userName}</p> : <button>Đăng nhập</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
