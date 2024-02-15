import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function Concepts() {
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
                                <a className="nav-link" href="">All Concepts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="">Featured</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Innovation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Precision Agric</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Marketing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Gold Mining</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Others</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 mx-auto business-concept-container" style={{maxWidth: "900px"}}>
                        <div className="col mb-5 business-concept-img-wrapper"><img className="rounded img-fluid business-concept-img" src="assets/img/illustrations/agric.png" style={{blockSize: "300px", inlineSize: "300px"}}/></div>
                        <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                            <div>
                                <h5 className="fs-3 fw-bold mb-4">Agriculture & Food Sector</h5>
                                <p className="text-muted mb-4">Reinventing Traditional Industries.</p><Link className="fw-bold btn btn-outline-secondary" to="/concepts/concept-01">Learn more&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right fs-3">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <line x1="15" y1="16" x2="19" y2="12"></line>
                                        <line x1="15" y1="8" x2="19" y2="12"></line>
                                    </svg></Link>
                            </div>
                        </div>
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
                    <div className="row row-cols-1 row-cols-md-2 mx-auto business-concept-container" style={{maxWidth: "900px"}}>
                        <div className="col mb-5 business-concept-img-wrapper"><img className="rounded img-fluid business-concept-img" src="assets/img/illustrations/fashion.png" style={{blockSize: "300px", inlineSize: "300px"}}/></div>
                        <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                            <div>
                                <h5 className="fs-3 fw-bold mb-4">Fashion & Clothing</h5>
                                <p className="text-muted mb-4">Balancing Profit and Social Impact.</p><Link className="fw-bold btn btn-outline-secondary" to="/concepts/concept-03">Learn more&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right fs-3">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <line x1="15" y1="16" x2="19" y2="12"></line>
                                        <line x1="15" y1="8" x2="19" y2="12"></line>
                                    </svg></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 mx-auto business-concept-container" style={{maxWidth: "900px"}}>
                        <div className="col order-md-last mb-5 business-concept-img-wrapper"><img className="rounded img-fluid business-concept-img" src="assets/img/illustrations/energy.png" style={{blockSize: "300px", inlineSize: "300px"}}/></div>
                        <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                            <div className="ms-md-3">
                                <h5 className="fs-3 fw-bold mb-4">Green Hydrogen Industry</h5>
                                <p className="text-muted mb-4">Reinventing Traditional Industries.</p><Link className="fw-bold btn btn-outline-secondary" to="/concepts/concept-04">Learn more&nbsp;
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

            <section className="py-4 py-xl-5 how-to-reach-us" style={{backgroundColor: "#ffb900"}}>
                <div className="container" style={{backgroundColor: "#ffd200", borderRadius: "9px"}}>
                    <div className="container-inner text-dark border border-0 border-secondary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5" style={{borderRadius: ".6rem"}}>
                        <div className="pb-2 pb-lg-1">
                            <h2 className="fw-bold text-dark mb-2">Want to reach us?</h2>
                            <p className="mb-0">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="my-2"><a className="btn btn-light fs-5 py-2 px-4" role="button" href="/contact">Contact us</a></div>
                    </div>
                </div>
            </section>
        </>
    )
}