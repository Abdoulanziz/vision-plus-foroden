import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function About() {
    const {siteName, setSiteName} = useContext(AppContext);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <>
            <section className="py-5">
                <div className="container mt-5" style={{borderInline: "1px solid #f3f3f3", backgroundColor: "#fff", paddingBlock: "12px"}}>
                    <div className="row">
                        <div className="col">
                            <h2>About Us</h2>
                            <p>Welcome to Foroden, your gateway to business success and innovation. Our platform serves as the nucleus for our holding company's future endeavors, offering a curated selection of business concepts primed for realization. With a focus on fostering collaboration, driving innovation, and facilitating strategic partnerships, we are committed to bringing our visionary ideas to life through cost-effective and timely execution.</p>
                            <p>Driven by a relentless pursuit of excellence and a passion for innovation, Foroden stands at the forefront of industry transformation. Our vision is to establish a dynamic ecosystem where talented individuals and strategic partners unite to actualize business concepts under our main holding, ensuring successful implementation and sustainable growth.</p>
                            <p>Our mission is clear: to establish mutual understanding and connection with our audience, providing a platform to prepare the prerequisites necessary for realizing business concepts across industries. We address pain points within each concept, offering innovative solutions and transparent insights to foster trust and collaboration with potential partners.</p>
                            <p>At Foroden, we actively seek experienced individuals, talented professionals, and established businesses as strategic partners to join us in our journey towards business success. Together, we aim to redefine industry standards, drive meaningful change, and create a brighter future for all.</p>
                            <p>Join us on our quest to foster innovation, realize concepts, and pave the way to business success. Welcome to Foroden.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}