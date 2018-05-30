import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin/SocialLogin.js'
import './AgeGate.css';

class AgeGate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ageCheck: true,
            showText: false,
            showSocial: false
        };

        this.ageCalculator = this.ageCalculator.bind(this);
    }

    ageCalculator() {
        const { ageCheck, showText } = this.state;

        let birth_year = this.refs.year.value;
        let birth_month = this.refs.month.value;
        let birth_day = this.refs.day.value;

        let today_date = new Date();
        let today_year = today_date.getFullYear();
        let today_month = today_date.getMonth();
        let today_day = today_date.getDate();
        let age = today_year - birth_year;

        if ((birth_year !== null && birth_year !== "") && (birth_month !== null && birth_month !== "") && (birth_day !== null && birth_day !== "")) {

            if (today_month < (birth_month - 1)) {
                age--;
            }
            if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
                age--;
            }
            console.log(age);

            if (age < 21) {
                this.setState({ ageCheck: false })
            } else {
                this.setState({ showSocial: true })
            }

        } else {
            this.setState({ showText: !showText })
            console.log("Data Not Correct")
        }
    }

    getSecond() {
        setTimeout(function () {
            window.open("https://www.consumer.ftc.gov/features/feature-0028-we-dont-serve-teens", "_self");
        }, 3000);
    }

    render() {
        const { ageCheck, showText } = this.state;
        if (ageCheck) {
            return (
                <div className="container-fluid">
                    <div className="row ageGate">

                        <div className="col ml-3 mb-4">
                            {this.state.showSocial && <SocialLogin />}
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 mt-2">
                            <input className="input-age" ref="month" placeholder="MM" />
                            <input className="input-age" ref="day" placeholder="DD" />
                            <input className="input-age" ref="year" placeholder="YYYY" />
                        </div>

                        <div className="col-12 col-sm-12 col-md-12">
                            <input className="btn btn-warning age-submit" onClick={this.ageCalculator} id="edit-enter" name="enter" value="Submit" type="submit" />
                            <br /><br />
                            {this.state.showText && <Show />}
                        </div>

                      

                    </div>
                </div>
            )
        } else {
            return (
                <div className="row ageGate">
                    <div className="col-12 col-sm-12 col-md-12">
                        <h4>SORRY, YOU MUST BE OF LEGAL DRINKING AGE TO ENTER OUR SITE.</h4>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12">
                        <p>You are now being redirected to<a href="https://www.consumer.ftc.gov/features/feature-0028-we-dont-serve-teens" target="_blank" > www.dontserveteens.gov.</a></p>
                        <p>{this.getSecond()}</p>
                    </div>
                </div>
            )
        }
    }

}

class Show extends Component {
    render() {
        return (
            <div>
                <p>Please enter a valid date of birth</p>
            </div>
        );
    }
}



export default AgeGate;