import React from 'react'
import icon from '../assets/images/header_melogo.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="image header"><a href="../"><img src={icon} alt="Metric Empire Company Logo" /></a></span>
                </div>
            </section>
        )
    }
}

export default Header
