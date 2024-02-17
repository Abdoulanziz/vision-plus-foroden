import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const { siteName, setSiteName } = useContext(AppContext);
    const [isSending, setIsSending] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isAccepted) {
            alert("Please accept the terms and conditions and privacy policy.");
            return;
        }

        setIsSending(true);

        emailjs
            .sendForm('service_j598x3b', 'template_qlvtvfm', form.current, {
                publicKey: 'CuvXEyY2LSkLHbony',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    setIsSubscribed(false);
                    setIsAccepted(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            )
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <>
            <section className="py-5 mt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 className="display-6 fw-bold mb-4">Got any <span className="underline">questions</span>?</h2>
                            <p className="text-muted">Our team is always here to help. Send us a message and we'll get back to you shortly.</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div>
                                <form className="p-3 p-xl-4" data-bs-theme="light" ref={form} onSubmit={sendEmail}>
                                    <div className="mb-3"><input className="form-control" type="text" id="name" name="from_name" placeholder="Full name"  required/></div>
                                    <div className="mb-3"><input className="form-control" type="email" id="email" name="user_email" placeholder="Email address"  required/></div>
                                    <div className="mb-3"><input className="form-control" type="text" id="subject" name="subject" placeholder="Subject" required/></div>
                                    <div className="mb-3"><textarea className="form-control" id="message-1" name="message" rows="6" placeholder="Message" required></textarea></div>
                                    <div className="mb-3 form-check">
                                        <input className="form-check-input" type="checkbox" id="terms" checked={isAccepted} onChange={() => setIsAccepted(!isAccepted)} required />
                                        <label className="form-check-label" htmlFor="terms">I accept the <Link to="/terms-and-conditions" style={{color: "#1da1f2"}}>Terms and Conditions</Link> and <Link to="/privacy-policy" style={{color: "#1da1f2"}}>Privacy Policy</Link>.</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input className="form-check-input" type="checkbox" id="newsletter" checked={isSubscribed} onChange={() => setIsSubscribed(!isSubscribed)} />
                                        <label className="form-check-label" htmlFor="newsletter">I want to receive the newsletter.</label>
                                    </div>
                                    {isSending ? (
                                        <button className="btn btn-secondary d-block w-100" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Sending...
                                        </button>
                                    ) : (
                                        <button className="btn btn-secondary d-block w-100" type="submit">Send</button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}