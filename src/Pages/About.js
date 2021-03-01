import React from 'react'
import DownArrow from "../Assets/downArrow.svg"
export default function About ()
{
    
    return (
        <section className="about">
            <div className="infoSection">
                <input type="checkbox" id="tab1"></input>
                <label className="infoSection-label" htmlFor="tab1"><span className="whiteBorderButton">LEARN MORE ABOUT US <img src={DownArrow} alt="down arrow" /></span></label>
                <div className="infoSection-content">
                    <div>

                        <h2>Amelia's Bakery</h2>
                        <p>
                        Starting on Saturday and worked until Sunday, Amelia's bakery is a code challenge based on a splash page's mockup design. </p>
                        <p>
                        The project contains two sections:</p>
                        <ol>
                            <li>HTML version</li>
                            <ul>
                                <li>Github: <a href="https://github.com/dcartist/bakeryHTM" rel="noopener noreferrer" target="_blank">https://github.com/dcartist/bakeryHTML</a></li>
                                <li>Deployed: <a href="https://abakery.vercel.app" rel="noopener noreferrer" target="_blank">https://abakery.vercel.app</a></li>
                            </ul>
                            <li>React version</li>
                            <ul>
                                <li>Github: <a href="https://github.com/dcartist/bakery" rel="noopener noreferrer" target="_blank">https://github.com/dcartist/bakery</a></li>
                                <li>Deployed: <a href="https://ameliasbakery.vercel.app" rel="noopener noreferrer" target="_blank">https://ameliasbakery.vercel.app</a></li>
                            </ul>
                        </ol>
                        <p>
                        The HTML version is created with vanilla js. The features contain form validation and a modal. A user can enter their email and view a message if their email is valid on both login and signup. 
                        </p>
                        <p>
                        The second version is created with the react framework. The features contained in this projects are:
                        </p>
                        <ul>
                            <li><b>Form Validation</b>:  A user can enter their email and view a message if their email is valid on both login and signup. They must have a valid email address to proceed to the dashboard.</li>
                            <li><b>Modal</b>: The user can log in to the dashboard</li>
                            <li><b>Dashboard</b>: The user can function search through desserts from the MealDB API (<a href="https://www.themealdb.com/api.php" rel="noopener noreferrer" target="_blank">https://www.themealdb.com/api.php</a></li>
                        </ul>
                        <p>The npm packages in the react version are Node-Sass, Axios, React-Router-Dom, Semantic React UI (for global font default).</p>
                        <p>Both versions are mobile responsive.</p>

                    </div>
                </div>
            </div>

        </section>
    )
}
