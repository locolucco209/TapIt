import React from 'react';
import './index.css';


class age_gate extends React.Component {
    
    ageCalculator(event){
        event.preventDefault();
        console.log("click")
    }

    render() {

        return (
            <div className="container" id="Body">

                <div className="row">
                    <h1>When were you born?</h1>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12">
                        <input className="form-control required digits form-text required" placeholder="DD" minlength="1" maxlength="2" min="1" max="31" pattern="[0-9]*" tabindex="2" id="edit-birthday" name="birthday" value="" size="2" aria-required="true" type="text" />
                        <input className="form-control required digits form-text required" placeholder="MM" minlength="1" maxlength="2" min="1" max="12" pattern="[0-9]*" tabindex="1" id="edit-birthmonth" name="birthmonth" value="" size="2" aria-required="true" type="text" />
                        <input className="form-control required digits birthdate form-text required" placeholder="YYYY" minlength="4" maxlength="4" min="1898" max="2018" pattern="[0-9]*" tabindex="3" id="edit-birthyear" name="birthyear" value="" size="4" aria-required="true" type="text" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12">
                        <input className="btn btn-ageverification btn-enter form-submit" onClick={this.ageCalculator} id="edit-enter" name="enter" value="ENTER" type="submit" />
                    </div>
                </div>


            </div>

        );
    }
};

export default age_gate;