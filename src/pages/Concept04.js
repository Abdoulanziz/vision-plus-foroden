import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function Concept04() {
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
                            <h2>Green Hydrogen Industry</h2>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Assembling a Talented Team:</h3>
                            <p>When assembling a team for the Green Hydrogen sector, we prioritize specific expertise and experience, including:</p>
                            <ol>
                                <li>Chemical Engineering</li>
                                <li>Renewable Energy</li>
                                <li>Electrochemistry</li>
                                <li>Business Development</li>
                                <li>Project Management</li>
                                <li>Policy and Regulation</li>
                                <li>Research and Development</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Industry Trends and Growth Drivers:</h3>
                            <p>The Green Hydrogen industry is experiencing significant growth and innovation driven by:</p>
                            <ol>
                                <li>Climate Change Mitigation</li>
                                <li>Renewable Energy Integration</li>
                                <li>Technological Advancements</li>
                                <li>Infrastructure Development</li>
                                <li>Industrial Applications</li>
                                <li>International Collaboration</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Strategic Sector Selection:</h3>
                            <p>When assessing which sectors to focus on and enter within the Green Hydrogen industry, key factors considered include:</p>
                            <ol>
                                <li>Market Demand</li>
                                <li>Technological Feasibility</li>
                                <li>Policy and Regulatory Landscape</li>
                                <li>Economic Viability</li>
                                <li>Carbon Footprint Reduction Potential</li>
                                <li>Supply Chain Integration</li>
                                <li>Market Growth Trajectory</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Our Role and Impact:</h3>
                            <p>We envision our role within the Green Hydrogen sector as multifaceted, with a focus on innovation, collaboration, and sustainability. Our goals include:</p>
                            <ul>
                                <li>Developing accessible and scalable Green Hydrogen solutions</li>
                                <li>Pioneering the integration of fuel cells into various applications</li>
                                <li>Driving technological innovation and fostering industry partnerships</li>
                                <li>Advocating for supportive policies to enable widespread adoption</li>
                            </ul>
                            <p>Through our efforts, we aim to contribute to a cleaner, greener future while creating value for stakeholders and society as a whole.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}