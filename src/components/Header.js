import React from 'react'
import icon from '../assets/images/header_icon.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="image"><img src={icon} style={{width: 200, height: 200}} alt="" /></span>
                    <h1>Metric Empire Games</h1>
                    <p>A new independent game development studio in Montreal</p>
                </div>
            </section>
        )
    }
}

export default Header
