import { Link } from "react-router-dom";
const Body = () => {
    return (


        <div className="body">
            <h4>Categories</h4>
            <div className="card">
                <Link to="/fruits&vegitable">

                    <div className="itemCard">
                        <img className="img" src="https://img.freepik.com/premium-photo/collection-fresh-fruits-vegetables-wooden-basket-white-background_334042-1204.jpg?ga=GA1.1.1310194608.1728216934&semt=ais_hybrid" />
                        <h4 className="img-product"> Fruits and vegetables</h4>

                    </div> </Link>
                <Link to="/dairyProduct">
                    <div className="itemCard">
                        <img className="img" src="https://img.freepik.com/premium-photo/fresh-dairy-grocery-products_1254967-79997.jpg?ga=GA1.1.1310194608.1728216934&semt=ais_hybrid" />
                        <h4 className="img-product">Dairy Product</h4>
                    </div>
                </Link>
                <Link to="/meat">
                    <div className="itemCard">
                        <img className="img" src="https://t3.ftcdn.net/jpg/06/66/04/40/360_F_666044026_nKobnVEmUSCWCgTfr4NniUZ1E4AQ8Vn6.jpg" />
                        <h4 className="img-product">Meat And seafood</h4>
                    </div>
                </Link>
            </div>

        </div>
    )
}
export default Body;