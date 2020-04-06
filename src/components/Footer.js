import React from 'react'

class Footer extends React.Component {
    render() {
        return (

            <section id="footer">                
                <ul className="icons">
                    <li><a href="http://www.facebook.com/MetricEmpire" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="http://www.twitter.com/TheMetricEmpire" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="http://www.linkedin.com/company/MetricEmpire" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="mailto:hello@metricempire.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2020 Metric Empire Inc., All rights reserved. </li>
                </ul>
            </section>
        )
    }
}

export default Footer
