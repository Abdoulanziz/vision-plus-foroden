import { useContext } from "react";
import { AppContext } from "../App";

export default function Concept03() {
    const {siteName, setSiteName} = useContext(AppContext);
    return(
        <>
            <section className="py-5 bg-light">
                <div className="container mt-5" style={{border: "1px solid #f3f3f3", backgroundColor: "#fff", paddingBlock: "12px"}}>
                    <div className="row">
                        <div className="col">
                            <h2>Fashion and Clothing</h2>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Inspiration for a New Approach:</h3>
                            <p>Our inspiration for establishing a new approach to selling online women's clothes and accessories stemmed from a deep understanding of the challenges faced by online shoppers, particularly in the realm of women's fashion. We recognized the disconnect between the convenience of online shopping and the desire for a tactile, immersive experience when selecting clothing and accessories. This realization led us to conceive a revolutionary approach that bridges this gap, offering a unique blend of online convenience with the in-person experience of traditional retail.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Addressing Pain Points:</h3>
                            <p>Our solution revolves around redefining the online shopping experience through a decentralized retail model. This innovative approach eliminates the uncertainty of online shopping, allowing customers to touch, feel, and try on clothes and accessories before placing an order. By partnering with a network of retailers who showcase limited selections of high-quality products, we offer customers the opportunity to experience the products firsthand, ensuring a seamless and satisfying shopping experience.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Unique Features and Services:</h3>
                            <p>Our online fashion platform stands out for its personalized and immersive shopping experience. Unlike traditional e-commerce platforms that rely solely on digital interactions, we offer a curated network of retailers who showcase limited selections of high-quality products. This approach allows us to combine the convenience of online shopping with the tactile experience of in-person retail, creating a seamless and memorable shopping journey for our customers.</p>
                            <p>Additionally, our reverse trading flow model sets us apart from existing platforms by optimizing the supply chain and minimizing inventory risks. By aggregating demand from our network of retailers and making wholesale purchases based on collective demand, we ensure efficient inventory management and a diverse range of products for our customers.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Qualities and Expertise of Team Members:</h3>
                            <p>We are seeking team members who are passionate about revolutionizing the fashion industry and committed to delivering exceptional customer experiences. Key qualities we value include creativity, adaptability, and a keen understanding of consumer trends and preferences. Experience in retail, e-commerce, marketing, and supply chain management will be invaluable in driving the success of our innovative approach. Above all, we are looking for individuals who share our vision and are eager to contribute their expertise to shaping the future of online fashion retail.</p>
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