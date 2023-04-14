import './bootstrap.css'
import './Home.css'
import Logo from './images/logo.png';
import img1 from './images/1.jpeg';
import img1a from './images/1A.jpg';
import img1B from './images/1B.jpg';
import img1C from './images/1C.jpg';
import img1D from './images/1D.jpg';
import img1E from './images/1E.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/logoSaleNoti.png';


function Home(){
    return(
        <div className="app-layout">
            <div className="head-bar" >
                <header className="upper-bar" style={{display:"flex", gap:"50px"}}>                
                    <div style={{height: "100%" , marginLeft:"50px"}}>
                        
                        <img src={Logo} height="70px" style={{backgroundColor: "rgb(1, 5, 3)"}} ></img>
                        
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

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

            <div style={{height:"120px"}}>        </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={img2} className="d-block w-50" alt="..."/>
                        </div>
                        <div className="carousel-item active">
                        <img src={img3} className="d-block w-50" alt="..."/>
                        </div>
                        <div className="carousel-item active">
                        <img src={img4} className="d-block w-50" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

            <section style={{display: "flex", flexDirection:"column", margin:" 15px 0 15px 0"}}><h3>SẢN PHẨM MỚI</h3>
                <section className="col-3">
                    <div className="swiper mySwiper3 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" style={{width: "80%"}}>
                        <div className="swiper-wrapper" style={{display:"flex",width:"100"}} >
                            <div className="swiper-slide" aria-label="1/7" style={{alignItems: "start"}}>
                                <section className="mid-container-2">
                                    <div style={{display:"flex", justifyContent:" center"}}>
                                        <div style={{width:"80%"}}>
                                                <img width="100%" height="" src={img1a} alt=""
                                                    loading="lazy" sizes="(max-width: 510px) 100vw, 510px"></img>
                                        </div>
                                    </div>
                                    <div>
                                        <h4><a href="./product.html">DELL PRECISION 7670</a></h4>
                                        <h4 style={{color:"red"}}>45.000.000₫</h4>
                                    </div>
                                </section>
                            </div>
                            <div className="swiper-slide" aria-label="2/7" style={{alignItems: "start"}}>
                                <section className="mid-container-2">
                                    <div style={{display:"flex", justifyContent: "center"}}>
                                        <div style={{width:"80%"}}>
                                            
                                                <img width="100%" height="" src={img1B} alt="" loading="lazy"
                                                    sizes="(max-width: 510px) 100vw, 510px"></img>
                                           
                                        </div>
                                    </div>
                                    <div>
                                        <h4><a href="./product.html">Dell Precision 3571 Gen 12th</a></h4>
                                        <h4 style={{color:"red"}}>45.660.000₫</h4>
                                    </div>                        
                                </section>
                            </div>
                            <div className="swiper-slide swiper-slide-prev" aria-label="3/7" style={{alignItems: "start"}}>
                                <section className="mid-container-2">
                                    <div style={{display:"flex", justifyContent: "center"}}>
                                        <div style={{width:"80%"}}>
                                                <img width="100%" height=""
                                                    src={img3} alt=""
                                                    loading="lazy" sizes="(max-width: 510px) 100vw, 510px"></img>
                                        </div>
                                    </div>
                                    <div>
                                        <h4><a href="./product.html">Lenovo Legion 5 Pro 16IAH7H (2022)</a></h4>
                                        <h4 style={{color:"red"}}>
                                            <del>105.000.000₫</del> 95.000.000₫
                                        </h4>
                                    </div>
                                </section>
                            </div>
                            <div className="swiper-slide swiper-slide-active" aria-label="4/7" style={{alignItems: "start"}}>
                                <section className="mid-container-2">
                                    <div style={{display:"flex", justifyContent: "center"}}>
                                        <div style={{width:"80%"}}>
                                                <img width="100%" height="" src={img2} alt=""
                                                    loading="lazy" sizes="(max-width: 510px) 100vw, 510px"></img>
                                        </div>
                                    </div>
                                    <div>
                                        <h4><a href="./product.html">Macbook Air 13 2022 M2, RAM 8GB, SSD 512GB - New</a></h4>
                                        <h4 style={{color:"red"}}>
                                            34.490.000 đ
                                        </h4>
                                    </div>
                                </section>
                            </div>
                           
                          
                            
                        </div>                
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>            
                    </div>
                
                    <a href="./product.html">
                        <div style={{
                            fonSize: "small", fontWeight: "bold", 
                            padding:"10px", margin:"10px", border: "1px solid darkblue", borderRadius:"10px", 
                            background: "white"}}>
                            Xem thêm
                        </div>    
                    </a>
                </section>
            </section>

            <section style={{display: "flex", flexDirection:"column", margin: "15px 0 15px 0"}}><h3>SẢN PHẨM BÁN CHẠY</h3>
                <section className="mid-container-2">
                    <div style={{display:"flex", justifyContent: "center"}}>
                        <div style={{width:"65%"}}>
                                <img width="100%" height="" src={img1E} alt="" loading="lazy"
                                    sizes="(max-width: 510px) 100vw, 510px"></img>
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <h4>
                            <a href="./product.html">Macbook Air 13 2022 M2, RAM 8GB, SSD 512GB - New</a>
                        </h4>
                        <h4 style={{color:"red"}}>
                            34.490.000 đ
                        </h4>
                    </div>
                        <div style={{
                            fontSize: "small", fontWeight: "bold", 
                            padding:"10px", margin:"10px", border: "1px solid darkblue", borderRadius:"10px", 
                            background: "white"}}>
                            Xem thêm
                        </div>
                </section>
            </section>
                <header className="footer">
                    <ul style={{listStyleType:"none"}}>
                        <li>
                            <a href="./home.html">
                                <strong>LIÊN HỆ VỚI CHÚNG TÔI</strong>
                            </a>
                        </li>
                        <li>
                            <a href="./home.html" style={{color: "red"}}>
                                Hotline mua hàng 1: <strong>094 27 66662</strong>
                            </a>
                        </li>
                        <li>
                            <a href="./home.html" style={{color: "red"}}>
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
            
                    <ul>
                        <li>
                            <a href="./home.html">
                                <strong>© CÔNG TY TNHH LAPVIP</strong>
                            </a>
                        </li>
                        <li>
                                Showroom:
                                39 Xã Đàn - Phương Liên - Đống Đa - Hà Nội
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
            
                    <ul >
                        <li>
                            <div style={{display: "flex", justifyContent: "center" }}>
                                <img width="170" height="" src={img6} alt=""
                                    sizes="(max-width: 600px) 100vw, 600px"></img>
                            </div>
                        </li>
                    </ul>
                </header>

        </div>
    )
}

export default Home