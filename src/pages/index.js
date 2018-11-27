import React from "react";
import Helmet from "react-helmet";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Link } from "gatsby"

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'


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
        const siteTitle = "Metric Empire";
        const mailchimp_url = "https://facebook.us19.list-manage.com/subscribe/post?u=fdad2467938bbae637fab0fab&amp;id=06e3865496";
        // a basic form


        return (
            <Layout> 
                <Helmet title={siteTitle} />

                <section id="one" className="main style4">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>The Studio</h2>
                            </header>
                            <p>
                                Based in the colorful, creatively vibrant city of Montréal, Canada, Metric Empire is a brand new, independent game development studio founded in 2018 by two AAA industry design veterans with the goal to create high-quality, meticulously distilled game experiences that are innovative, accessible, highly-replayable and, above all else, infinitely fun.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="four" className="main style1 special">
                    <div className="container">
                        <header className="major">
                            <h2>Our Games</h2>
                        </header>
                        <p>We're currently working super hard on the creation of our very first title <br></br>
                        and we hope to unveil the very first, exclusive details by the beginning of spring 2019.</p>

                        <p>If you want to be among the privileged few to get the full details about our new game,<br></br> you just have to become a 'Friend of the Empire' by signing up for our <Link to="/#newsletter">Newsletter!</Link></p>
                        <p>That said, if you're not ready for that kind of commitment, that's okay too, <br></br> just check back often and/or follow us on your favorite social media.</p>
                <ul className="icons">
                    <li><a href="http://www.facebook.com/MetricEmpire" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="http://www.twitter.com/TheMetricEmpire" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="http://www.linkedin.com/company/MetricEmpire" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="mailto:hello@metricempire.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>

                    </div>
                </section>


<scrollTo to="/newletter"></scrollTo>
                <section id="three" className="main style4 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Meet Our Team</h2>
                            </header>
                            <p>
                            <div>
                            
With over 30 years of combined development experience on some of the most critically acclaimed, generation-defining AAA franchises like Prince of Persia, Far Cry
and Assassin’s Creed, our little empire means pretty serious business.
</div>
</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Nicholas Routhier</h3>
                            <a href="http://www.twitter.com/NyksterR" className="icon alt fa-twitter"><span className="label">@NyksterR</span>&nbsp;&nbsp;@NyksterR</a>
                            <p>Co-Founder & Technical Director</p>
                            <h5>The business and technical face of Metric Empire, Nicholas possesses an awesome mix of design, technical direction, programming and project management skills that he uses to rally the team towards clear production goals and make sure the studio is a well-oiled machine.</h5>
                            <h5>Born and bred in a family of entrepreneurs, the desire for business and creative independence was always strong in Nicholas' DNA. Nick's career began at Ubisoft Montreal back in 2003, where he was hired as Level Designer on Far Cry games. Pretty soon after, he became Design Technical Director for many titles such as Prince of Persia, Assassin's Creed IV: Black Flag and Assassin's Creed Origins.</h5>
                        </div>

                        <div className="col-6">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Pier-Luc Papineau</h3><a href="http://www.twitter.com/PLPapineau" className="icon alt fa-twitter"><span className="label">@NyksterR</span>&nbsp;&nbsp;@PLPapineau</a>
                            <p>Co-Founder & Design Director</p>
                            <h5>The creative face of Metric Empire, Pier-Luc leverages a wide set of artistic, narrative design, level design and game design direction skills, which he uses both for hands-on content creation and to provide clear creative guidance to the team.</h5>
                            <h5>Pier-Luc joined Ubisoft Montreal in 2002, as Level Designer on Prince of Persia: The Sands of Time. A year later, he became Lead Level Designer and has been a creative leader and coach ever since, contributing to the design vision of games like Assassin's Creed II, Assassin's Creed III, Child of Light and Far Cry. Over the years, Pier-Luc honed his Level Design, Game Design and Narrative Design skills in several AAA studios such as Ubi Montreal, Ubi Singapore and EA Motive Studios.</h5>
                        </div>

                    </div>
                </section>

                <a name="newsletter" />
                <section id="four" className="main style1 special">
                    <div className="container">
                        <header className="major">
                            <h2>Sign Up for our Newsletter</h2>
                        </header>
                        <p>Don't miss out on any of our news, become a Friend of the Empire and sign up for our newsletter today!</p>
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
            </Layout>
        );
    }
}

export default Homepage;