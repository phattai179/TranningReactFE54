import React, { Component } from 'react'

export default class HandleEvent extends Component {


    showMess = () => {
        alert('hello cybersoft frontend 54');
    }

    showInfo = (info) =>{
        alert(info);
    }

    render() {
        const title = 'cybersoft'
        return (
            <div className = "container">
                <h3>Hander Event</h3>
                {/* showMess không cần () vì khi clich vào đã tự dộng gọi hàm rồi */}
                <button onClick = {this.showMess}>Click me</button>

                <button onClick = { () => {
                    alert(`hello ${title}`);
                }}>Show message</button>

                <button onClick = {() => {
                    this.showInfo('hello fe54')
                }}>Show info</button>

                 {/* Cách sử dụng hàm bind -> Ít dùng */}
                 <button onClick = {this.showInfo.bind(this,'hello cyber fe')}>show few</button>
            </div>
        )
    }
}

