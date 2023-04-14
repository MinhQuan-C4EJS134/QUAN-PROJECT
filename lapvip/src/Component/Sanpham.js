function Sanpham(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <a href="#" className="btn btn-primary">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
                    Go somewhere</div>
            </a>
        </div >
)}
export default Sanpham