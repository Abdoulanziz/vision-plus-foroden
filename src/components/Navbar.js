import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-shrink py-3" id="mainNav">
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img style={{minHeight: ""}} src="assets/img/logo/vision-plus-logo.svg" alt="VisionPlus logo" />
                </NavLink>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/insights">Founders' Insights</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/concepts">Business Concepts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/faqs">FAQs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <NavLink className="btn btn-secondary navbar-btn" role="button" to="/signup">Featured Projects</NavLink>
                </div>
            </div>
        </nav>
    )
}
