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
                <title>Community Developer | Metric Empire</title>
                <meta charset="UTF-8"/>
                <meta name="description"        content="Metric Empire is looking for a Community Developer!"/>
                <meta name="keywords"           content="job, video games, unity 3D, community developer, comdev, montreal, indie game development"/>
                <meta name="author"             content="Metric Empire Inc."/>
                <meta property="og:title"       content="Community Developer | Metric Empire"/>
                <meta property="og:image"       content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                <meta property="og:description" content="Metric Empire is looking for a Community Developer!"/>
                <meta property="og:url"         content="https://www.metricempire.com/community-developer"/>
                <meta property="og:type"        content="website"/>
                <meta name="twitter:card"       content="summary"/>
                <meta name="twitter:title"      content="Community Developer | Metric Empire"/>
                <meta name="twitter:description"content="Metric Empire is looking for a Community Developer!"/>
                <meta name="twitter:url"        content="https://www.metricempire.com/community-developer"/>
                <meta name="twitter:image"      content="https://www.metricempire.com/static/OG_Image-4b956bacb5ffddd7b7a89674f9ea3892.jpg"/>
                </Helmet>

                <a name="jobs" />
                <section id="five" className="main style7">
                    <div className="container">
                        <header className="major">
                            <h2>Community Developer (Contract, Full-Time)</h2>
                        </header>
                        <p>Date: January 20th, 2020</p>
                        <p>Metric Empire is a small independent game development studio located in the heart of downtown Montreal, inside the Gameplay Space. It is the perfect environment for those looking for a friendly team that’s passionate and driven, the ability to work in a human-scale, collaborative, creative environment and to share in the success and growth of a new indie studio.</p>
                        <p>Our growing team is currently in need of an experienced Community Developer who will take charge of our community development strategy and who will fluidly engage, build up and maintain the player community for our first title, an innovative FPS-Roguelite set in a stylish and colorful sci-fi world.</p>
                        <p>This a full-time, contractual position for a duration of 10 months, with possibility to convert into a permanent position.</p>
                        <h3>Responsibilities:</h3>
                        <ul>
                            <li>Build a comprehensive community-development strategy for the game across all phases of its development;</li>
                            <li>Engage players directly on all major player communities (e.g. Reddit, Discord, Twitter, Facebook, etc. ) with the right frequency, priority and communication tone to maximize campaign results;</li>
                            <li>Coordinate or support joint communication campaigns with business partners, media and publishers;</li>
                            <li>Set community-development KPIs and periodically report comdev campaign results to the team;</li>
                            <li>Gather, process and produce insights reports on community reactions, trends, feedbacks and needs for actionable use by the production team and business team;</li>
                            <li>Develop and maintain a comdev playbook that align in tone with the game’s target audience;</li>
                            <li>Closely manage community relations in early-access and post-launch windows: managing expectations on content updates, gathering feedbacks and defusing crises as required;</li>
                            <li>Help prepare for and take part in focus tests, playtests, trade shows and major industry events;</li>
                        </ul>
                        <h3>Qualifications:</h3>
                        <ul>
                            <li>A minimum of 2 years of experience in community development or social media marketing;</li>
                            <li>Highly flexible communicator in both style and tone, constructive and inclusive;</li>
                            <li>Natural confidence in public speaking, networking, newsletter writing, etc.;</li>
                            <li>Excellent written and verbal communication skills, both in English and French;</li>
                            <li>Keen understanding of the nuances and particularities of all social media platforms;</li>
                            <li>Deep understand and interest in the gaming industry, culture and trends;</li>
                        </ul>
                        <h3>Bonus Points:</h3>
                        <ul>
                            <li>Being an active gamer with interest in first-person shooters;</li>
                            <li>Basic knowledge of picture and video editing tools;</li>
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
                        <p>Does that sound like you? If so, send us your CV and online portfolio at <a href="mailto:jobs@metricempire.com?subject=Community Developer Job Enquiry">jobs@metricempire.com</a> and we'll get back to you as soon as we can!</p>
                        
                        <h6>*Metric Empire commits to offer equal working chances to every individual, without regards based on the followings : age, sex, sexual orientation, physical disability, race, religion, citizenship, native country or any other possible particularities. We sincerely believe in a respectful and open-minded work environment, in which everyone can fully contribute to the organization's development.</h6>
                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;