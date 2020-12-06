import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import styleGame from './BaiTapGameXucXac.module.css'


export default class BaiTapGamXucXac extends Component {
    render() {
        return (
            <div className = {`${styleGame.bgGame}`}>
                {/* Nếu như đặt tên class là bg-game thì 
                   => {`${styleGame.['bg-game']} */}
                <h1 className = "text-center mt-5">BÀI TẬP GAME XÚC XẮC</h1>
                <XucXac/>
                <KetQuaTroChoi/>
            </div>
        )
    }
}
