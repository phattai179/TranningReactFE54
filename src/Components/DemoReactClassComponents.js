
// Cú pháp rcc -> enter
import React, { Component } from 'react'

// React class component
export default class DemoReactClassComponents extends Component {
    // Khai báo nhiều thuộc tính và phương thức khác

    // Render là phương thức chứa nội dung giao diện của thẻ <DemoReactClassComponents>
    render() {
        // Khai báo biến hàm ... 

        return (
            <div>
                <div>
                    <ul className="nav nav-tabs" id="navId">
                        <li className="nav-item">
                            <a href="#tab1Id" className="nav-link active">Active</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#tab2Id">Action</a>
                                <a className="dropdown-item" href="#tab3Id">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#tab4Id">Action</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#tab5Id" className="nav-link">Another link</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab1Id" role="tabpanel" />
                        <div className="tab-pane fade" id="tab2Id" role="tabpanel" />
                        <div className="tab-pane fade" id="tab3Id" role="tabpanel" />
                        <div className="tab-pane fade" id="tab4Id" role="tabpanel" />
                        <div className="tab-pane fade" id="tab5Id" role="tabpanel" />
                    </div>
                </div>


                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>


            </div>
        )
    }
}
