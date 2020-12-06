import React, { Component } from 'react'
// import hinhAnh from '../../assets/imgGame/1.png';
import {connect} from 'react-redux'

class XucXac extends Component {

    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac, index) => {
            return <img key = {index} src = {xucXac.hinhAnh} width = "50" height = "50" />
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-4">
                        <button className = "btn btn-danger p-5"><span className = "display-4">Tài</span></button>
                    </div>

                    <div className="col-4">
                        {/* <img src={hinhAnh}/> */}

                        {/* <img src = "./img/imgGame/1.png" width = "50" height = "50"/>
                        <img src = "./img/imgGame/1.png" width = "50" height = "50"/>
                        <img src = "./img/imgGame/1.png" width = "50" height = "50"/> */}

                        {this.renderXucXac()}
                    </div>

                    <div className="col-4">
                        <button className = "btn btn-danger p-5"><span className = "display-4">Xỉu</span></button>
                    </div>
                </div>

            </div>
        )
    }
}

// Tạo hàm mapStateToProps
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac
    }
}

export default connect(mapStateToProps, null)(XucXac)