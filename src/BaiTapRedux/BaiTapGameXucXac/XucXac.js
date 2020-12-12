import React, { Component } from 'react'
// import hinhAnh from '../../assets/imgGame/1.png';
import { connect } from 'react-redux'

class XucXac extends Component {

    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac, index) => {
            return <img key={index} src={xucXac.hinhAnh} width="50" height="50" />
        })
    }

    hienThiTongDiem = () => {
        const tongDiem = this.props.mangXucXac.reduce((td,xucXac, index) => {
            return td += xucXac.diem
        }, 0)

        return tongDiem > 10 ? `${tongDiem} - TÀI` : `${tongDiem} - XỈU`
    }

    render() {

        let tongDiem = this.props.mangXucXac.reduce((td, xucXac, index) => {
            return td += xucXac.diem;
        }, 0)

        console.log(this.props)
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-12 display-4 text-danger" >
                        <h1>{this.hienThiTongDiem()}</h1>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger p-5" onClick={() => {
                            // Props này được sinh ra khi ta dùng hàm connect kết nối với components
                            this.props.dispatch({
                                type: 'DAT_CUOC',
                                datCuoc: true
                            })
                        }}><span className="display-4" >Tài</span></button>
                    </div>

                    <div className="col-4">
                        {/* <img src={hinhAnh}/> */}

                        {/* <img src = "./img/imgGame/1.png" width = "50" height = "50"/>
                        <img src = "./img/imgGame/1.png" width = "50" height = "50"/>
                        <img src = "./img/imgGame/1.png" width = "50" height = "50"/> */}
                        {this.renderXucXac()}

                        <div style={{ fontSize: '40px', color: 'yellow', marginTop: "10px" }}>
                            Điểm: {tongDiem} =
                            <span>{tongDiem > 10 ? 'Tài' : 'Xỉu'}</span>
                        </div>


                    </div>

                    <div className="col-4">
                        <button onClick={() => {
                            this.props.dispatch({
                                type: 'DAT_CUOC',
                                datCuoc: false
                            })
                        }} className="btn btn-danger p-5"><span className="display-4" >Xỉu</span></button>
                    </div>
                </div>

            </div>
        )
    }
}

// Tạo hàm mapStateToProps
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac,
        datCuoc: state.stateGameXucXac.datCuoc
    }
}

export default connect(mapStateToProps, null)(XucXac)