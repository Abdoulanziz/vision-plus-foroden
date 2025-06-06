import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function Collaborate() {
    const {siteName, setSiteName} = useContext(AppContext);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <>
            <section className="py-5">
                <div className="container mt-5" style={{borderInline: "1px solid #f3f3f3", backgroundColor: "#fff", paddingBlock: "12px"}}>
                    <div className="col">
                        <h2>Terms and Conditions</h2>
                        <p>Welcome to Foroden! These terms and conditions outline the rules and regulations for the use of our platform.</p>
                        <p>By accessing this platform, we assume you accept these terms and conditions in full. Do not continue to use Foroden if you do not accept all of the terms and conditions stated on this page.</p>
                        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements:</p>
                        <ul>
                            <li>"Client", "You" and "Your" refers to you, the person accessing this platform and accepting the Company's terms and conditions.</li>
                            <li>"The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.</li>
                            <li>"Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.</li>
                            <li>All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of [Country].</li>
                            <li>Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</li>
                        </ul>
                        <h3>Cookies</h3>
                        <p>We employ the use of cookies. By using Foroden's website you consent to the use of cookies in accordance with Foroden's privacy policy.</p>
                        <p>Most of the modern day interactive websites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our platform to enable the functionality of this area and ease of use for those people visiting.</p>
                        <p>Some of our affiliate/advertising partners may also use cookies.</p>
                        <h3>License</h3>
                        <p>Unless otherwise stated, Foroden and/or its licensors own the intellectual property rights for all material on Foroden. All intellectual property rights are reserved. You may view and/or print pages from Foroden for your own personal use subject to restrictions set in these terms and conditions.</p>
                        <p>You must not:</p>
                        <ul>
                            <li>Republish material from Foroden</li>
                            <li>Sell, rent or sub-license material from Foroden</li>
                            <li>Reproduce, duplicate or copy material from Foroden</li>
                            <li>Redistribute content from Foroden (unless content is specifically made for redistribution).</li>
                        </ul>
                        <h3>User Comments</h3>
                        <p>This Agreement shall begin on the date hereof.</p>
                        <p>Certain parts of this platform offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. Foroden does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of Foroden, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws Foroden shall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
                        <p>Foroden reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions.</p>
                        <p>You warrant and represent that:</p>
                        <ul>
                            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                            <li>The Comments do not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party;</li>
                            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material or material which is an invasion of privacy;</li>
                            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                        </ul>
                        <p>You hereby grant to Foroden a non-exclusive royalty-free license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
                        <h3>Hyperlinking to our Content</h3>
                        <p>The following organizations may link to our platform without prior written approval:</p>
                        <ul>
                            <li>Government agencies;</li>
                            <li>Search engines;</li>
                            <li>News organizations;</li>
                            <li>Online directory distributors when they list us in the directory may link to our platform in the same manner as they hyperlink to the websites of other listed businesses; and</li>
                            <li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                        </ul>
                        <p>These organizations may link to our home page, to publications or to other website information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</p>
                        <p>We may consider and approve in our sole discretion other link requests from the following types of organizations:</p>
                        <ul>
                            <li>commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;</li>
                            <li>dot.com community sites;</li>
                            <li>associations or other groups representing charities, including charity giving sites,</li>
                            <li>online directory distributors;</li>
                            <li>internet portals;</li>
                            <li>accounting, law and consulting firms whose primary clients are businesses; and</li>
                            <li>educational institutions and trade associations.</li>
                        </ul>
                        <p>We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b) the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of ; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.</p>
                        <p>These organizations may link to our home page, to publications or to other website information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site.</p>
                        <p>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to info@foroden.com. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>
                        <p>Approved organizations may hyperlink to our Web site as follows:</p>
                        <ul>
                            <li>By use of our corporate name; or</li>
                            <li>By use of the uniform resource locator (Web address) being linked to; or</li>
                            <li>By use of any other description of our Web site or material being linked to that makes sense within the context and format of your site's content.</li>
                        </ul>
                        <p>No use of Foroden's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

                        <h3>Reservation of Rights</h3>
                        <p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.</p>

                        <h3>Removal of links from our website</h3>
                        <p>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.</p>

                        <p>Whilst we endeavor to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.</p>

                        <h3>Content Liability</h3>
                        <p>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

                        <h3>Disclaimed</h3>
                        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:</p>

                        <ul>
                            <li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
                            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                        </ul>

                        <p>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.</p>

                        <p>To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>

                    </div>
                </div>
            </section>
        </>
    )
}