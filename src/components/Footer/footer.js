import React from 'react';
import './Footer.css';

const footer = () => {
    return (
        <div className='footer'>
           <div>
            <h5>Q 1: How does React work? </h5>
            <p>Ans:A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.For instance, the following code displays “Hello World” on the page by rendering the element into a DOM node called root.Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript:</p>
           </div>
           <div>
            <h5>Q 2:How many defferent Props and State?</h5>
            <p>1.State:The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
            2.Props:Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
            </p>
           </div>
           <div>
            <h5>Q 3:How many work in Useeffect?</h5>
            <p>Ans:The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too)</p>
           </div>

        </div>
    );
};

export default footer;