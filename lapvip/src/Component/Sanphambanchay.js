import Sanpham from "./Sanpham"
import '/node_modules/bootstrap/dist/css/bootstrap.css'
function Sanphambanchay() {
    return (
        <>
            <div style={{marginTop:"103px"}} >
                <h2 style={{display:"flex",justifyContent:"center",color:"red"}}>SẢN PHẨM BÁN CHẠY</h2>
                <div className="row" style={{ width: "1000px" }}>
                    <div className="col">
                        <Sanpham image="images/5.jpg" name='Macbook Pro 16 inch 2019' price='60.000.000đ' />
                    </div>
                    <div className="col">
                        <Sanpham image="images/6.jpg" name='Dell precision 3561' price='27.990.000đ' />
                    </div>
                    <div className="col">
                        <Sanpham image="images/7.jpg" name='DELL INSPIRON' price='18.890.000đ' />
                    </div>
                </div>
            </div>
           
        </>

    )
}

export default Sanphambanchay