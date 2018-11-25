import React from "react";
import Helmet from "react-helmet";
import MailchimpSubscribe from "react-mailchimp-subscribe"

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
            borderRadius: 2,
            padding: 2,
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
                            placeholder="Your First name*"
                        />
                    </td>
                    <td>
                        <input
                            style={{ fontSize: "major", padding: 5 }}
                            ref={node => (lastname = node)}
                            type="text"
                            placeholder="Your Last name*"
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input
                            style={{ fontSize: "h1", padding: 5 }}
                            ref={node => (email = node)}
                            type="email"
                            placeholder="Your email"
                        />
                <tr><h6>* optional fields</h6></tr>
                    </td>
                </tr>
                    <td colspan="2">
                        <button style={{ fontSize: "h2", padding: 5 }} onClick={submit}>
                            Join us
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

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Our Mission</h2>
                            </header>
                            <p>
                            Based in the colorful, creatively vibrant city of Montreal, Metric Empire is an independent game development studio founded in 2018 by AAA industry veteran directors Nicholas Routhier and Pier-Luc Papineau with the goal to create high-quality, meticulously distilled game experiences that are innovative, accessible, highly-replayable and, above all else, infinitely fun.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="four" className="main style3">
                    <div className="container">
                        <header className="major">
                            <h2>Our Games</h2>
                        </header>
                        <p>Working on it</p>
                    </div>
                </section>

                <section id="two" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Our Beliefs</h2>
                            </header>
                            <p>We believe in THIS</p>
                            <p>We also think that the future is THAT</p>
                            <p>And we think we can achieve it with THESE</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style3">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>The Founders</h2>
                            </header>
                            <p>Meet the two faces behind Metric Empire</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Nicholas Routhier</h3>
                            <p>Co-Founder & Technical Director</p>
                            <p>Short bio</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Bio</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Pier-Luc Papineau</h3>
                            <p>Co-Founder & Design Director</p>
                            <p>Short bio</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Bio</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style1 special">
                    <div className="container">
                        <header className="major">
                            <h2>Join our Newsletter</h2>
                        </header>
                        <p>Don't miss out on any of our news, join our newsletter today!</p>
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
                         <h6>Metric Empire privacy policy link</h6>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;