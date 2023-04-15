import Sanpham from "./Sanpham"
import '/node_modules/bootstrap/dist/css/bootstrap.css'
function Sanphammoi() {
    return (
        <>
            <div  >
                <h2 style={{display:"flex",justifyContent:"center",color:"red"}}>SẢN PHẨM MỚI</h2>
                <div className="row" style={{ width: "1000px" }}>
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