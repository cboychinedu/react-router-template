// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { useParams } from "react-router-dom"; 
import withRouter from './WithRouter';

// Creating the class UI Users 
class Users extends Component {
    // Creating the state 
    state = {
        routeParameter: null
    }

    // Execute this code the moment the component is rendered.
    componentDidMount() {
        console.log(this.props.router.params.users); 
        const routeParameter = this.props.router.params.users; 
        
        // Setting the state 
        this.setState({
            routeParameter: routeParameter
        })
    }
    render() {
        // Getting the parameter, then render the 
        // Jsx component 
        const { routeParameter } = this.state; 
        return(
            <Fragment>
                  <div className="ui raised very padded text container segment"
                    style={{marginTop: '80px'}} 
                    > 
                <h3 className="ui header"> Users Route Parameter Page </h3>
                <p className="para">
                    Route params for the User's <br /> 
                     The User Parameter is: {routeParameter}
                </p>
            </div>

            </Fragment>
        )
    }
}

// Exporting the User's Component 
export default withRouter(Users); 