import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

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
                                <h2>Top 10 Takeaways From FF100 Dubai</h2>
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


            <section className="bg-light py-5 latest-posts">
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
                                <img src="assets/img/blogs/challenges.png" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title article-card-title-overflow">Navigating Challenges in Entrepreneurship: Lessons Learned</h5>
                                    <p className="card-text article-card-text-overflow">Embarking on the entrepreneurial journey is a thrilling yet daunting endeavor, marked by a series of challenges and obstacles that test one's resilience and determination. Through my own experiences and reflections, I've encountered various challenges in entrepreneurship and gleaned valuable lessons along the way. In this article, I'll share some of these lessons learned and insights gained from navigating the often turbulent waters of entrepreneurship.</p>
                                    <Link to="/articles/article-03" className="btn btn-secondary">Read More</Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/blog.jpg" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title article-card-title-overflow">Navigating Challenges in Entrepreneurship: Lessons Learned</h5>
                                    <p className="card-text article-card-text-overflow">Embarking on the entrepreneurial journey is a thrilling yet daunting endeavor, marked by a series of challenges and obstacles that test one's resilience and determination. Through my own experiences and reflections, I've encountered various challenges in entrepreneurship and gleaned valuable lessons along the way. In this article, I'll share some of these lessons learned and insights gained from navigating the often turbulent waters of entrepreneurship.</p>
                                    <Link to="/articles/article-02" className="btn btn-secondary">Read More</Link>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-md-4 mb-4">
                            <div className="card border-light border-1" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/blogs/ai.png" className="card-img-top" alt="Blog Image" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title article-card-title-overflow">Trends and Opportunities in Emerging Industries</h5>
                                    <p className="card-text article-card-text-overflow">In today's rapidly evolving business landscape, emerging industries present exciting opportunities for entrepreneurs and innovators to capitalize on new trends, technologies, and consumer preferences. From renewable energy and biotechnology to artificial intelligence and sustainability, emerging industries are reshaping markets and driving economic growth worldwide. In this article, we'll explore some of the key trends and opportunities in emerging industries and discuss strategies for entrepreneurs to capitalize on these trends effectively.
                                    </p>
                                    <Link to="/articles/article-01" className="btn btn-secondary">Read More</Link>
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
                        <div className="col-md-6 mb-4">
                            <div className="embed-responsive embed-responsive-16by9 mobile-video">
                                <iframe width="100%" height="400" className="embed-responsive-item" src="https://www.youtube.com/embed/R_CsQIa2Iz4" title="February 16, 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{borderRadius: "13px"}}></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="transcription-summary bg-light p-3" style={{borderRadius: "13px"}}>
                                <h3>Welcome to Foroden.</h3>
                                <p>This is a dynamic platform committed to turning visionary ideas into tangible realities through collaboration and partnership.</p>
                                <p>Join us as we embark on a journey of creativity and impact.</p>
                                <p>Our vision is to be the focal point of positive change across industries, fostering a culture of innovation and collaboration.</p>
                                <p>Our mission is to turn visionary ideas into tangible realities through collaboration.</p>
                                <p>Throughout history, visionaries have transformed the world with their ideas, inspiring us to dream big and persevere.</p>
                                <p>Every journey begins with a single step.</p>
                                <p>Dream boldly, collaborate fearlessly, and join us in creating a better future.</p>
                                <p>Together, we can turn ideas into reality and drive meaningful change.</p>
                                <p>Sign up now for updates, explore our concepts, and connect with fellow innovators.</p>
                                <p>Thank you for being part of us.</p>
                                <p>Let's pulse forward together, one idea at a time.</p>
                            </div>

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
                                <img src="assets/img/books/the-lean-startup.png" className="card-img-top book-img" alt="Book Title 1" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title">"The Lean Startup" by Eric Ries</h5>
                                    <p className="card-text card-text-overflow">In this groundbreaking book, Eric Ries introduces the concept of the lean startup methodology, which emphasizes rapid experimentation, validated learning, and iterative product development. As we strive to innovate and iterate on our business concepts, this book provides invaluable insights into how startups can navigate uncertainty and achieve sustainable growth.</p>
                                    <a href="https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898" className="btn btn-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-light border-1 mb-4" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/books/master-of-scale.png" className="card-img-top book-img" alt="Book Title 2" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title">"Masters of Scale" hosted by Reid Hoffman</h5>
                                    <p className="card-text card-text-overflow">"Masters of Scale" is a captivating podcast hosted by LinkedIn co-founder Reid Hoffman, featuring interviews with some of the world's most successful entrepreneurs and business leaders. Through candid conversations and insightful anecdotes, each episode offers actionable advice and lessons learned on scaling businesses, fostering innovation, and driving meaningful impact.</p>
                                    <a href="https://mastersofscale.com/" className="btn btn-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-light border-1 mb-4" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/books/great-leaders.png" className="card-img-top book-img" alt="Book Title 3" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title">"How Great Leaders Inspire Action" by Simon Sinek</h5>
                                    <p className="card-text card-text-overflow" style={{maxHeight: "100px"}}>In this inspiring TED Talk, renowned author and speaker Simon Sinek explores the concept of "The Golden Circle" and discusses why some leaders and organizations are able to inspire action and drive change while others struggle to do so. As we strive to build a community of visionary leaders and changemakers, this talk offers valuable insights into the power of purpose-driven leadership and communication.</p>
                                    <a href="https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action" className="btn btn-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-light border-1 mb-4" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/books/missing.png" className="card-img-top book-img" alt="Book Title 3" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title">"Design Thinking for Innovation" by IDEO U</h5>
                                    <p className="card-text card-text-overflow">IDEO U's "Design Thinking for Innovation" course offers a comprehensive introduction to design thinking principles and methodologies, providing practical tools and techniques for fostering creativity, collaboration, and problem-solving. As we embark on our journey to innovate and realize our business concepts, this course equips us with the mindset and skillset needed to tackle...</p>
                                    <a href="https://www.ideou.com/products/design-thinking-for-innovation" className="btn btn-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-light border-1 mb-4" style={{borderRadius: ".6rem"}}>
                                <img src="assets/img/books/the-state-of-innovation.png" className="card-img-top book-img" alt="Book Title 3" style={{borderRadius: ".6rem .6rem 0 0"}} />
                                <div className="card-body">
                                    <h5 className="card-title">"The State of Innovation" by McKinsey & Company</h5>
                                    <p className="card-text card-text-overflow">McKinsey & Company's annual "State of Innovation" report provides a comprehensive overview of global trends, emerging technologies, and disruptive innovations shaping various industries. By staying informed about the latest insights and developments in innovation, we can identify new opportunities, anticipate market shifts, and stay ahead of the curve in our pursuit of sustainable solutions and impact.</p>
                                    <a href="https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/the-state-of-innovation-2022" className="btn btn-secondary">Learn More</a>
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