import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="sunrise-staffing-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-10">
                                <h3>SUNRISE STAFFING</h3>
                                <h1>PROFESSIONAL STAFFING FOR YOUR BUSINESS</h1>
                                <div className="find-staff-btn">
                                    <a href="javascript:;">FIND STAFF</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Banner;