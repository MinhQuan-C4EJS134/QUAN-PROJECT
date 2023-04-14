



function Header(){
    return(
        <div className="app-layout">
            <div className="head-bar" >
                <header className="upper-bar" style={{display:"flex", gap:"50px",height:""}}>                
                    <div style={{height: "100%" , marginLeft:"50px"}}>
                        
                        <img src='images/logo.png' height="70px" style={{backgroundColor: "rgb(1, 5, 3)"}} ></img>
                        
                    </div>                
                    <div className="sb">
                        <input type="text" placeholder="Tìm kiếm..." style={{width:"500px"}} />

                        <i className="bi bi-search"></i>
                    </div>
                    <div style={{display:"flex", gap:"50px"}}>
                        <h5 style={{flexShrink: "0"}}>VỀ CHÚNG TÔI</h5>
                        <h5 style={{flexShrink: "0"}}>0919.855.259</h5>
                    </div>                             
                        
                            <div className="cart">
                               <div><img src="images/shopping-cart.svg" height="30px"></img></div>

                                <div id="cartAmount" className="cartAmount">0</div>
                            </div>
                                       
                </header>
                <nav className="lower-bar" >
                        <a href="./product.html">
                            <div><h5 style={{ color:"red", fontSize:"20px"}}>TRANG CHỦ</h5></div>
                        </a>
                    <a href="./product.html">
                        <div><h5 style={{ color:"red", fontSize:"20px"}}>SALE OFF</h5></div>
                    </a>
                    <a href="./product.html"><div><h5 style={{ color:"red", fontSize:"20px"}}>MÁY TÍNH BÀN</h5></div></a>
                    <a href="./product.html"><div><h5 style={{ color:"red", fontSize:"20px"}}>SẢN PHẨM MỚI</h5></div></a>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <a href="./product.html">
                                <div>
                                    <h5 style={{ color:"red", fontSize:"20px"}}>PHỤ KIỆN</h5>
                                </div>
                            </a>
                        </button>
                        <div className="dropdown-content">
                            <a href="./product.html">TAI NGHE</a>
                            <a href="./product.html">BÀN PHÍM</a>
                            <a href="./product.html">MOUSE</a>
                            <a href="./product.html">BALO</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <a href="./product.html">
                                <div>
                                    <h5  style={{ color:"red", fontSize:"20px"}}>QUÀ TẶNG</h5>
                                </div>
                            </a>
                        </button>
                        <div className="dropdown-content">
                            <a href="./product.html">LAPTOP </a>
                            <a href="./product.html">MÁY TÍNH BÀN</a>
                        
                        </div>
                    </div>
                </nav>

            </div>


        </div>
    )
}

export default Header