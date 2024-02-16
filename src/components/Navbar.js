import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top navbar-shrink py-3 navbar-light" id="mainNav">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="col">
                        <a href="/" className="navbar-brand">
                            <img src="assets/img/logo/foroden-logo.svg" alt="Logo" className="navbar-logo" />
                            <span></span>
                        </a>
                    </div>
                    <div className="col-auto d-md-none">
                        <button className="navbar-toggler" type="button" onClick={toggleModal}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-center" id="navcol-1">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/insights">Founders' Insights</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/concepts">Business Concepts</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/faqs">FAQs</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <NavLink className="btn btn-secondary navbar-btn" role="button" to="/concepts">Featured Projects</NavLink>
                    </div>
                </div>
            </nav>
            {showModal && (
                <div className="navbar-modal modal fade show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="navbar-modal-dialog modal-dialog modal-dialog-top" role="document" style={{ margin: "0", height: "100vh" }}>
                        <div className="navbar-modal-content modal-content" style={{ height: "100%", border: "none" }}>
                            <div className="modal-header">
                                <a href="/" className="navbar-brand">
                                    <img src="assets/img/logo/foroden-logo.svg" alt="Logo" className="navbar-logo" />
                                    <span></span>
                                </a>
                                <button type="button" className="btn-close" onClick={toggleModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ul className="navbar-nav mx-auto text-center">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/" onClick={toggleModal}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/insights" onClick={toggleModal}>Founders' Insights</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/concepts" onClick={toggleModal}>Business Concepts</NavLink>
                                    </li>
                                    {/* <li className="nav-item">
                                        <NavLink className="nav-link" to="/faqs" onClick={toggleModal}>FAQs</NavLink>
                                    </li> */}
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact" onClick={toggleModal}>Contact</NavLink>
                                    </li>
                                    <NavLink className="btn btn-secondary navbar-btn" role="button" to="/">Featured Projects</NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}