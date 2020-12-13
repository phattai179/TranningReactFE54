import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormSinhVienRedux extends Component {

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
        },

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
        const newValues = { ...this.props.sinhVienRedux.values} // Lưu giữ lại các giá trị trước người dùng đã nhập
        newValues[name] = value; // Gán giá trị mới cho thuộc tính đang nhập


        // Xử lý lỗi
        const newErrors = { ...this.props.sinhVienRedux.errors };

        // Nếu value của trường đang nhập bị rỗng thì gán lỗi cho trường đó
        newErrors[name] = value.trim() === '' ? name + ' không được bỏ trống !' : '';

        if (typeInput === 'email') {
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (!regexEmail.test(value)) {
                newErrors[name] = name + ' không đúng định dạng !'
            }
        }

        if (typeInput === 'phone') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                newErrors[name] = name + ' không đúng định dạng'
            }
        }

        this.props.dispatch({
            type: 'SET_SV_REDUX',
            sinhVienRedux: {
                values: newValues,
                errors: newErrors
            }
        })

        // setState lại
        // this.setState({
        //     values: newValues,
        //     errors: newErrors
        // }, () => {
        //     console.log(this.state)
        // })
    }

    hanleSubmit = (event) => {
        event.preventDefault(); // Chặn sự kiện submit của browser khi người dùng submit reactform

        // Kiểm tra dữ liệu người dùng hợp lệ => 

        let valid = true;

        // Kiểm tra tất cả các thuộc tính trong this.state.values
        // Duyệt object phải dùng for in
        for (let key in this.props.sinhVienRedux.values) {
            if (this.props.sinhVienRedux.values[key].trim() === '') {
                valid = false;
            }
        }

        // Kiểm tra tất cả các thuộc tính của this.state.errors 
        for (let key in this.props.sinhVienRedux.errors) {
            if (this.props.sinhVienRedux.errors[key] !== "") {
                valid = false;
            }
        }


        if (!valid) {
            alert('Dữ liệu không hợp lệ !');
            return;
        }

        // Xử lý submit => api hoặc redux(dispatch)
        this.props.dispatch({
            type: 'THEM_SINH_VIEN',
            sinhVien: this.props.sinhVienRedux.values
        })
    }

    componentWillReceiveProps(newProps) {
        // Lấy props từ redux gắn vào state của component 
        this.setState({
            values: newProps.sinhVienSua
        });
    }


    render() {

        // let {maSinhVien, tenSinhVien, email, soDienThoai} = this.props.sinhVienSua;

        let { maSinhVien, tenSinhVien, email, soDienThoai } = this.props.sinhVienRedux.values;

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
                                <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} value={maSinhVien}></input>
                                <p className="text text-danger">{this.props.sinhVienRedux.errors.maSinhVien}</p>
                            </div>

                            <div className="form-group">
                                <h3>Tên sinh viên</h3>
                                <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} value={tenSinhVien}></input>
                                <p className="text text-danger">{this.props.sinhVienRedux.errors.tenSinhVien}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <h3>Email</h3>
                                <input typeInput="email" className="form-control" name="email" onChange={this.handleChangeInput} value={email} ></input>
                                <p className="text text-danger">{this.props.sinhVienRedux.errors.email}</p>
                            </div>

                            <div className="form-group">
                                <h3>Số điện thoại</h3>
                                <input typeInput="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput} value={soDienThoai}></input>
                                <p className="text text-danger">{this.props.sinhVienRedux.errors.soDienThoai}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-footer text-center">
                    <button className="btn btn-success" type="submit" >Thêm sinh viên</button>
                    <button className="btn btn-primary" type="button" onClick={() => {
                        this.props.dispatch({
                            type: 'CAP_NHAT_SINH_VIEN'
                        })
                    }} >Cập nhật sinh viên</button>
                </div>
            </form>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        sinhVienRedux: state.QuanLySinhVienReducer.sinhVienRedux

    }
}

export default connect(mapStateToProps)(FormSinhVienRedux)
