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
                <title>FX Artist | Metric Empire</title>
                <meta charset="UTF-8"/>
                <meta name="description"        content="Metric Empire is looking for a FX Artist!"/>
                <meta name="keywords"           content="job, video games, unity 3D, FX Artist, montreal, indie game development"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="FX Artist | Metric Empire"/>
                <meta property="og:image"       content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                <meta property="og:description" content="Metric Empire is looking for a FX Artist!"/>
                <meta property="og:url"         content="https://www.metricempire.com/fx-artist"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="FX Artist | Metric Empire"/>
                <meta name="twitter:description"content="Metric Empire is looking for a FX Artist!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/fx-artist"/>
                <meta name="twitter:image"      content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                </Helmet>

                <a name="jobs" />
                <section id="five" className="main style7">
                    <div className="container">
                        <header className="major">
                            <h2>FX Artist (Permanent, Full-Time)</h2>
                        </header>
                        <p>Date: January 31st, 2020</p>
                        <p>Metric Empire is a small independent game development studio located in the heart of downtown Montreal, inside the Gameplay Space. It is the perfect environment for those looking for a friendly team that’s passionate and driven, the ability to work in a human-scale, collaborative, creative environment and to share in the success and growth of a new indie studio.</p>
                        <p>Our growing team is currently searching for a talented FX Artist who will be in charge of creating and animating the numerous stylized FXs needed to give the necessary zap, oomph and kabam to our first game, an innovative FPS-Roguelite set in a stylish and colorful sci-fi world.</p>
                        <p>This a full-time, permanent position.</p>
                        <h3>Responsibilities:</h3>
                        <ul>
                            <li>Working under supervision of the Game Director and Art Director;</li>
                            <li>Creating and implementing stylized, real-time FX using particle systems, dynamics and animated shaders;</li>
                            <li>Creating juicy FXs for sci-fi weapons, abilities, robots, destruction, environmental effects and more;</li>
                            <li>Handling FX implementation from start to finish - modeling, texturing, lighting, animating, compositing, integrating and optimizing;</li>
                            <li>Collaborating with designers, artists and programmers to ensure results achieve optimal impact;</li>
                            <li>Being creative and consistent in working within the game’s established art style;</li>
                            <li>Working within the established technical guidelines and performance constraints of the game and the Unity Engine;</li>
                            <li>Participate in FX scoping, planning and maintenance of the project’s special effects banks;</li>
							<li>Being resourceful and proactive in learning new tools and techniques</li>
                        </ul>
                        <h3>What you’ll need to qualify:</h3>
                        <ul>
                            <li>Be based in Montreal and available to work on-site;</li>
                            <li>A degree or diploma in 3D Art, Special Effects, Digital Art or equivalent;</li>
                            <li>A minimum of 2 years of professional experience in the games industry as an FX Artist;</li>
                            <li>Previous, relevant experience in creating special effects in Unity 3D;</li>
                            <li>Solid knowledge of special effects creation techniques and workflows;</li>
                            <li>Proficiency with special effects creation, simulation and compositing softwares;</li>
                            <li>High degree of creativity, autonomy, self-motivation and problem-solving skills;</li>
                            <li>Solid interpersonal communication skills and team-first work ethics;</li>
							<li>Are an avid gamer who enjoys playing action games of all sorts</li>
                        </ul>
                        <h3>Bonus Points:</h3>
                        <ul>
                            <li>Working proficiency with Houdini, FumeFX and/or Substance Designer;</li>
							<li>Being fluent in both English and French</li>
                        </ul>
                        <h3>Benefits:</h3>
                        <ul>
                            <li>Flexible schedule, work-life balance, proactive stance on overtime;</li>
                            <li>Equal opportunity employer*, friendly and fair work environment;</li>
                            <li>Vacations, Sick Days, Unpaid Leave and bonus Christmas Week;</li>
                            <li>Possibility to work on personal projects;</li>
                            <li>Competitive group insurance policy including vision and dental coverage;</li>
                            <li>Lunch n' Learns;</li>
                            <li>Free Coffee;</li>
                        </ul>
                        <p>Does that sound like you? If so, send us your CV and online portfolio at <a href="mailto:jobs@metricempire.com?subject=FX Artist Job Enquiry">jobs@metricempire.com</a> and we'll get back to you as soon as we can!</p>
                        
                        <h6>*Metric Empire commits to offer equal working chances to every individual, without regards based on the followings : age, sex, sexual orientation, physical disability, race, religion, citizenship, native country or any other possible particularities. We sincerely believe in a respectful and open-minded work environment, in which everyone can fully contribute to the organization's development.</h6>
                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;