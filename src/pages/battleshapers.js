import React from "react";
import ReactDom from "react-dom";
import Helmet from "react-helmet";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Link } from "gatsby"
import Layout from '../components/layout';
import ada from '../assets/images/ada_conceptart.jpg'
import bslogo from '../assets/images/BS_Logo_Header.png'
import steam from '../assets/images/Icon_AvailableOnSteam.png'
import discord from '../assets/images/Icon_JoinDiscord.png'
import adakeyart from '../assets/images/BS_Ada.jpg'
import screenshot01 from '../assets/images/screenshots/screenshot01.jpg'

import ImageGallery from 'react-image-gallery';

const images = [
          {
              original: 'https://picsum.photos/id/1018/1000/600/',
              thumbnail: 'https://picsum.photos/id/1018/250/150/',
          },
          {
              original: 'https://picsum.photos/id/1015/1000/600/',
              thumbnail: 'https://picsum.photos/id/1015/250/150/',
          },
          {
              original: 'https://picsum.photos/id/1019/1000/600/',
              thumbnail: 'https://picsum.photos/id/1019/250/150/',
          }
];

class MyGallery extends React.Component {
    render() {        
        return <ImageGallery items={images} />;
    }
}

class Homepage extends React.Component {

    render() {
        const siteTitle = "Become a Friend of the Empire";
        const mailchimp_url = "https://facebook.us19.list-manage.com/subscribe/post?u=fdad2467938bbae637fab0fab&amp;id=06e3865496";
        // a basic form


        return (
            <Layout> 
                <Helmet>
                title={siteTitle}
                <title>Metric Empire | Battle Shapers</title>
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

                <section id="one" className="main style8 special">
                    <span className="image headertall"><img src={bslogo} alt="Metric Empire Company Logo" /></span>
                </section>                
                <section id="two" className="main style8 special">
                    <div className="grid-wrapper">
                        <div className="col-6">
                          <span className="image fit"><img src={adakeyart} alt="Ada, our game's protagonist" /></span>
                        </div>
                        <div className="col-6">
                         <h2b>Get ready for roguelite overdrive</h2b><br></br>
                         <p>Wield futuristic weapons and unique shaper powers in an all-out battle-hacking duel against cunning robot Overlords. Liberate your shapeshifting city from the grips of a malevolent AI and its hordes of robots in this blazing-fast, sci-fi FPS roguelike.</p>                          
                        <a href="https://store.steampowered.com/app/1421290/ProtoRogue/"><img src={steam} alt="Link to Steam"/></a>
                        <a href="https://discord.gg/uebPb466wH"><img src={discord} alt="Link to Discord"/></a>
                        </div>
                        <div></div>
                    </div>                    
                    <div className="grid-wrapper">
                        <div className="col-3">
                            <span className="image fit"><a href="../assets/images/screenshots/screenshot01.jpg"><img src={screenshot01} alt="Screenshot01"/></a></span>
                        </div>
                        <div className="col-3">
                            <span className="image fit"><img src={adakeyart} alt="Co-Founder Nicholas Routhier" /></span>
                        </div>
                        <div className="col-3">
                            <span className="image fit"><img src={adakeyart} alt="Co-Founder Nicholas Routhier" /></span>
                        </div>
                        <div className="col-3">
                            <span className="image fit"><img src={adakeyart} alt="Co-Founder Nicholas Routhier" /></span>
                        </div>
                        <div className="col-3">
                            <span className="image fit"><img src={adakeyart} alt="Co-Founder Nicholas Routhier" /></span>
                        </div>
                        <div className="col-3">
                            <span className="image fit"><img src={adakeyart} alt="Co-Founder Nicholas Routhier" /></span>
                        </div>
                        <div className="col-3">
                            <span className="image fit"><img src={adakeyart} alt="Co-Founder Nicholas Routhier" /></span>
                        </div>
                    </div>
                </section>
                <section id="two" className="main style9">
                    <div className="grid-wrapper">
                        <div className="col-6">
                        <h2b>Key Features</h2b><br></br>
                          <h3b>ASSAULT</h3b>
                          <ul>
                            <li>Experience fast-paced, aggressive combat with over 50 unlockable weapons, abilities, and suit boosters</li>
                            <li>Craft emergent synergies with hundreds of randomized equipment affixes</li>
                            <li>Use your powerful shaper gauntlet to tear through enemies and break them apart to fuel your own energy</li>
                            </ul>
                        <h3b>RESHAPE</h3b>
                          <ul>
                            <li>Put the odds in your favor by wielding novel shaper powers that let you take control of your progression</li>
                            <li>Manipulate rewards and counter the overlords' challenges by deploying your own traps, power-ups and effects in them</li>
                            <li>Acquire powerful, permanent suit upgrades that increase your powers and let you access secret rooms and hidden passages</li>
                            </ul>
                        <h3b>OVERCOME</h3b>
                          <ul>
                            <li>Every stage is an escalating duel of wits. Learn to anticipate each Overlord's set of unique shaper powers and dangerous retaliations</li>
                            <li>Tackle towers held by hordes of cunning robots by anticipating their strengths and exploiting their weaknesses</li>
                            <li>Defeat all Overlords to gain access to the final tower and face-off against the Rogue AI</li>
                            </ul>
                        <h3b>SHREDDING SOUNDTRACK</h3b>
                          <ul>
                            <li>Assault boss towers alongside a blazing, adrenaline-pumping rock soundtrack that will have you diving head-on into the action</li>
                            </ul>
                        </div>
                        <div className="col-6">
                        <h2b>About the Game</h2b><br></br>
                         <p>Battle Shapers is a fast-paced sci-fi FPS-Roguelite set in a colorful shapeshifting megacity built by a sentient, centralized AI and its field agents, the Shapers. Following a mysterious event known as the Severing, the centralized AI has gone rogue, turning its Shapers into dangerous robot Overlords that have seized and weaponized the city's arcologies, unleashing a war on humanity. Take on the role of Ada, the last known Shaper, as you set out to retake New Elysium from the grips of the Rogue AI and its Overlords.</p>
                         <p>Armed with an arsenal of futuristic weapons, abilities, and your powerful shaper gauntlet, you will dive, shoot, and smash your way through cunning enemy machines in a frantic, fast-paced combat focusing on relentless aggression, risk-taking, and close-range warfare.</p>
                         <p>In the war against the Rogue AI, combat is only half the battle. As a Shaper, you will use your powers to hack the shapeshifting arcologies, letting you manipulate risk-reward opportunities to take control of your progression or counter the overlords' challenges by deploying your own traps and power-ups. Remain on your guard, as each overlord will also use their own corrupted shaper powers to retaliate against you, deploying elite enemies, traps, and effects of their own, escalating tower difficulty.</p>
                         <p>Each attempt at bringing down the Rogue AI is an opportunity to discover new weapons and abilities. Explore each one of the city's colorful arcologies to find hidden ciphers that can be decrypted to unlock powerful upgrades. Invest in powerful talents to permanently increase your survivability and combat potential in future runs. Acquire hidden Suit Upgrades to permanently unlock extra combat and shaping powers.</p>
                        </div>
                    </div> 
                </section>
            </Layout>
        );
                        }
}

export default Homepage;