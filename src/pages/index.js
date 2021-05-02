import React from "react";
import Helmet from "react-helmet";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Link } from "gatsby"
import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import ada from '../assets/images/ada.jpg'
import Nick from '../assets/images/Team_Nick.jpg'
import PLP from '../assets/images/Team_PLP.jpg'
import Lucie from '../assets/images/Team_Lucie.jpg'
import Emery from '../assets/images/Team_Emery.jpg'
import Philippe from '../assets/images/Team_Philippe.jpg'
import Jin from '../assets/images/Team_Jin.jpg'
import Brian from '../assets/images/Team_Brian.jpg'
import Pierre from '../assets/images/Team_Pierre.jpg'
import Alexandre from '../assets/images/Team_Alexandre.jpg'
import Aaron from '../assets/images/Team_Aaron.jpg'
import Terai from '../assets/images/Team_Terai.jpg'
import Emilie from '../assets/images/Team_Emilie.jpg'
import Eric from '../assets/images/Team_Eric.jpg'
import Jasmine from '../assets/images/Team_Jasmine.jpg'
import Christine from '../assets/images/Team_Christine.jpg'
import Joel from '../assets/images/Team_Joel.jpg'
import Mylene from '../assets/images/Team_Mylene.jpg'
import Felix from '../assets/images/Team_Felix.jpg'
import Bastien from '../assets/images/Team_Bastien.jpg'
import FMC from '../assets/images/Partners_CMF.png'
import Unity from '../assets/images/Partners_Unity.png'
import Ceim from '../assets/images/Partners_Ceim.png'
import GPS from '../assets/images/Partners_GPS.png'
import Insertech from '../assets/images/Partners_Insertech.png'
import Kowloon from '../assets/images/Partners_Kowloon.png'
import OG from '../assets/images/OG_Image.jpg'

