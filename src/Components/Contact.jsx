// Importing the necessary modules 
import React, { Fragment } from 'react'; 
import withRouter from './WithRouter';
import { useNavigate } from 'react-router-dom'; 

// Creating the Contact function component 
const Contact = (props) => {
    // Redirecting 
    // console.log(props); 
    // const navigate = useNavigate();
    setTimeout(() => {
        // Redirecting the user 
        // navigate('/about'); 
        props.router.navigate("/about"); 
    }, 3000)
    return(
        <Fragment>
            <div className="ui raised very padded text container segment"
            style={{marginTop: '80px'}} 
            > 
                <h3 className="ui header"> Contact </h3>
                <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore pariatur minima 
                    obcaecati qui. Alias in tempore provident rerum reiciendis? 
                    Tenetur praesentium natus quasi libero numquam hic eos labore architecto!
                </p>
            </div>
        </Fragment>
    )
}

// Exporting the Contact component 
export default withRouter(Contact); 