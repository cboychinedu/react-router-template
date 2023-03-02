// Importing the necessary modules 
import React, { Fragment } from 'react'; 

// Creating the About function component 
const About = () => {
    return(
        <Fragment>
            <div  className="ui raised very padded text container segment"
            style={{marginTop: '80px'}} >
                <h3 className="ui header"> About </h3>
                <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore pariatur minima 
                    obcaecati qui. Alias in tempore provident rerum reiciendis? 
                    Tenetur praesentium natus quasi libero numquam hic eos labore architecto!
                </p>   
            </div>
        </Fragment>
    )
}

// Exporting the About component 
export default About; 