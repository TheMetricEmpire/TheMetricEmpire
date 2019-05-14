import React from "react";
import Helmet from "react-helmet";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Link } from "gatsby"
import Layout from '../components/layout';


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
                <meta name="description"        content="Joining Metric Empire's newsletter is the best way to get news and details of our upcoming game before everyone else!"/>
                <meta name="keywords"           content="game developer, video games, steam, xbox, playstation, unity, indie, roguelite, shooter, procedural, innovative, assassin's creed, prince of persia, far cry"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Become a Friend of the Empire"/>
                <meta property="og:image"       content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                <meta property="og:description" content="Metric Empire is a game studio that crafts infinitely fun, savantly-distilled, innovative games. Join our newsletter for details of our upcoming game!"/>
                <meta property="og:url"         content="https://www.metricempire.com/"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Become a Friend of the Empire"/>
                <meta name="twitter:description"content="Joining Metric Empire's newsletter is the best way to get news and details of our upcoming game before everyone else!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/"/>
                <meta name="twitter:image"      content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                </Helmet>

                <a name="newsletter" />
                <section id="one" className="main style1 special">
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
            </Layout>
        );
    }
}

export default Homepage;