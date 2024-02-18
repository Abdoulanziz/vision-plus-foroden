import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function Faqs() {
    const {siteName, setSiteName} = useContext(AppContext);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <>
            <section className="mt-5 py-5" style={{backgroundColor: "#ffb900"}}>
                <div className="container" style={{borderRadius: "9px", backgroundColor: "#ffb900", paddingBlock: "12px" }}>
                    <h2 className="mb-5">Frequently Asked Questions (FAQs)</h2>
                    
                    {/* <h3>#1 General Questions</h3> */}
                    <div className="accordion text-muted" role="tablist" id="accordion-1">
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">
                                    What is foroden.com?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>Foroden is a platform that serves as the starting point for our future holding company, which will encompass subsidiaries in various business concepts featured on our platform.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">
                                    What types of business concepts are featured on Foroden?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>Foroden features a diverse range of business concepts across different industries, including technology, finance, healthcare, sustainability, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">
                                    How does Foroden help in realizing business concepts?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>Foroden aims for realizing its business concepts by getting help from talented individuals, experienced professionals, and well-established businesses in relevant fields.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-4" aria-expanded="false" aria-controls="accordion-1 .item-4">
                                    Who is the target audience for Foroden?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse item-4" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>Our target audience includes experienced professionals, talented individuals, and well-established businesses in relevant fields who are interested in collaborating and partnering with us to realize innovative business concepts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-5" aria-expanded="false" aria-controls="accordion-1 .item-5">
                                    How can I get involved with Foroden?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse item-5" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>There are several ways to get involved with Foroden, including exploring our featured business concepts, joining our network of professionals, attending events and webinars, and contacting us directly for partnership opportunities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-6" aria-expanded="false" aria-controls="accordion-1 .item-6">
                                    What is the process for submitting a request for collaboration in a business concept with Foroden?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse item-6" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>If you are interested in collaboration with Foroden in a business concept, you can reach out to us through our contact form or email. Our team will review your request and assess its potential for collaboration or partnership.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-7" aria-expanded="false" aria-controls="accordion-1 .item-7">
                                    Are there any fees or costs associated with participating in Foroden.com?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse item-7" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>Foroden does not charge any fees for participation. However, there may be costs associated with specific collaboration or partnership opportunities, which will be discussed and agreed upon on a case-by-case basis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-8" aria-expanded="false" aria-controls="accordion-1 .item-8">
                                    How can I stay updated on news and events related to Foroden.com?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse item-8" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>You can stay updated on news and events related to Foroden by subscribing to our newsletter, following us on social media, or visiting our website regularly for updates and announcements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-9" aria-expanded="false" aria-controls="accordion-1 .item-9">
                                    What is the timeline for realizing business concepts featured on Foroden.com?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse item-9" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>The timeline for realizing business concepts may vary depending on factors such as complexity, resources, and collaboration opportunities. We strive to move projects forward in a meaningful and timely manner, prioritizing quality and sustainability.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-10" aria-expanded="false" aria-controls="accordion-1 .item-10">
                                    How can I contact Foroden for further inquiries or partnership opportunities?
                                </button>
                            </h2>
                            <div className="accordion-collapse collapse item-10" role="tabpanel" data-bs-parent="#accordion-1">
                                <div className="accordion-body">
                                    <p>You can contact Foroden through our contact form on the website or by sending us an email at info@foroden.com. Our team will respond to your inquiries promptly and provide assistance as needed.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section className="py-5">
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
            </section> */}

            <section className="py-5 bg-light">
                <div className="container" style={{borderRadius: "9px", backgroundColor: "#fff", padding: "24px", color: "red !important" }}>

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
        </>
    )
}