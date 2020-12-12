import React, { Component } from 'react'

export default class FormSinhVien extends Component {

    state = {
        values: {
            maSinhVien: "",
            tenSinhVien: "",
            email: "",
            soDienThoai: "",
        },

        errors: {
            maSinhVien: "",
            tenSinhVien: "",
            email: "",
            soDienThoai: "",
        }

    }

    handleChangeInput = (event) => {
        // event đại diện cho sự kiện xảy ra trên thẻ

        // let tag = event.target; // Giống DOM 
        let { value, name } = event.target
        let typeInput = event.target.getAttribute('typeInput') // attribute là thuộc tính người dùng thêm trên thẻ

        console.log(typeInput);

        // this.setState({
        //     [name]: value
        //     // setState có tham số thứ 2 nên gọi hàm để console.log ra 
        // }, () => {
        //     console.log('stateSinhVien', this.state)
        // })

        // Xử lý cập nhật values
        const newValues = {...this.state.values} // Lưu giữ lại các giá trị trước người dùng đã nhập
        newValues[name] = value; // Gán giá trị mới cho thuộc tính đang nhập


        // Xử lý lỗi
        const newErrors = {...this.state.errors};

        // Nếu value của trường đang nhập bị rỗng thì gán lỗi cho trường đó
        newErrors[name] = value.trim() === '' ? name + ' không được bỏ trống !' : '';

        if(typeInput === 'email') {
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if(!regexEmail.test(value)){
                newErrors[name] = name + ' không đúng định dạng !'
            }
        }

        if(typeInput === 'phone'){
            const regexNumber = /^[0-9]+$/;
            if(!regexNumber.test(value)){
                newErrors[name] = name + ' không đúng định dạng'
            }
        }

        // setState lại
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
        })
    }

    hanleSubmit = (event) => {
        event.preventDefault(); // Chặn sự kiện submit của browser khi người dùng submit reactform

        // Kiểm tra dữ liệu người dùng hợp lệ => 

        let valid = true;
        
        // Kiểm tra tất cả các thuộc tính trong this.state.values
        // Duyệt object phải dùng for in
        for(let key in this.state.values) {
            if(this.state.values[key].trim() === ''){
                valid = false;
            }
        }

        // Kiểm tra tất cả các thuộc tính của this.state.errors 
        for (let key in this.state.errors) {
            if(this.state.errors[key] !== ""){
                valid = false;
            }
        }


        if(!valid){
            alert('Dữ liệu không hợp lệ !');
            return ;
        }
    }

    render() {
        return (
            <form className="card" onSubmit={this.hanleSubmit}>
                <div className="card-header bg-dark text-white">
                    <h3>Thông tin sinh viên</h3>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <h3>Mã sinh viên</h3>
                                <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput}></input>
                                <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                            </div>

                            <div className="form-group">
                                <h3>Tên sinh viên</h3>
                                <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput}></input>
                                <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <h3>Email</h3>
                                <input typeInput = "email" className="form-control" name="email" onChange={this.handleChangeInput} ></input>
                                <p className="text text-danger">{this.state.errors.email}</p>
                            </div>

                            <div className="form-group">
                                <h3>Số điện thoại</h3>
                                <input typeInput = "phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput}></input>
                                <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-footer text-center">
                    <button className="btn btn-success" type="submit" >Thêm sinh viên</button>
                </div>
            </form>

        )
    }
}
