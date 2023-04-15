



function Header() {
    return (
        <>
            <div className="row" style={{height:"10px",marginTop:"25px"}}>
                <div className="col-2" style={{alignItems:"center"}}>
                    <img src="images/logo.png" className="img-fluid" alt="..." width={"300px"} style={{ background: "black" }} />
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid" style={{gap:"50px"}}>
                                <a className="navbar-brand" href="#">TRANG CHỦ</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{gap:"80px"}}>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">MÁY TÍNH BÀN</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">LAPTOP</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                PHỤ KIỆN
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">TAI NGHE</a></li>
                                                <li><a className="dropdown-item" href="#">CHUỘT</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">BÀN PHÍM</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">ĐỊA CHỈ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="col-4">
                    <div className="badge bg-primary text-wrap" style={{ width: "300px"}}>
                        VỀ CHÚNG TÔI<br></br>
                        0919.855.259

                    </div>
                </div>


            </div>
        </>
    )
}

export default Header