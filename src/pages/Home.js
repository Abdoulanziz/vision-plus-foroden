import { useContext } from "react";
import { AppContext } from "../App";

export default function Home() {
    const {siteName, setSiteName} = useContext(AppContext);
    return(
        <>
            <header className="py-5" style={{ height: '100vh' }}>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                            
                            <h1 className="display-4 fw-bold mb-3">Illuminate your path, one step at a time.</h1>

                            <p className="fs-5 text-white-50 mb-4">Metus quisque ultricies vehicula proin, magna nullam.</p>

                            <button className="btn btn-lg bg-secondary me-3">Explore More</button>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center position-relative"><img className="img-fluid" src="assets/img/illustrations/meeting.svg" alt="Meeting Illustration" style={{ maxWidth: '100%', height: 'auto' }} /></div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="bg-light">
                <div className="container py-4 py-xl-5">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-secondary mb-2">Mission & Vision</p>
                            <h2 className="fw-bold"><strong>Our Guiding Purpose</strong></h2>
                            <p className="text-muted">Our team is ready to empower progress and inspire excellence.&nbsp;</p>
                        </div>
                    </div>
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-2">
                        <div className="col">
                            <div className="card border-light border-1 d-flex justify-content-center p-4" style={{borderRadius: ".6rem"}}>
                                <div className="card-body">
                                    <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-school">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                                            <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
                                        </svg></div>
                                    <div>
                                        <h4 className="fw-bold">Mission</h4>
                                        <p className="text-muted">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-light border-1 d-flex justify-content-center p-4" style={{borderRadius: ".6rem"}}>
                                <div className="card-body">
                                    <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-school">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                                            <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
                                        </svg></div>
                                    <div>
                                        <h4 className="fw-bold">Vision</h4>
                                        <p className="text-muted">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container bg-primary-gradient py-5">
                    <div className="row">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-secondary mb-2">Business Concepts</p>
                            <h3 className="fw-bold">Learn more about our featured business concepts</h3>
                        </div>
                    </div>
                    <div className="py-5 p-lg-5">
                        <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: "900px"}}>
                            <div className="col mb-5">
                                <div className="card border-light border-1 "style={{borderRadius: ".6rem"}}>
                                    <div className="card-body px-4 py-5 px-md-5">
                                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{top: "1rem",right: "1rem",position: "absolute"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-pin-angle text-secondary">
                                                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z"></path>
                                            </svg></div>
                                        <h5 className="fw-bold card-title">Lorem ipsum dolor sit&nbsp;</h5>
                                        <p className="text-muted card-text mb-4">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><button className="btn btn-secondary" type="button">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card border-light border-1 "style={{borderRadius: ".6rem"}}>
                                    <div className="card-body px-4 py-5 px-md-5">
                                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{top: "1rem",right: "1rem",position: "absolute"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-pin-angle text-secondary">
                                                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z"></path>
                                            </svg></div>
                                        <h5 className="fw-bold card-title">Lorem ipsum dolor sit&nbsp;</h5>
                                        <p className="text-muted card-text mb-4">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><button className="btn btn-secondary" type="button">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card border-light border-1 "style={{borderRadius: ".6rem"}}>
                                    <div className="card-body px-4 py-5 px-md-5">
                                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{top: "1rem",right: "1rem",position: "absolute"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-pin-angle text-secondary">
                                                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z"></path>
                                            </svg></div>
                                        <h5 className="fw-bold card-title">Lorem ipsum dolor sit&nbsp;</h5>
                                        <p className="text-muted card-text mb-4">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><button className="btn btn-secondary" type="button">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card border-light border-1 "style={{borderRadius: ".6rem"}}>
                                    <div className="card-body px-4 py-5 px-md-5">
                                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{top: "1rem",right: "1rem",position: "absolute"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-pin-angle text-secondary">
                                                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z"></path>
                                            </svg></div>
                                        <h5 className="fw-bold card-title">Lorem ipsum dolor sit&nbsp;</h5>
                                        <p className="text-muted card-text mb-4">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><button className="btn btn-secondary" type="button">Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-5 bg-light">
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-secondary mb-2">Founders' Insights</p>
                            <h3 className="fw-bold">Learn what our founders think</h3>
                        </div>
                    </div>
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col">
                            <div className="card border-light border-1 d-flex justify-content-center p-4" style={{borderRadius: ".6rem"}}>
                                <div className="card-body">
                                    <div className="profile-img">
                                        <img src="assets/img/team/avatar5.jpg" alt="Profile Picture" className="flex-shrink-0 me-3 mb-2 fit-cover" width="70" height="70" style={{borderRadius: "13px"}} />
                                    </div>
                                    <div className="fw-normal text-secondary">John Doe</div>
                                    <div>
                                        <h4 className="fw-bold">Founder</h4>
                                        <p className="text-muted">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><button className="btn btn-secondary" type="button">Learn More&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                            </svg><br/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-light border-1 d-flex justify-content-center p-4" style={{borderRadius: ".6rem"}}>
                                <div className="card-body">
                                    <div className="profile-img">
                                        <img src="assets/img/team/avatar5.jpg" alt="Profile Picture" className="flex-shrink-0 me-3 mb-2 fit-cover" width="70" height="70" style={{borderRadius: "13px"}} />
                                    </div>
                                    <div className="fw-normal text-secondary">John Doe</div>
                                    <div>
                                        <h4 className="fw-bold">Founder</h4>
                                        <p className="text-muted">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><button className="btn btn-secondary" type="button">Learn More&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                            </svg><br/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-light border-1 d-flex justify-content-center p-4" style={{borderRadius: ".6rem"}}>
                                <div className="card-body">
                                    <div className="profile-img">
                                        <img src="assets/img/team/avatar5.jpg" alt="Profile Picture" className="flex-shrink-0 me-3 mb-2 fit-cover" width="70" height="70" style={{borderRadius: "13px"}} />
                                    </div>
                                    <div className="fw-normal text-secondary">John Doe</div>
                                    <div>
                                        <h4 className="fw-bold">Founder</h4>
                                        <p className="text-muted">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><button className="btn btn-secondary" type="button">Learn More&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                            </svg><br/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 mt-5">
                <div className="container my-5">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-secondary mb-2">Latest Posts</p>
                            <h3 className="fw-bold">Learn more from our latest posts</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Post Title 1</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Post Title 2</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Post Title 3</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Post Title 4</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Post Title 5</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Post Title 6</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-secondary mb-2">Testimonials</p>
                            <h2 className="fw-bold"><strong>What People Say About us</strong></h2>
                            <p className="text-muted">No matter the project, our team can handle it.&nbsp;</p>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
                        <div className="col mb-4">
                            <div className="d-flex flex-column align-items-center align-items-sm-start">
                                <p className="p-4" style={{borderRadius: ".6rem", backgroundColor: "#fff"}}>This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="assets/img/team/avatar2.jpg" />
                                    <div>
                                        <p className="fw-bold text-primary mb-0">John Smith</p>
                                        <p className="text-muted mb-0">CEO — VisionX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="d-flex flex-column align-items-center align-items-sm-start">
                                <p className="p-4" style={{borderRadius: ".6rem", backgroundColor: "#fff"}}>This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="assets/img/team/avatar4.jpg"/>
                                    <div>
                                        <p className="fw-bold text-primary mb-0">John Smith</p>
                                        <p className="text-muted mb-0">CMO — Foroden</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="d-flex flex-column align-items-center align-items-sm-start">
                                <p className="p-4" style={{borderRadius: ".6rem", backgroundColor: "#fff"}}>This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="assets/img/team/avatar5.jpg" />
                                    <div>
                                        <p className="fw-bold text-primary mb-0">John Smith</p>
                                        <p className="text-muted mb-0">CEO — Coire Live</p>
                                    </div>
                                </div>
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