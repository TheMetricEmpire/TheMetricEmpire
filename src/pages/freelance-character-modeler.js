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
                <meta name="description"        content="Metric Empire is looking for a Freelance Character Modeler for its upcoming, unannounced game!"/>
                <meta name="keywords"           content="freelance, contract, video games, unity 3D, concept art, character art, environmental art, robots, weapons, montreal, indie game development"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Freelance Character Modeler | Metric Empire"/>
                <meta property="og:image"       content="https://themetricempire.github.io/PLPapineau-vCard/OG_Icon.png"/>
                <meta property="og:description" content="Metric Empire is looking for a Freelance Character Modeler for its upcoming, unannounced game!"/>
                <meta property="og:url"         content="https://www.metricempire.com/freelance-character-modeler"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Freelance Character Modeler | Metric Empire"/>
                <meta name="twitter:description"content="Metric Empire is looking for a Freelance Character Modeler for its upcoming, unannounced game!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/freelance-character-modeler"/>
                <meta name="twitter:image"      content="https://themetricempire.github.io/PLPapineau-vCard/OG_Icon.png"/>
                </Helmet>

                <a name="jobs" />
                <section id="five" className="main style6">
                    <div className="container">
                        <header className="major">
                            <h2>Looking for a Character Modeler (Contract/Freelance)</h2>
                        </header>
                        <h3>April 13th, 2019</h3>
                        <p>Metric Empire is a small up-and-coming indie game studio working on its very first, unannounced title set in a vibrant, colorful and hopeful sci-fi world.</p>
                        <p>We’re looking for an experienced character modeler with strong aptitudes in hard surface modeling and mechanical designs to help create stylized robotic enemy characters for our upcoming game. The models will need to be delivered at midrez quality and optimized for first-person POV and have to be ready to be rigged and animated by our animators.</p>
                        <p>This is a short freelance contract that involves delivering 2-3 robot models to start, with possibility of extra work in the future.</p>
                        <p>We’d love to hear from you if you:</p>
                        <ul>
                            <li>Are based in Montreal and available for in-person meetings </li>
                            <li>Have notable experience in hard surface character modeling and have a liking for killer robots, machines and mechs</li>
                            <li>Are able to own your entire character pipeline, able to model, sculpt, texture, retopologize, UV unwrap, etc.</li>
                            <li>Can work from established references and with gameplay intentions in mind, deriving convincing form from function</li>
                            <li>Can aptly balance between artistic and technical constraints to achieve aesthetic quality and technical functionality</li>
                            <li>Have solid interpersonal communication skills, speaking French is a definite plus</li>
                        </ul>
                        <p>Does that sound like you? If so, send us your CV and online portfolio at <a href="mailto:jobs@metricempire.com?subject=Freelance Character Modeler Enquiry">jobs@metricempire.com</a> and we'll get back to you as soon as we can!</p>
                        
                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;