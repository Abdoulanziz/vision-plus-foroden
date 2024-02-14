import { NavLink } from "react-router-dom";

export default function Navbar() {
    
    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top navbar-shrink py-3 navbar-light" id="mainNav">
                <div className="container d-flex justify-content-between align-items-center">

                    <div className="col">
                    <a href="/" className="navbar-brand">
                        <img src="assets/img/logo/vision-plus-logo.svg" alt="Logo" className="navbar-logo" />
                        <span></span>
                    </a>
                    </div>

                    <div className="col-auto">
                        <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#menuModal">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse justify-content-center" id="navcol-1">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/insights">Founders' Insights</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/concepts">Business Concepts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/faqs">FAQs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <NavLink className="btn btn-secondary navbar-btn" role="button" to="/">Featured Projects</NavLink>
                    </div>
                </div>
            </nav>

            <div className="modal fade" id="menuModal" tabIndex="-1" role="dialog" aria-labelledby="menuModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-top" role="document" style={{margin: "0", height: "100vh"}}>
                    <div className="modal-content" style={{height: "100%", border: "none"}}>
                        <div className="modal-header">
                            <a href="/" className="navbar-brand">
                                <img src="assets/img/logo/vision-plus-logo.svg" alt="Logo" className="navbar-logo" />
                                <span></span>
                            </a>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="navbar-nav mx-auto text-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link" data-dismiss="modal" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/insights">Founders' Insights</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/concepts">Business Concepts</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/faqs">FAQs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <NavLink className="btn btn-secondary navbar-btn" role="button" to="/">Featured Projects</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}