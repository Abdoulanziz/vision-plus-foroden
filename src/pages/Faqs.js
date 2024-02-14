import { useContext } from "react";
import { AppContext } from "../App";

export default function Faqs() {
    const {siteName, setSiteName} = useContext(AppContext);
    return(
        <>
            <section className="mt-5 py-5 bg-light">
                <div className="container py-5">
                <h2 className="mb-5">Frequently Asked Questions (FAQs)</h2>
                
                <h3>#3 General Questions</h3>
                <div className="accordion text-muted" role="tablist" id="accordion-1">
                    <div className="accordion-item">
                        <h2 className="accordion-header" role="tab"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">What is VisionPlus?</button></h2>
                        <div className="accordion-collapse collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                            <div className="accordion-body">
                                <p>VisionPlus is a comprehensive platform dedicated to providing valuable insights, resources, and support for entrepreneurs, startups, and small businesses. </p>
                                <p className="mb-0">We offer a wide range of services, including business concept development, mentorship, and access to a network of industry experts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">How can VisionPlus help me as an entrepreneur?</button></h2>
                        <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                            <div className="accordion-body">
                                <p className="mb-0">VisionPlus aims to empower entrepreneurs by offering practical guidance, educational content, and networking opportunities. Whether you're just starting your entrepreneurial journey or looking to grow your existing business, VisionPlus provides the tools and resources you need to succeed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">What type of content does VisionPlus offer?</button></h2>
                        <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                            <div className="accordion-body">
                                <p className="mb-0">At VisionPlus, we offer a diverse range of content tailored to the needs of entrepreneurs. This includes articles, guides, case studies, webinars, and interviews with successful founders. Our content covers various topics such as business strategy, marketing, finance, technology, and leadership.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">

                <h3 className="mt-5">#2 Technical Questions</h3>
                <div className="accordion" id="technicalQuestions">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="question2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#answer2" aria-expanded="false" aria-controls="answer2">
                        I have a question that's not listed here. How can I get help?
                    </button>
                    </h2>
                    <div id="answer2" className="accordion-collapse collapse" aria-labelledby="question2" data-bs-parent="#technicalQuestions">
                    <div className="accordion-body">
                       <p className="mb-0">If you have a question that's not listed in our FAQs, you can search through our database using the form below or reach out to our support team for assistance. You can contact us through our website's contact form. We're here to help you navigate your entrepreneurial journey and address any concerns you may have.</p>
                       </div>
                    </div>
                </div>
                </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">

                <h3>Could not find your question?</h3>
                <div className="mt-5">
                    <div className="input-group">
                        <input type="text" className="form-control mb-2" placeholder="Search FAQ" />
                        <button type="submit" className="btn btn-secondary mb-2" style={{borderRadius: "9px", marginInlineStart: ".4rem"}}>
                            Search
                        </button>
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