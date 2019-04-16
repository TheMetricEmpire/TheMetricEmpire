import React from 'react'
import icon from '../assets/images/header_icon.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="image"><a href="../"><img src={icon} style={{width: 250, height: 250}} alt="Metric Empire Company Logo" /></a></span>
                    <h1>Metric Empire</h1>
                    <h3>Game Studio</h3>
                </div>
            </section>
        )
    }
}

export default Header
