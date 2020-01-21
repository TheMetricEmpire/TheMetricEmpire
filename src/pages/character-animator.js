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
                <title>Character Animator | Metric Empire</title>
                <meta charset="UTF-8"/>
                <meta name="description"        content="Metric Empire is looking for a Character Animator!"/>
                <meta name="keywords"           content="job, video games, unity 3D, character animator, montreal, indie game development"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Character Animator | Metric Empire"/>
                <meta property="og:image"       content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                <meta property="og:description" content="Metric Empire is looking for a Character Animator!"/>
                <meta property="og:url"         content="https://www.metricempire.com/character-animator"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Character Animator | Metric Empire"/>
                <meta name="twitter:description"content="Metric Empire is looking for a Character Animator!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/character-animator"/>
                <meta name="twitter:image"      content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                </Helmet>

                <a name="jobs" />
                <section id="five" className="main style7">
                    <div className="container">
                        <header className="major">
                            <h2>Character Animator (Permanent, Full-Time)</h2>
                        </header>
                        <p>Date: January 20th, 2020</p>
                        <p>Metric Empire is a small independent game development studio located in the heart of downtown Montreal, inside the Gameplay Space. It is the perfect environment for those looking for a friendly team that’s passionate and driven, the ability to work in a human-scale, collaborative, creative environment and to share in the success and growth of a new indie studio.</p>
                        <p>Our growing team is currently on the lookout for an Intermediate Character Animator who will help bring to life the many characters of our first game, an innovative FPS-Roguelite set in a stylish and colorful sci-fi world.</p>
                        <p>This a full-time, permanent position.</p>
                        <h3>Responsibilities:</h3>
                        <ul>
                            <li>Work under supervision of the Game Director and Art Director;</li>
                            <li>Create and maintain robust and reusable rigs for characters with various types of locomotion;</li>
                            <li>Create and maintain rigs for multiple weapons and interactive game objects;</li>
                            <li>Use keyframing animation techniques to create high-quality, stylized animations both for hard-surface and organic characters;</li>
                            <li>Collaborate with Concept Artists and Character Modellers to ensure models achieve established animation standards and offer optimal range of movement;</li>
                            <li>Integrate animations autonomously in the Unity3D editor in collaboration with AI Programmer;</li>
                            <li>Test and sign-off animation quality routinely in the game, incorporating feedback when necessary;</li>
                            <li>Participate in animation scoping, planning and maintenance of the project’s animation bank;</li>
							<li>Produce highest quality animation whilst working with established technical constraints</li>
                        </ul>
                        <h3>Qualifications:</h3>
                        <ul>
                            <li>Have a degree in 3D Animation or equivalent;</li>
                            <li>Are based in Montreal and are available to work in-house;</li>
                            <li>Have a solid understanding of rigging, skinning and keyframing animation techniques;</li>
                            <li>Have thorough working knowledge of Maya, 3DS Max, Motion Builder or an equivalent 3D animation authoring software;</li>
                            <li>Are able to collaborate fluidly with designers, programmers and artists to ensure your work aligns with the game’s vision and technical requirements;</li>
                            <li>Have a high degree of autonomy, self-motivation and display strong problem-solving skills</li>
                        </ul>
                        <h3>Bonus Points:</h3>
                        <ul>
                            <li>Being an active gamer with interest in first-person shooters;</li>
                            <li>Have previous experience animating characters for shooters (i.e. locomotion and combat);</li>
							<li>Have a liking for robotic/mechanical character animation and the specific challenges that they pose;</li>
							<li>Are able to work in Unity and able to animate/integrate your work autonomously into Behavior Trees;</li>
							<li>Have previous notable Indie or AAA game development experience;</li>
							<li>Have solid interpersonal communication skills and are fluent in both English and French</li>
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
                        <p>Does that sound like you? If so, send us your CV and online portfolio at <a href="mailto:jobs@metricempire.com?subject=Character Animator Job Enquiry">jobs@metricempire.com</a> and we'll get back to you as soon as we can!</p>
                        
                        <h6>*Metric Empire commits to offer equal working chances to every individual, without regards based on the followings : age, sex, sexual orientation, physical disability, race, religion, citizenship, native country or any other possible particularities. We sincerely believe in a respectful and open-minded work environment, in which everyone can fully contribute to the organization's development.</h6>
                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;