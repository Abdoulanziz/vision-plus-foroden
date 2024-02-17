import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function ConceptsDecisionMaking() {
    const {siteName, setSiteName} = useContext(AppContext);
    
    return(
        <>
            <header className="py-5 business-concepts-header">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6 order-2 order-lg-1">
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center text-lg-start mb-5 mb-lg-0 text-text-content">
                            <h1 className="display-4 fw-bold mb-3 text-dark">Explore our super Business Concepts.</h1>
                            <p className="fs-5 mb-4 text-dark">Our team is ready to empower progress and inspire excellence.</p>
                            <Link className="btn btn-lg bg-secondary me-3" to="#business-concepts">Explore Now</Link>
                        </div>
                    </div>
                </div>
            </header>
            <section className="py-5" style={{backgroundColor: "#fff"}} id="business-concepts">
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-secondary mb-2">Business Concepts</p>
                            <h3 className="fw-bold">Explore our business concepts</h3>
                        </div>
                    </div>
                    <div className="mt-5 mb-5 d-flex justify-content-center">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link className="nav-link" to="/concepts">All Concepts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/concepts/featured">Featured</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/concepts/agriculture">Agriculture</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/concepts/decision-making">Decision making</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/concepts/fashion">Fashion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/concepts/clean-energy">Clean Energy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 mx-auto business-concept-container" style={{maxWidth: "900px"}}>
                        <div className="col order-md-last mb-5 business-concept-img-wrapper"><img className="rounded img-fluid business-concept-img" src="assets/img/illustrations/decision.png" style={{blockSize: "300px", inlineSize: "300px"}}/></div>
                        <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                            <div className="ms-md-3">
                                <h5 className="fs-3 fw-bold mb-4">Decision Making</h5>
                                <p className="text-muted mb-4">Embracing Flexibility in Modern Work.</p><Link className="fw-bold btn btn-outline-secondary" to="/concepts/concept-02">Learn more&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right fs-3">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <line x1="15" y1="16" x2="19" y2="12"></line>
                                        <line x1="15" y1="8" x2="19" y2="12"></line>
                                    </svg></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}