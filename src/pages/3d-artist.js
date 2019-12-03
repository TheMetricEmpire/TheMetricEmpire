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
                <title>Intermediate 3D Artist | Metric Empire</title>
                <meta charset="UTF-8"/>
                <meta name="description"        content="Metric Empire is looking for an Intermediate 3D Artist!"/>
                <meta name="keywords"           content="job, video games, unity 3D, artist, environment, props, montreal, indie game development"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Intermediate 3D Artist | Metric Empire"/>
                <meta property="og:image"       content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                <meta property="og:description" content="Metric Empire is looking for an Intermediate 3D Artist!"/>
                <meta property="og:url"         content="https://www.metricempire.com/3d-artist"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Intermediate 3D Artist | Metric Empire"/>
                <meta name="twitter:description"content="Metric Empire is looking for an Intermediate 3D Artist!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/3d-artist"/>
                <meta name="twitter:image"      content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                </Helmet>

                <a name="jobs" />
                <section id="five" className="main style7">
                    <div className="container">
                        <header className="major">
                            <h2>Intermediate 3D Artist (Permanent, Full-Time)</h2>
                        </header>
                        <p>Date: December 12th, 2019</p>
                        <p>Metric Empire is a small independent game development studio located in the heart of downtown Montreal, inside the Gameplay Space. It is the perfect environment for those looking for a friendly team that’s passionate and driven, the ability to work in a human-scale, collaborative, creative environment and to share in the success and growth of a new indie studio.</p>
                        <p>Our small team is currently on the lookout for an Intermediate Modeler/Level/Environment Artist who will help bring to life the many environments of our first game, an innovative FPS-Roguelite set in a stylish and colorful sci-fi world. This is a permanent full-time position elligible to benefits.</p>
                        <h3>Responsibilities:</h3>
                        <ul>
                            <li>Modelling of indoor/outdoor environments modules and props;</li>
                            <li>Create textures, materials and shaders;</li>
                            <li>Optimize 3D models and textures as needed;</li>
                            <li>Work within the established art direction and technical pipeline;</li>
                            <li>Assembling modules to create visually compelling and gameplay-optimized spaces;</li>
                            <li>Integrate fluidly with all metiers to align with the game’s vision and tech requirements;</li>
                            <li>Proactively offer solutions to achieve your goals in collaboration with the rest of the team;</li>
                            <li>Collaborating in scoping, estimating and prioritizing the work to be done;</li>
                            <li>Maintaining and updating asset banks throughout production, polish and debug;</li>
                        </ul>
                        <h3>Qualifications:</h3>
                        <ul>
                            <li>College or University diploma in 3D Art or equivalent experience;</li>
                            <li>At least 2+ years of demonstrated experience in the game industry;</li>
                            <li>An updated portfolio showing several realisations in level art, props and texture creation;</li>
                            <li>Keen, demonstrable artistic sense (color theory, scene composition, lighting);</li>
                            <li>Thorough working knowledge of 3DS Max, Maya and Photoshop;</li>
                            <li>Good working skills in lighting, shading, baking;</li>
                            <li>At least a basic working knowledge of Unity;</li>
                            <li>High degree of autonomy, self-motivation and strong problem-solving skills;</li>
                            <li>Solid interpersonal communication skills, fluent in both English and French;</li>
                        </ul>
                        <h3>Bonus Points:</h3>
                        <ul>
                            <li>Previous experience in developing first/third person shooter games;</li>
                            <li>Knowledge of Houdini, Zbrush or Substance Painter / Designer;</li>
                            <li>Specialization for hard surface modelling and stylized sci-fi environments;</li>
                            <li>You are an avid gamer that like first-person shooters;</li>
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
                        <p>Does that sound like you? If so, send us your CV and online portfolio at <a href="mailto:jobs@metricempire.com?subject=Intermediate 3D Artist Enquiry">jobs@metricempire.com</a> and we'll get back to you as soon as we can!</p>
                        
                        <h6>*Metric Empire commits to offer equal working chances to every individual, without regards based on the followings : age, sex, sexual orientation, physical disability, race, religion, citizenship, native country or any other possible particularities. We sincerely believe in a respectful and open-minded work environment, in which everyone can fully contribute to the organization's development.</h6>
                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;