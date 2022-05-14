import React from 'react';
import employers from '../../images/mask-group-one.png'


class CustomStaffing extends React.Component {
    render() {
        return (
            <React.Fragment>
               <section className="staffing-employers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 staffing-employers-content">
                            <h1>Custom Staffing Partners</h1>
                            <p>When everything is on the line, you have to have a partner you can trust to ensure victory.
                               Sunrise staffing has been delivering strategic staffing solutions for over 60 years.
                               Our goal - delivering victory for our clients!</p>
                            <a href="javascript">READ MORE</a>
                        </div>
                        <div className="col-md-6">
                            <div className="staffing-employers-img">
                                <img src={employers} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}

export default CustomStaffing;