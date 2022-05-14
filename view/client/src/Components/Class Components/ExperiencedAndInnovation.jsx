import React from 'react';
import job from '../../images/mask-group-two.png'


class Banner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="staffing-job-seekers pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="staffing-employers-img">
                                <img src={job} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 staffing-job-seekers-content">
                            <h1>Experienced and Innovation</h1>
                            <p>Those who don't change, end up a relic of the past wishing they had read the tea leaves correctly. Sunrise staffing uses our extensive industry knowledge in combination with technology to create innovative solutions that produces results
                               Thank to all clients and employees
                               Thank you to all of our clients and employees who have made Sunrise staffing a leading choice Contingent Workforce Solutions all over Ohio!</p>
                            <a href="javascript">READ MORE</a>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}

export default Banner;