import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"
import Layout from '../components/layout';


class Homepage extends React.Component {

    render() {
        const siteTitle = "Metric Empire Game Studio";


        return (
            <Layout> 
                <Helmet>
                title={siteTitle}
                <title>Freelance Concept Artist | Metric Empire</title>
                <meta charset="UTF-8"/>
                <meta name="description"        content="Metric Empire is looking for a Freelance 3D Animator for its upcoming, unannounced game!"/>
                <meta name="keywords"           content="freelance, contract, video games, unity 3D, animation, animator, robots, weapons, montreal, indie game development"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Freelance 3D Animator | Metric Empire"/>
                <meta property="og:image"       content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                <meta property="og:description" content="Metric Empire is looking for a Freelance 3D Animator for its upcoming, unannounced game!"/>
                <meta property="og:url"         content="https://www.metricempire.com/freelance-animator"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Freelance Animator | Metric Empire"/>
                <meta name="twitter:description"content="Metric Empire is looking for a Freelance 3D Animator for its upcoming, unannounced game!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/freelance-animator"/>
                <meta name="twitter:image"      content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                </Helmet>

                <a name="jobs" />
                <section id="five" className="main style6">
                    <div className="container">
                        <header className="major">
                            <h2>Looking for a 3D Animator (Contract/Freelance)</h2>
                        </header>
                        <h3>May 13th, 2019</h3>
                        <p>Metric Empire is a small up-and-coming indie game studio working on its very first, unannounced title set in a vibrant, colorful and hopeful sci-fi world.</p>
                        <p>We’re currently on the lookout for an experienced 3D Animator that will be responsible to bring our game characters to life with stylized, high-quality motion. This is a short 3-month contract that involves delivering all necessary locomotion and combat gameplay animations for two of our robotic enemy characters, with possibility of extra work in the future.</p>
                        <p>This is a short-term full-time contract for a total duration of 3 months.</p>
                        <p>What you’ll need to qualify:</p>
                        <ul>
                            <li>Have a degree in 3D Animation or equivalent</li>
                            <li>Are based in Montreal and are available to work in-house for the duration of the contract</li>
                            <li>Have a solid understanding of rigging, skinning and keyframing animation techniques</li>
                            <li>Have thorough working knowledge of Maya, 3DS Max, Motion Builder or an equivalent 3D animation authoring software</li>
                            <li>Are able to collaborate fluidly with designers, programmers and artists to ensure your work aligns with the game’s vision and technical requirements</li>
                            <li>Have previous experience animating characters for shooters (i.e. locomotion and combat)</li>
                            <li>Have a high degree of autonomy, self-motivation and display strong problem-solving skills</li>
                        </ul>
                        <p>Extra points if you:</p>
                        <ul>
                            <li>Have a penchant for robotic/mechanical character animation and the specific challenges that they pose</li>
                            <li>Are able to work in Unity and able to animate/integrate your work autonomously into Behavior Trees</li>
                            <li>Have previous notable Indie or AAA game development experience</li>
                            <li>Have solid interpersonal communication skills and are fluent in both English and French</li>
                            <li>Are an avid gamer</li>
                        </ul>
                        <p>Does that sound like you? If so, send us your CV and online portfolio at <a href="mailto:jobs@metricempire.com?subject=Freelance Concept Artist Enquiry">jobs@metricempire.com</a> and we'll get back to you as soon as we can!</p>
                        
                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;