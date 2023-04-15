import '/node_modules/bootstrap/dist/css/bootstrap.css'
function Sanpham(props) {
    return (
        <>
            <div className="card" style={{ width: '300px', height: "400px" }}>
                <a href="#" className="btn btn-primary">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.price}</p>

                    </div>
                </a>
            </div >
        </>
    )

}
export default Sanpham