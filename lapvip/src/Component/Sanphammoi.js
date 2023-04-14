import Sanpham from "./Sanpham"
function Sanphammoi() {
    return (
        <>
            <h3 style={{ color: "red", marginTop: "50px" }}>SẢN PHẨM MỚI</h3>
            <div className="container " style={{width:"1000px"}}>
                <div className="row">
                    <div className="col">
                        <Sanpham image="images/2.jpg" name='Dell precision 7670' price='46.990.000đ' />
                    </div>
                    <div className="col">
                        <Sanpham image="images/3.jpg" name='Dell precision 7700' price='56.990.000đ' />
                    </div>
                    <div className="col">
                        <Sanpham image="images/4.jpg" name='ASUS 7670' price='35.450.000đ' />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Sanphammoi