import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <div>
            <h1>Questions Answering</h1>
            <div className='questions'>
                <div className="question">
                    <h2>⫸ How React works?</h2>
                    <p><b>React</b> is a declarative, efficient, flexible and an open-source JavaScript library for building user interfaces or UI components specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.</p>
                    <p>React uses <b>virtual DOM</b> to make rerender efficient and increase performance. A virtual DOM object is a representation of a real DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.</p>
                </div>
                <div className="question">
                    <h2>⫸ What are the difference between props and state?</h2>
                    <table border="1">
                        <tr>
                            <th>Props</th>
                            <th>State</th>
                        </tr>
                        <tr>
                            <td>Props are used to pass data from one component to another.</td>
                            <td>state is a local data storage that is local to the component only and cannot be passed to other components.</td>
                        </tr>
                        <tr>
                            <td>props are read-only.</td>
                            <td>state changes can be asynchronous way.</td>
                        </tr>
                        <tr>
                            <td>props can not be modified.</td>
                            <td>state can be modified using this.setState.</td>
                        </tr>
                        <tr>
                            <td>we can send state by using props to child component.</td>
                            <td>state actually stay where we declare it.</td>
                        </tr>
                    </table>
                </div>
                <div className="question">
                    <h2>⫸ How useState Hook works?</h2>
                    <div>
                        <p><b>useState(default value)</b> is the hook that allows us to track state in a function component.</p>
                        <ul>
                            <li><b>state variable</b> and <b>state variable</b> names are customizable like (color, setColor | user, setUser)</li>
                            <li>function that changes state and updates the value of state variable.</li>
                            <li>default value could be <b>0, 100, [], true, false</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answer;