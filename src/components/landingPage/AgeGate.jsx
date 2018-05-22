import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AgeGate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ageCheck: true,
            showText: false
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
            }

        } else {
            this.setState({ showText: !showText })
            console.log("Data Not Correct")
        }
    }

    getSecond() {
        setTimeout(function () {
            window.open("https://www.google.com/", "_self");
        }, 3000);
    }

    render() {
        const { ageCheck, showText } = this.state;
        if (ageCheck) {
            return (
                <div className="container" id="Body">

                    <div className="row">

                        <div className="col-12 col-sm-12">
                            <input ref="month" placeholder="MM" />
                            <input ref="day" placeholder="DD" />
                            <input ref="year" placeholder="YYYY" />
                        </div>

                        <input className="btn btn-ageverification btn-enter form-submit" onClick={this.ageCalculator} id="edit-enter" name="enter" value="ENTER" type="submit" />
                        <br /><br />
                        {this.state.showText && <Show />}
                    </div>

                </div>
            )
        } else {
            return (
                <div>
                    <h4>SORRY, YOU MUST BE OF LEGAL DRINKING AGE TO ENTER OUR SITE.</h4>
                    <p>You are now being redirected to<a href="https://www.google.com/" target="_blank" > Google</a></p>
                    <p>{this.getSecond()}</p>
                </div>
            )
        }
    }

}

class Show extends Component {
    render() {
        return (
            <div>Please Enter The Correct Value</div>
        )
    }
}



export default AgeGate;