import Sanphammoi from "./Sanphammoi"
import Sanphambanchay from "./Sanphambanchay"
import '/node_modules/bootstrap/dist/css/bootstrap.css'


function Body() {
    return (
        <>
            <div className="" style={{margin: "220px 420px 0px 420px" }}>
                <div style={{height:"1400px"}}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ width: "2500px" }}>
                        <div className="carousel-inner"  >
                            <div className="carousel-item active">
                                <img src="images/1.jpeg" className="d-block w-50" alt="..." />
                            </div>
                            <div className="carousel-item active">
                                <img src="images/3.jpg" className="d-block w-50" alt="..." />
                            </div>
                            <div className="carousel-item active">
                                <img src="images/4.jpg" className="d-block w-50" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                
                <Sanphammoi />
                <Sanphambanchay/>
            </div>
        </>
    )
}

export default Body