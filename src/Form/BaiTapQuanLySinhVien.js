import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

export default class BaiTapQuanLySinhVien extends Component {
    render() {
        return (
            <div className = "container mt-3">
                <FormSinhVien/>
                <TableSinhVien/>
            </div>
        )
    }
}
