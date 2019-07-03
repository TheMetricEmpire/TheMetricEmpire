import React from "react";
import Helmet from "react-helmet";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Link } from "gatsby"
import Layout from '../components/layout';
import ada from '../assets/images/ada_conceptart.jpg'


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
        const siteTitle = "Become a Friend of the Empire";
        const mailchimp_url = "https://facebook.us19.list-manage.com/subscribe/post?u=fdad2467938bbae637fab0fab&amp;id=06e3865496";
        // a basic form


        return (
            <Layout> 
                <Helmet>
                title={siteTitle}
                <title>Metric Empire | Newsletter Sign-Up</title>
                <meta charset="UTF-8"/>
                <meta name="description"        content="Join Metric Empire's newsletter to get news and details of our upcoming game! Sign up today and get an exclusive illustration of our game's protagonist!"/>
                <meta name="keywords"           content="game developer, video games, steam, xbox, playstation, unity, indie, roguelite, shooter, procedural, innovative, assassin's creed, prince of persia, far cry"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Become a Friend of the Empire"/>
                <meta property="og:image"       content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                <meta property="og:description" content="Metric Empire is a game studio that crafts infinitely fun, savantly-distilled, innovative games. Join our newsletter for details of our upcoming game!"/>
                <meta property="og:url"         content="https://www.metricempire.com/"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Become a Friend of the Empire"/>
                <meta name="twitter:description"content="Join Metric Empire's newsletter to get news and details of our upcoming game! Sign up today and get an exclusive illustration of our game's protagonist!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/"/>
                <meta name="twitter:image"      content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                </Helmet>


                <section id="one" className="main style1 special">
                    <header className="major">
                      <h2>We're thrilled that you're here!</h2>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-6">
                          <p>No, seriously. And you should be too, seeing you're just a mere step away from being part of a growing community of passionate, like-minded gamers and supporters! </p>
                          <p>By signing up for our monthly newsletter, you're becoming a fundamental piece of our success story. Not only you're helping us build critical early reach, you're also joining over a hundred other folks who share your interest for the games we make. It's the best way to keep up to date with exclusive reveals and announcements for the game and it's also a great way to get news from the team and life at the studio! </p>
                          <p>We're committed to make it worth your while as well! As development progresses, we'll make sure that you're treated with exclusive goodies such as hi-rez wallpapers and concept pieces and in time, you may also be offered a chance to test the game before anyone else! </p>
                        </div>
                        <div className="col-6">
                          <span className="image fit"><img src={ada} alt="Ada, our game's protagonist" /></span>
                          <blockquote>  
                            Join up today, and as a welcome gift, we'll send you <br></br> an exclusive <b>high-resolution illustration</b> of Ada,<br></br> our game's badass protagonist!
                          </blockquote>
                        </div>
                    </div>                    
                </section>
                 
                <a name="newsletter" />          
                <section id="one" className="main style2">
                    <header className="major">
                      <h2>Ready to become a Friend of the Empire?</h2>
                    </header>
                    <p>
                      We don't ask for much. All we need to establish a solid, reciprocal friendship is a valid email adress and a classy name of your choice and that's about it.<br></br> Once you're in, your <b>exclusive high-rez illustration</b> will be on the way! Just be sure to check out your spam filters and whitelist us.
                    </p>
                    <div className="container">
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