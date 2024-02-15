import { useContext } from "react";
import { AppContext } from "../App";

export default function Concept02() {
    const {siteName, setSiteName} = useContext(AppContext);
    return(
        <>
            <section className="py-5 bg-light">
                <div className="container mt-5" style={{border: "1px solid #f3f3f3", backgroundColor: "#fff", paddingBlock: "12px"}}>
                    <div className="row">
                        <div className="col">
                            <h2>Decision Making</h2>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Specific Situations of Uncertainty:</h3>
                            <ul>
                                <li>Individuals may find themselves in uncertainty when:</li>
                                <ul>
                                    <li>Exploring new career opportunities or transitioning between roles.</li>
                                    <li>Facing challenges in their current career path and seeking guidance.</li>
                                    <li>Contemplating major life decisions, such as further education or relocation.</li>
                                    <li>Seeking to align personal values and goals with their professional aspirations.</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Platform Assistance in Addressing Concerns:</h3>
                            <ul>
                                <li>The platform will assist users by:</li>
                                <ul>
                                    <li>Providing personalized assessments and insights into their strengths, interests, and values.</li>
                                    <li>Offering access to a diverse range of resources, including career exploration tools, industry insights, and expert advice.</li>
                                    <li>Facilitating connections with mentors, peers, and professionals who can offer guidance and support.</li>
                                    <li>Utilizing AI-driven recommendation systems to suggest tailored opportunities and pathways for growth.</li>
                                    <li>Fostering a collaborative community where users can share experiences, seek advice, and learn from each other.</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Scientific Knowledge and Expertise:</h3>
                            <ul>
                                <li>The platform will draw upon:</li>
                                <ul>
                                    <li>Psychological principles and assessments to understand user behavior, motivations, and decision-making processes.</li>
                                    <li>Behavioral economics insights to explore how individuals make choices and evaluate risks.</li>
                                    <li>Data analytics and machine learning techniques to analyze user interactions and provide personalized recommendations.</li>
                                    <li>Expert contributions from psychologists, career counselors, and industry professionals to ensure evidence-based support and guidance.</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Goals and Objectives:</h3>
                            <ul>
                                <li>Our goals in developing the platform are:</li>
                                <ul>
                                    <li>Empowering individuals to make informed decisions and navigate their professional journeys with confidence and clarity.</li>
                                    <li>Facilitating meaningful connections and collaborations that enhance users' opportunities for growth and success.</li>
                                    <li>Providing organizations with access to a diverse talent pool and innovative solutions for talent development and retention.</li>
                                    <li>Creating a scalable and sustainable platform that adapts to users' evolving needs and fosters continuous learning and improvement.</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <p>These responses reflect our commitment to leveraging scientific knowledge, personalized support, and collaborative engagement to address users' uncertainties and enable them to make informed decisions that align with their goals and aspirations.</p>
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