const CustomForm = ({ status, message, onValidated }) => {
    let email, name, lastname;
    const submit = () =>
      email &&
      name &&
      lastname &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: name.value,
        LNAME: lastname.value
      });

      return (
        <div
          style={{
            background: "#efefef",
            borderRadius: 5,
            padding: 10,
            display: "inline-table"
          }}
        >
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              style={{ color: "green" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          <table>
                <tr>
                    <td>
                  
                        <input
                            style={{ fontSize: "major", padding: 5 }}
                            ref={node => (name = node)}
                            type="text"
                            placeholder="First Name"
                        />
                    </td>
                    <td>
                        <input
                            style={{ fontSize: "major", padding: 5 }}
                            ref={node => (lastname = node)}
                            type="text"
                            placeholder="Last Name"
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input
                            style={{ fontSize: "h1", padding: 5 }}
                            ref={node => (email = node)}
                            type="email"
                            placeholder="Your Email*"
                        />
                <tr><sub>* Mandatory fields</sub></tr>
                    </td>
                </tr>
                    <td colspan="2">
                        <button style={{ fontSize: "h2", padding: 5 }} onClick={submit}>
                            Sign Up
                        </button>
                    </td>
          </table>
          
        </div>
      );
    };

class Homepage extends React.Component {

    render() {
        const siteTitle = "Metric Empire Game Studio";
        const mailchimp_url = "https://facebook.us19.list-manage.com/subscribe/post?u=fdad2467938bbae637fab0fab&amp;id=06e3865496";
        // a basic form


        return (
            <Layout> 
                <Helmet>
                title={siteTitle}
                <title>Metric Empire | Home</title>
                <meta charset="UTF-8"/>
                <meta name="description"        content="Metric Empire is a game studio that crafts infinitely fun, savantly-distilled, innovative games. Join our newsletter for details of our upcoming game!"/>
                <meta name="keywords"           content="game developer, video games, steam, xbox, playstation, unity, indie, roguelite, shooter, procedural, innovative, assassin's creed, prince of persia, far cry"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Metric Empire Game Studio"/>
                <meta property="og:image"       content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                <meta property="og:description" content="Metric Empire is a game studio that crafts infinitely fun, savantly-distilled, innovative games. Join our newsletter for details of our upcoming game!"/>
                <meta property="og:url"         content="https://www.metricempire.com/"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Metric Empire Game Studio"/>
                <meta name="twitter:description"content="Metric Empire is a game studio that crafts infinitely fun, savantly-distilled, innovative games. Join our newsletter for details of our upcoming game!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/"/>
                <meta name="twitter:image"      content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                </Helmet>

                <section id="one" className="main style4">
                    <header className="major">
                        <h2>About the Studio</h2>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <p>Based in the colorful, creatively vibrant city of Montreal, Metric Empire is a brand new independent game development studio with a mission to create high-quality, meticulously distilled game experiences that are innovative, accessible, highly-replayable and, above all else, infinitely fun.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="City of Montreal skyline in the sunset" /></span>
                        </div>
                    </div>
                </section>

                <section id="one" className="main style1 special">
                    <header className="major">
                        <h2>Our Games</h2>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <span className="image fit"><img src={ada} alt="Ada, our game's protagonist" /></span>                        
                        </div>
                        <div className="col-6"> 
                            <p>We're currently working super hard on the creation of our very first game and we've already unveiled some exclusive details through our newsletter. If you want in on the scoops, just become a 'Friend of the Empire' by signing up for our <Link to="/#newsletter">newsletter</Link> today! </p>
                            <p>That said, if you're not ready for that kind of commitment, that's okay too, just check back often and/or follow us on your favorite social media.</p>
                            <ul className="icons">
                                <li><a href="http://www.facebook.com/MetricEmpire" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                                <li><a href="http://www.twitter.com/TheMetricEmpire" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                                <li><a href="http://www.linkedin.com/company/MetricEmpire" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                                <li><a href="mailto:hello@metricempire.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                            </ul>
                        </div>
                    </div>
                </section>

<scrollTo to="/newletter"></scrollTo>
                <section id="three" className="main style2 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Our Team</h2>
                            </header>
                            <p>
                            <div>
                            
With many years of AAA development experience on some of the most critically acclaimed, generation-defining games like Prince of Persia, Far Cry, Assassin’s Creed and Star Wars: Battlefront, our little empire means pretty serious business.
</div>
</p>
                        </div>
                        <div className="col-3">
                            <span className="image fit"><img src={Nick} alt="Co-Founder Nicholas Routhier" /></span>
                            <h3>Nicholas Routhier</h3>
                            <p>Co-Founder & Technical Director
                            <div></div>
                            </p>

                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={PLP} alt="Co-Founder Pier-Luc Papineau" /></span>
                            <h3>Pier-Luc Papineau</h3>
                            <p>Co-Founder & Design Director
                            <div></div>
                            </p>
                            
                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={Emery} alt="Programmer Emery Monzerol" /></span>
                            <h3>Emery Monzerol</h3>
                            <p>Programmer
                            <div></div>
                            </p>
                            
                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={Philippe} alt="Programmer Philippe Grenon" /></span>
                            <h3>Philippe Grenon</h3>
                            <p>Programmer
                            <div></div>
                            </p>
                            
                        </div>

						<div className="col-3">
                            <span className="image fit"><img src={Jin} alt="Art Director Yong Jin Teo" /></span>
                            <h3>Yong Jin Teo</h3>
                            <p>Art Director
                            <div></div>
                            </p>
                            
                        </div>

						<div className="col-3">
                            <span className="image fit"><img src={Brian} alt="Programmer Brian Fillion" /></span>
                            <h3>Brian Fillion</h3>
                            <p>Programmer
                            <div></div>
							</p>
                            
                        </div>

						<div className="col-3">
                            <span className="image fit"><img src={Pierre} alt="Level Designer Pierre Mongrain" /></span>
                            <h3>Pierre Mongrain</h3>
                            <p>Level Designer
                            <div></div>
							</p>
                            
                        </div>

						<div className="col-3">
                            <span className="image fit"><img src={Alexandre} alt="Animator Alexandre Le Naour" /></span>
                            <h3>Alexandre Le Naour</h3>
                            <p>3D Animator
                            <div></div>
							</p>
                            
                        </div>

						<div className="col-3">
                            <span className="image fit"><img src={Aaron} alt="Animator Aaron Higgins" /></span>
                            <h3>Aaron Higgins</h3>
                            <p>3D Animator
                            <div></div>
							</p>
                            
                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={Terai} alt="Artist Terai Tauvavau" /></span>
                            <h3>Terai Tauvavau</h3>
                            <p>Character Artist
                            <div></div>
							</p>
                            
                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={Emilie} alt="Level Artist Emilie Noreau" /></span>
                            <h3>Émilie Noreau</h3>
                            <p>Level Artist
                            <div></div>
							</p>
                            
                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={Jasmine} alt="Level Artist Jasmine Brazeau" /></span>
                            <h3>Jasmine Brazeau</h3>
                            <p>Level Artist
                            <div></div>
							</p>
                            
                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={Eric} alt="Programmer Eric Beaudoin" /></span>
                            <h3>Éric Beaudoin</h3>
                            <p>Programmer
                            <div></div>
							</p>
                            
                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={Christine} alt="VFX Artist Christine Fioroni" /></span>
                            <h3>Christine Fioroni</h3>
                            <p>VFX Artist
                            <div></div>
							</p>

                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={Joel} alt="VFX Artist Joel Tremblay" /></span>
                            <h3>Joël Tremblay</h3>
                            <p>Programmer
                            <div></div>
							</p>

                        </div>

                        <div className="col-3">
                            <span className="image fit"><img src={Felix} alt="Game Designer Felix-Alexandre Lepage" /></span>
                            <h3>Félix-Alexandre Lepage</h3>
                            <p>Game Designer
                            <div></div>
							</p>

                        </div>

                     <div className="col-3">
                            <span className="image fit"><img src={Bastien} alt="Programmer Bastien Gagné" /></span>
                            <h3>Bastien Gagné</h3>
                            <p>Programmer
                            <div></div>
							</p>

                        </div>

                    </div>
                </section>

                <section id="three" className="main style4 special">
                <div>
                    </div>
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                            <h2>Want to join us?</h2>
                            </header>
                            <p>
                                Even if we don't have a position currently open for you, this shouldn't stop you from sending us your CV anyways! We'll be sure to take a good look at it and, without making any promises, we'll try to get back to you if a position opens with your name written on it.
                            </p>
                            <h3>Currently Open Positions</h3>
                            <p></p>
                            <p><a href="https://www.metricempire.com/community-developer/"> Community Developer (Contract, Full-Time)</a> - <i>2020/01/20</i></p>
                            All applications should be sent to <a href="mailto:jobs@metricempire.com">jobs@metricempire.com</a> with the name of the position in the subject line.
                        </div>
                    </div>
                </section>

                <a name="newsletter" />
                <section id="five" className="main style1 special">
                    <div className="container">
                        <header className="major">
                            <h2>Become a Friend of the Empire</h2>
                        </header>
                        <p>Signing up for our newsletter is the best way to never miss out on any of our news and game announcements! Heck, you'll even get exclusive goodies from time to time, ain't that incredible?</p>
                        <ul className="actions uniform">
                            
                        <MailchimpSubscribe
                        url={mailchimp_url}
                        render={({ subscribe, status, message }) => (
                            <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                            />
                        )}
                        />
                        
                         </ul>
                         <sub>We take privacy very seriously and will never share your contact details with anyone else.<br></br>To know more about this, check out our <Link to="/privacy/">Privacy Policy</Link> page.</sub>
                    </div>
                </section>

                <section id="four" className="main style4 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Our Partners</h2>
                            </header>

                        </div>
						<div className="col-2">
                            <a href="https://www.kowloonnights.com/"><span className="image fit"><img src={Kowloon} alt="Kowloon Nights" /></span></a>                            

                        </div>
                        <div className="col-2">
                            <a href="http://www.unity3d.com/"><span className="image fit"><img src={Unity} alt="Unity Logo" /></span></a>
                        </div>

                        <div className="col-2">
                            <a href="https://www.cmf-fmc.ca/"><span className="image fit"><img src={FMC} alt="FMC_CMF Logo" /></span></a>                            
                        </div>

                        <div className="col-2">
                            <a href="https://www.ceim.org/en/"><span className="image fit"><img src={Ceim} alt="CEIM Logo" /></span></a>                            
                        </div>

                        <div className="col-2">
                            <a href="https://gameplayspace.com/"><span className="image fit"><img src={GPS} alt="Gameplay Space Logo" /></span></a>                            
                        </div>

						<div className="col-2">
                            <a href="https://www.insertech.ca/en/"><span className="image fit"><img src={Insertech} alt="Insertech Logo" /></span></a>                            
                        </div>

                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;