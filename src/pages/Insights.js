import { useContext } from "react";
import { AppContext } from "../App";

export default function Insights() {
    const {siteName, setSiteName} = useContext(AppContext);
    return(
        <>
            <header className="py-5" style={{ height: '50vh' }}>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12">
                            <div className="text-center mt-5">
                                <h1>Founders Insights</h1>
                                <h2>Insider Insights from the Biggest Names in Tech.</h2>
                            </div>
                            <div className="mt-5 d-flex justify-content-center">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="">All Posts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Insights</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Reports</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Angel Investing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Startup Stories</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Startups to Watch</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <section className="" style={{backgroundColor: "#00a98f"}}>
                <div className="container py-5">
                    <div className="row">
                        <div className="connecting-founders-item-content">
                            <div className="featured-post-details">
                                <h2>10 Top Takeaways From FF100 Dubai</h2>
                            </div>
                            <p>Read the key takeaways from FF100 Dubai 2024, covering VC investment, AI, talent, and more tech trends from the MENA region and beyond.</p>
                        </div>
                        <div id="insights-carousel" className="carousel carousel-dark slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#insights-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#insights-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#insights-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                <img src="assets/img/sessions/session.webp" className="d-block w-100" alt="..."  style={{borderRadius: ".6rem"}} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                <img src="assets/img/sessions/session.webp" className="d-block w-100" alt="..."  style={{borderRadius: ".6rem"}} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src="assets/img/sessions/session.webp" className="d-block w-100" alt="..."  style={{borderRadius: ".6rem"}} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#insights-carousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#insights-carousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-light py-5">
                <div className="container my-5">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-secondary mb-2">Latest Articles</p>
                            <h3 className="fw-bold">Learn more from our insightful articles</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Article Title 1</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Article Title 2</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Article Title 3</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Article Title 4</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Article Title 5</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-secondary">Article Title 6</h5>
                                    <p className="card-text">This is a sample text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5" style={{backgroundColor: "#ffb900"}}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold mb-2">Video Messages</p>
                            <h3 className="fw-bold">Learn more from our founders</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/video-id" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>Transcript or summary of the video goes here.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-secondary mb-2">Founders' Recommendations</p>
                            <h3 className="fw-bold">Books our founders recommend for further reading</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-light border-1 mb-4" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/books/book.png" className="card-img-top" alt="Book Title 1" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title">Book Title 1</h5>
                                    <p className="card-text">Description of the book goes here. More details about the book can be added here, such as the author, publication date, and genre.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-light border-1 mb-4" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/books/book.png" className="card-img-top" alt="Book Title 2" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title">Book Title 2</h5>
                                    <p className="card-text">Description of the book goes here. More details about the book can be added here, such as the author, publication date, and genre.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-light border-1 mb-4" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/books/book.png" className="card-img-top" alt="Book Title 3" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title">Book Title 3</h5>
                                    <p className="card-text">Description of the book goes here. More details about the book can be added here, such as the author, publication date, and genre.</p>
                                    <a href="#" className="btn btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <p className="fw-bold text-secondary mb-2">Q&A Sessions</p>
                            <h3 className="fw-bold">Submit your Qs for the upcoming sessions</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="question">Your Question</label>
                                    <textarea className="form-control" id="question" rows="3" required ></textarea>
                                </div>
                                <button type="submit" className="btn btn-secondary mt-2">Submit Question</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-4 py-xl-5" style={{backgroundColor: "#ffb900"}}>
                <div className="container" style={{backgroundColor: "#ffd200", borderRadius: "9px"}}>
                    <div className="text-dark border border-0 border-secondary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5" style={{borderRadius: ".6rem"}}>
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