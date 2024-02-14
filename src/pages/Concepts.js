import { useContext } from "react";
import { AppContext } from "../App";

export default function Concepts() {
    const {siteName, setSiteName} = useContext(AppContext);
    return(
        <>
            <header className="py-5" style={{ height: '100vh' }}>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6 order-2 order-lg-1">
                            <div className="text-center text-md-start">
                                <div style={{maxWidth: "350px"}}>
                                    <h1 className="display-5 fw-bold mb-4">Explore our super&nbsp;<span className="underline"> business concepts</span>.</h1>
                                    <p className="text-muted my-4">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a className="btn btn-secondary btn-lg me-2" role="button" href="#">Explore Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-lg-2">
                            <div className="text-center mb-4 mb-md-0"><img className="rounded img-fluid w-100 fit-cover" style={{minHeight: "300px"}} src="assets/img/illustrations/startup.svg"/></div>
                        </div>
                    </div>

                </div>
            </header>
            <section className="py-5">
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
                    <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: "900px"}}>
                        <div className="col mb-5"><img className="rounded img-fluid" src="assets/img/illustrations/data-management.svg"/></div>
                        <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                            <div>
                                <h5 className="fs-3 fw-bold mb-4">Disruptive Innovations</h5>
                                <p className="text-muted mb-4">Reinventing Traditional Industries.</p><a className="fw-bold btn btn-outline-secondary" href="#">Learn more&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right fs-3">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <line x1="15" y1="16" x2="19" y2="12"></line>
                                        <line x1="15" y1="8" x2="19" y2="12"></line>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: "900px"}}>
                        <div className="col order-md-last mb-5"><img className="rounded img-fluid" src="assets/img/illustrations/javascript.svg"/></div>
                        <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                            <div className="ms-md-3">
                                <h5 className="fs-3 fw-bold mb-4">The Gig Economy</h5>
                                <p className="text-muted mb-4">Embracing Flexibility in Modern Work.</p><a className="fw-bold btn btn-outline-secondary" href="#">Learn more&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right fs-3">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <line x1="15" y1="16" x2="19" y2="12"></line>
                                        <line x1="15" y1="8" x2="19" y2="12"></line>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: "900px"}}>
                        <div className="col mb-5"><img className="rounded img-fluid" src="assets/img/illustrations/report.svg"/></div>
                        <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                            <div>
                                <h5 className="fs-3 fw-bold mb-4">Sustainable Business Models</h5>
                                <p className="text-muted mb-4">Balancing Profit and Social Impact.</p><a className="fw-bold btn btn-outline-secondary" href="#">Learn more&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right fs-3">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <line x1="15" y1="16" x2="19" y2="12"></line>
                                        <line x1="15" y1="8" x2="19" y2="12"></line>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4 py-xl-5">
                <div className="container">
                    <div className="text-dark bg-secondary border border-0 border-secondary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5" style={{borderRadius: ".6rem"}}>
                        <div className="pb-2 pb-lg-1">
                            <h2 className="fw-bold text-dark mb-2">Want to reach us?</h2>
                            <p className="mb-0">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="my-2"><a className="btn btn-light fs-5 py-2 px-4" role="button" href="contacts.html">Contact us</a></div>
                    </div>
                </div>
            </section>
        </>
    )
}