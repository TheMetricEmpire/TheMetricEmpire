import React from 'react'
import icon from '../assets/images/header_icon.png'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-130088165-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="image"><img src={icon} style={{width: 250, height: 250}} alt="" /></span>
                    <h1>Metric Empire</h1>
                    <h2>Game Studio</h2>
                </div>
            </section>
        )
    }
}

export default Header
