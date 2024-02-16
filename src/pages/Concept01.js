import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function Concept01() {
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
                            <h2>Agricultural and Food Supply Chain</h2>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Empowering Local Farmers:</h3>
                            <p>Our platform is driven by a commitment to fostering sustainable agriculture, empowering local farmers, and promoting economic development in underserved regions. By focusing on Africa and South America, we aim to bridge gaps in the supply chain and connect farmers directly with markets.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Key Objectives:</h3>
                            <ol>
                                <li><strong>Strengthening Local Farmers:</strong> We provide farmers with access to resources, market intelligence, and value-added services to enhance productivity and competitiveness.</li>
                                <li><strong>Facilitating Market Access:</strong> Through direct connections with buyers, exporters, and distributors, we enable farmers to expand their reach and access untapped markets previously beyond their reach.</li>
                                <li><strong>Promoting Sustainability:</strong> We promote sustainable agricultural practices and ensure fair and transparent transactions that benefit both farmers and consumers.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Challenges and Opportunities:</h3>
                            <p>Establishing and managing an agricultural and food supply chain platform comes with various challenges, including logistical complexities, regulatory compliance, and technological integration. However, there are numerous opportunities for collaboration and partnership within the sector, ranging from strategic alliances with agribusinesses to partnerships with government agencies and non-profit organizations.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Our Approach:</h3>
                            <ul>
                                <li><strong>Training and Advisory Services:</strong> Tailored training programs and advisory services help farmers improve crop yields and optimize production processes.</li>
                                <li><strong>Market Access:</strong> Direct connections with buyers, exporters, and distributors enable farmers to expand their reach and access untapped markets.</li>
                                <li><strong>Technology Solutions:</strong> Technology-enabled solutions enhance efficiency and effectiveness, facilitating supply chain optimization and innovation.</li>
                                <li><strong>Sustainability Focus:</strong> We promote sustainable agricultural practices and ensure fair and transparent transactions that benefit both farmers and consumers.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Collaboration and Partnership:</h3>
                            <p>We actively seek collaboration and partnership opportunities to create a thriving ecosystem that supports the growth and prosperity of local farmers while promoting sustainable agriculture and food security worldwide. By working together with stakeholders across the supply chain, we aim to create lasting impact and drive positive change in the agricultural sector.</p>
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