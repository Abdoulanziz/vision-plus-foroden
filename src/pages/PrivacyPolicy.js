import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function Collaborate() {
    const {siteName, setSiteName} = useContext(AppContext);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <>
            <section className="py-5 bg-light">
                <div className="container mt-5" style={{border: "1px solid #f3f3f3", backgroundColor: "#fff", paddingBlock: "12px"}}>
                    <div className="row">
                        <div className="col">
                            <h2>Privacy Policy</h2>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <p>This Privacy Policy describes how Foroden ("we," "us," or "our") collects, uses, and discloses personal information when you use our website or platform ("Service").</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Information We Collect</h3>
                            <p>We may collect personal information from you when you use our Service, including:</p>
                            <ol>
                                <li><strong>Information You Provide:</strong> We may collect information that you voluntarily provide to us, such as your name, email address, contact details, and any other information you choose to share when contacting us or using our Service.</li>
                                <li><strong>Automatically Collected Information:</strong> We may automatically collect certain information about your device and usage of our Service, including your IP address, browser type, operating system, and browsing activity. This information may be collected using cookies, web beacons, and other tracking technologies.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>How We Use Your Information</h3>
                            <p>We may use the personal information we collect for various purposes, including to:</p>
                            <ul>
                                <li>Provide, maintain, and improve our Service</li>
                                <li>Respond to your inquiries, requests, and feedback</li>
                                <li>Communicate with you about our products, services, and promotions</li>
                                <li>Personalize and tailor your experience on our Service</li>
                                <li>Analyze trends, usage, and activities on our Service</li>
                                <li>Detect, prevent, and address technical issues or security breaches</li>
                                <li>Comply with legal obligations and enforce our policies</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Disclosure of Your Information</h3>
                            <p>We may share your personal information with third parties in the following circumstances:</p>
                            <ul>
                                <li>With service providers, contractors, and other third parties who assist us in operating our Service, conducting our business, or providing services on our behalf</li>
                                <li>With your consent or at your direction</li>
                                <li>In response to a valid legal request, court order, or government investigation</li>
                                <li>To protect our rights, property, or safety, or the rights, property, or safety of others</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Data Security</h3>
                            <p>We take reasonable measures to protect the security of your personal information and prevent unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your data.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Your Choices and Rights</h3>
                            <p>You may have certain rights and choices regarding the personal information we collect about you. These may include the right to access, correct, or delete your personal information, as well as the right to object to certain processing activities. Please contact us using the information provided below to exercise your rights.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Changes to This Privacy Policy</h3>
                            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy on this page.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Contact Us</h3>
                            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at [info@foroden.com].</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}