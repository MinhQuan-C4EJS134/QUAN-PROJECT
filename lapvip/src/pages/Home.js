function Home(){
    return(
        <div className="app-layout">
            <div className="head-bar">
                <header className="upper-bar">                
                    <div style={"height: 85%;"}>
                        
                        <img src="./images/logo.png" height="70px" style="background-color: rgb(1, 5, 3);" ></img>
                        
                    </div>                
                    <div className="sb">
                        <input type="text" placeholder="Tìm kiếm..." />
                        <i className="bi bi-search"></i>
                    </div>
                    <div style={"display: flex; flex-wrap: wrap; max-width: 20%; column-gap: 25px; justify-content: center;"}>
                        <h5 style={"flex-shrink: 0;"}>VỀ CHÚNG TÔI</h5>
                        <h5 style={"flex-shrink: 0;"}>0919.855.259</h5>
                    </div>                             
                        
                            <div className="cart">
                                <i className="bi bi-cart2"></i>
                                <div id="cartAmount" className="cartAmount">0</div>
                            </div>
                                       
                </header>
                <nav className="lower-bar">
                    <div className="dropdown">
                        <button className="dropbtn">
                           
                                <div style={"display: flex; flex-direction: row; align-items: center;"}>                                                                                            
                                    <h5>MACBOOK</h5>
                                  
                                </div>
                            
                        </button>
                        <div className="dropdown-content">
                            <a href="./home.html">CHIP M1</a>
                            <a href="./home.html">CORE I7</a>
                            <a href="./home.html">CORE I5</a>
                            <a href="./home.html">CORE I3</a>
                        </div>
                    </div>
                    <a href="./product.html">
                        <div><h5>SALE OFF</h5></div>
                    </a>
                    <a href="./product.html"><div><h5>MÁY TÍNH BÀN</h5></div></a>
                    <a href="./product.html"><div><h5>SẢN PHẨM MỚI</h5></div></a>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <a href="./product.html">
                                <div>
                                    <h5>PHỤ KIỆN</h5>
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
                                    <h5>QUÀ TẶNG</h5>
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

            <div style={"height:120px;"}>        </div>

            <section style={"margin-bottom:15px"}>            
                <div className="swiper mySwiper2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                style={"width: 100%;"}>
                    <div className="swiper-wrapper" id="swiper-wrapper-616f60a54d9284d3" aria-live="polite" style={"transition-duration: 0ms; transform: translate3d(-3045px, 0px, 0px);"}>  
                        <div className="swiper-slide swiper-slide-prev" role="group" aria-label="1 / 3">
                                <img className="img-swipe0" src="./images/1.jpeg"></img>
                            
                        </div>
                        
                    </div>                
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>        
            </section>

            <section style={"display: flex; flex-direction:column; margin: 15px 0 15px 0;"}><h3>SẢN PHẨM MỚI</h3>
                <section className="mid-container-2">
                    <div className="swiper mySwiper3 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" style={"width: 80%;"}>
                        <div className="swiper-wrapper" id="swiper-wrapper-c93099a3e010a7262" aria-live="polite" style={"transition-duration: 0ms; transform: translate3d(-1353.33px, 0px, 0px);"}>
                            <div className="swiper-slide" aria-label="1/7" style={"align-items: start;"}>
                                <section className="mid-container-2">
                                    <div style={"display:flex; justify-content: center;"}>
                                        <div style={"width:80%;"}>
                                                <img width="100%" height="" src="./images/2.jpg" alt=""
                                                    loading="lazy" sizes="(max-width: 510px) 100vw, 510px"></img>
                                        </div>
                                    </div>
                                    <div>
                                        <h4><a href="./product.html">DELL PRECISION 7670</a></h4>
                                        <h4 style={"color:red"}>45.000.000₫</h4>
                                    </div>
                                </section>
                            </div>
                            <div className="swiper-slide" aria-label="2/7" style={"align-items: start;"}>
                                <section className="mid-container-2">
                                    <div style={"display:flex; justify-content: center;"}>
                                        <div style={"width:80%;"}>
                                            
                                                <img width="100%" height="" src="./images/3.jpg" alt="" loading="lazy"
                                                    sizes="(max-width: 510px) 100vw, 510px"></img>
                                           
                                        </div>
                                    </div>
                                    <div>
                                        <h4><a href="./product.html">Dell Precision 3571 Gen 12th</a></h4>
                                        <h4 style={"color:red"}>45.660.000₫</h4>
                                    </div>                        
                                </section>
                            </div>
                            <div className="swiper-slide swiper-slide-prev" aria-label="3/7" style={"align-items: start;"}>
                                <section className="mid-container-2">
                                    <div style={"display:flex; justify-content: center;"}>
                                        <div style={"width:80%;"}>
                                                <img width="100%" height=""
                                                    src="./images/4.jpg" alt=""
                                                    loading="lazy" sizes="(max-width: 510px) 100vw, 510px"></img>
                                        </div>
                                    </div>
                                    <div>
                                        <h4><a href="./product.html">Lenovo Legion 5 Pro 16IAH7H (2022)</a></h4>
                                        <h4 style={"color:red"}>
                                            <del>105.000.000₫</del> 95.000.000₫
                                        </h4>
                                    </div>
                                </section>
                            </div>
                            <div className="swiper-slide swiper-slide-active" aria-label="4/7" style={"align-items: start;"}>
                                <section className="mid-container-2">
                                    <div style={"display:flex; justify-content: center;"}>
                                        <div style={"width:80%;"}>
                                                <img width="100%" height="" src="./images/5.jpg" alt=""
                                                    loading="lazy" sizes="(max-width: 510px) 100vw, 510px"></img>
                                        </div>
                                    </div>
                                    <div>
                                        <h4><a href="./product.html">Macbook Air 13 2022 M2, RAM 8GB, SSD 512GB - New</a></h4>
                                        <h4 style={"color:red"}>
                                            34.490.000 đ
                                        </h4>
                                    </div>
                                </section>
                            </div>
                           
                          
                            
                        </div>                
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>            
                    </div>
                
                    <a href="./product.html">
                        <div style="
                            font-size: small; font-weight: bold; 
                            padding:10px; margin:10px; border: 1px solid darkblue; border-radius:10px; 
                            background: white;">
                            Xem thêm
                        </div>    
                    </a>
                </section>
            </section>

            <section style={"display: flex; flex-direction:column; margin: 15px 0 15px 0;"}><h3>SẢN PHẨM BÁN CHẠY</h3>
                <section className="mid-container-2">
                    <div style={"display:flex; justify-content: center;"}>
                        <div style={"width:65%;"}>
                                <img width="100%" height="" src="./images/5.jpg" alt="" loading="lazy"
                                    sizes="(max-width: 510px) 100vw, 510px"></img>
                        </div>
                    </div>
                    <div style={"text-align: center;"}>
                        <h4>
                            <a href="./product.html">Macbook Air 13 2022 M2, RAM 8GB, SSD 512GB - New</a>
                        </h4>
                        <h4 style={"color:red"}>
                            34.490.000 đ
                        </h4>
                    </div>
                        <div style="
                            font-size: small; font-weight: bold; 
                            padding:10px; margin:10px; border: 1px solid darkblue; border-radius:10px; 
                            background: white;">
                            Xem thêm
                        </div>
                </section>
            </section>
                <header className="footer">
                    <ul style={["list-style-type:none;"]}>
                        <li>
                            <a href="./home.html">
                                <strong>LIÊN HỆ VỚI CHÚNG TÔI</strong>
                            </a>
                        </li>
                        <li>
                            <a href="./home.html" style={["color:red"]}>
                                Hotline mua hàng 1: <strong>094 27 66662</strong>
                            </a>
                        </li>
                        <li>
                            <a href="./home.html" style={["color:red"]}>
                                Hotline mua hàng 2: <strong>098 67 66662</strong>
                            </a>
                        </li>
                        <li>
                            <a>
                                (Tư vẫn miễn phí từ 8h30-22h các ngày trong tuần)
                            </a>
                        </li>
                        <li>
                            <a href="./home.html">HỖ TRỢ KHÁCH HÀNG</a>
                        </li>
                        <li>
                            <a href="./home.html">
                                Điều khoản sử dụng
                            </a>
                        </li>
                        <li>
                            <a href="./home.html">
                                Chính sách đổi và bảo hành
                            </a>
                        </li>
                        <li>
                            <a href="./home.html">
                                Chính sách vận chuyển &amp; thanh toán
                            </a>
                        </li>
                        <li>
                            <a href="./home.html">
                                Chính sách bảo mật
                            </a>
                        </li>
                    </ul>
            
                    <ul style={["list-style-type:none;"]}>
                        <li>
                            <a href="./home.html">
                                <strong>© CÔNG TY TNHH LAPVIP</strong>
                            </a>
                        </li>
                        <li>
                                Showroom:
                                <br>39 Xã Đàn - Phương Liên - Đống Đa - Hà Nội</br>
                        </li>
                        <li>
                            <a href="./home.html">
                                Tel: 0919.855.259
                            </a>
                        </li>
                        <li>
                            <a href="./home.html"> <span class="elementor-icon-list-text">Email: lapvip@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="./home.html">
                                <span>Đã chứng nhận đăng ký kinh doanh: 0107994675</span>
                            </a>
                        </li>
                    </ul>
            
                    <ul style={["list-style-type:none;"]}>
                        <li>
                            <div style={["display: flex; justify-content: center ;"]}>
                                <img width="170" height="" src="./images/logoSaleNoti.png" alt=""
                                    sizes="(max-width: 600px) 100vw, 600px"></img>
                            </div>
                        </li>
                    </ul>
                </header>

        </div>
    )
}

export default Home