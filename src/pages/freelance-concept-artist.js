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
                <meta name="description"        content="Metric Empire is looking for a Freelance Concept Artist for its upcoming, unannounced game!"/>
                <meta name="keywords"           content="game developer, video games, steam, xbox, playstation, unity, indie, roguelite, shooter, procedural, innovative, assassin's creed, prince of persia, far cry"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Freelance Concept Artist | Metric Empire"/>
                <meta property="og:image"       content="https://themetricempire.github.io/PLPapineau-vCard/icon.png"/>
                <meta property="og:description" content="Metric Empire is looking for a Freelance Concept Artist for its upcoming, unannounced game!"/>
                <meta property="og:url"         content="https://www.metricempire.com/freelance-concept-artist"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Freelance Concept Artist | Metric Empire"/>
                <meta name="twitter:description"content="Metric Empire is looking for a Freelance Concept Artist for its upcoming, unannounced game!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/freelance-concept-artist"/>
                <meta name="twitter:image"      content="https://themetricempire.github.io/PLPapineau-vCard/icon.png"/>
                </Helmet>

                <a name="jobs" />
                <section id="five" className="main style6">
                    <div className="container">
                        <header className="major">
                            <h2>Looking for a Concept Artist (Contract/Freelance)</h2>
                        </header>
                        <h3>April 12th, 2019</h3>
                        <p>Metric Empire is a small up-and-coming indie game studio working on its very first, unannounced title set in a vibrant, colorful and hopeful sci-fi world.</p>
                        <p>We’re looking for an experienced concept art freelancer that can quickly iterate to deliver a variety of concept art that will help establish the game's visual direction. The ideal candidate needs to be well-rounded and versatile, being able to deliver convincing illustrations for environments, characters, robots and weapons for the game. These works will be used to both inspire and guide the team during conception, pre-production and production and will also be used as material to generate buzz on social media. </p>
                        <p>This is a freelance contract that involves delivering approximately 20-30 pieces over a total duration of 4-6 months.</p>
                        <p>We’d love to hear from you if you:</p>
                        <ul>
                            <li>Are based in Montreal and available for in-person meetings </li>
                            <li>Are experienced in concept art freelancing for games</li>
                            <li>Can iterate quickly, working from scratch and using paint-overs</li>
                            <li>Are versatile, able to illustrate environments, characters, machines and weapons equally well</li>
                            <li>Are able to understand, dissect and extrapolate from a reference art style</li>
                            <li>Are able to illustrate gameplay mechanics and designs convincingly</li>
                            <li>Have solid communication skills, speaking French is a definite plus</li>
                        </ul>
                        <p>Does that sound like you? If so, send us your CV and online portfolio at <a href="mailto:jobs@metricempire.com?subject=Concept Artist Enquiry">jobs@metricempire.com</a> and we'll get back to you as soon as we can!</p>
                        
                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;