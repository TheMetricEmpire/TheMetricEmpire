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
                <title>Level Designer | Metric Empire</title>
                <meta charset="UTF-8"/>
                <meta name="description"        content="Metric Empire is looking for a Level Designer!"/>
                <meta name="keywords"           content="job, video games, unity 3D, Level Designer, montreal, indie game development"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Level Designer | Metric Empire"/>
                <meta property="og:image"       content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                <meta property="og:description" content="Metric Empire is looking for a Level Designer!"/>
                <meta property="og:url"         content="https://www.metricempire.com/level-designer"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Level Designer | Metric Empire"/>
                <meta name="twitter:description"content="Metric Empire is looking for a Level Designer!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/level-designer"/>
                <meta name="twitter:image"      content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                </Helmet>

                <a name="jobs" />
                <section id="five" className="main style7">
                    <div className="container">
                        <header className="major">
                            <h2>Level Designer (Permanent, Full-Time)</h2>
                        </header>
                        <p>Date: January 27th, 2020</p>
                        <p>Metric Empire is a small independent game development studio located in the heart of downtown Montreal, inside the Gameplay Space. It is the perfect environment for those looking for a friendly team that’s passionate and driven, the ability to work in a human-scale, collaborative, creative environment and to share in the success and growth of a new indie studio.</p>
                        <p>Our growing team is currently searching for a Level Designer who will be in charge of conceptualizing and implementing, from ideation to finaling, the many rich, highly affordable gameplay environments of our first game, a fast-paced, highly-replayable FPS-Roguelite set in a stylish and colorful sci-fi world.</p>
                        <p>This a full-time, permanent position.</p>
                        <h3>Responsibilities:</h3>
                        <ul>
                            <li>Working under supervision of the Game Director and Technical Director;</li>
                            <li>Develop and maintain a solid understanding of the game’s core creative pillars, systems and features and their expected interaction in the target experience;</li>
                            <li>Build procedural levels and manage difficulty progression using Metric Empire’s proprietary level graphing editor and tools;</li>
                            <li>Design cohesive, affordable gameplay spaces that feature rich combat possibilities and long-term replayability and take care of their implementation from inception to debug;</li>
                            <li>Build level design prototypes and benchmarks to validate game systems, mechanics and features and to help refine the target moment-to-moment combat experience;</li>
                            <li>Iteratively balance and calibrate the game levels as a result of playtest feedbacks and technical recommendations;</li>
                            <li>Working within the established technical guidelines and performance constraints of the game and the Unity Engine;</li>
                            <li>Foster strong interdisciplinary communication with Art, Design and Programming;</li>
							<li>Participate in maintaining and updating asset banks throughout production, polish and debug;</li>
                            <li>Being resourceful and proactive in learning new tools and techniques</li>
                        </ul>
                        <h3>What you’ll need to qualify:</h3>
                        <ul>
                            <li>Be based in Montreal and available to work on-site;</li>
                            <li>At least 4 years of experience in the games industry as Level Designer;</li>
                            <li>Being credited on at least one published title as Level Designer;</li>
                            <li>Good understanding of single-player FPS level design patterns;</li>
                            <li>Autonomy in working within the Unity engine;</li>
                            <li>Solid interpersonal communication skills and team-first work ethics;</li>
                            <li>High degree of creativity, autonomy and strong problem-solving skills;</li>
                            <li>Being an active gamer with interest in first-person shooters;</li>
							<li>Excellent verbal and written communication skills;</li>
                        </ul>
                        <h3>Bonus Points:</h3>
                        <ul>
                            <li>Have knowledge of programming, scripting or artificial intelligence;</li>
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
                        <p>Does that sound like you? If so, send us your CV and online portfolio at <a href="mailto:jobs@metricempire.com?subject= Level Designer Job Enquiry">jobs@metricempire.com</a> and we'll get back to you as soon as we can!</p>
                        
                        <h6>*Metric Empire commits to offer equal working chances to every individual, without regards based on the followings : age, sex, sexual orientation, physical disability, race, religion, citizenship, native country or any other possible particularities. We sincerely believe in a respectful and open-minded work environment, in which everyone can fully contribute to the organization's development.</h6>
                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;