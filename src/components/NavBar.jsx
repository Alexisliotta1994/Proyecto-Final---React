import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import categories from '../mockdata/categories.json';

function NavBar() {
    return (
        <div className="bg-dark text-white p-3" style={{"height": "100vh", "width": 250, "minWidth": 250}}>
            <div className="mb-4 d-flex align-items-center justify-content-between">
                <Link to={'/'}><strong className="fs-4">CompuStar</strong></Link>
                <Link to={'/checkout'}>
                    <CartWidget />
                </Link>
            </div>
            {categories.map((category) => (
                <Link to={`/category/${category.id}`} className="btn btn-light w-100 mb-2" key={category.id}>
                    {category.name}
                </Link>
            ))}
        </div>
    )
}

export default NavBar;