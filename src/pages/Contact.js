import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../App";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const {siteName, setSiteName} = useContext(AppContext);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_j598x3b', 'template_qlvtvfm', form.current, {
            publicKey: 'CuvXEyY2LSkLHbony',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                e.target.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };
    
    return(
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
                                    <div className="mb-3"><input className="form-control" type="text" id="name" name="from_name" placeholder="Full name"/></div>
                                    <div className="mb-3"><input className="form-control" type="email" id="email" name="user_email" placeholder="Email address"/></div>
                                    <div className="mb-3"><input className="form-control" type="text" id="subject" name="subject" placeholder="Subject"/></div>
                                    <div className="mb-3"><textarea className="form-control" id="message-1" name="message" rows="6" placeholder="Message"></textarea></div>
                                    <div><button className="btn btn-secondary d-block w-100" type="submit">Send </button></div>
                                </form>
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
