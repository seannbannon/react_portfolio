
import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://seannbannon.github.io/SPACEINVADERS/">
                                    <img src={require ("../img/spaceinvaders.png")}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                {/* <p id="project"><a href="https://seannbannon.github.io/SPACEINVADERS/">Space Invaders</a></p> */}
                                <p id="repo"><a href="https://github.com/seannbannon/SPACEINVADERS">Space Invaders</a></p>

                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://seannbannon.github.io/DayPlanner/">
                                <img src={require ("../img/dayplanner.png")}
                                        className="card-img-top" alt="img-two" />
                                </a>
                                {/* <p id="project"><a href="https://seannbannon.github.io/DayPlanner/"> Day Planner</a></p> */}
                                <p id="repo"><a href="https://github.com/seannbannon/DayPlanner">Day Planner</a></p>

                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://seannbannon.github.io/WeatherApp/">
                                <img src={require ("../img/weather.png")}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p id="repo"><a href="https://github.com/seannbannon/WeatherApp"
                                >Weather App</a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://github.com/Argent-T/Drinky-Bird">
                                    <img src="img/screen1.jpg"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project-1</p>
                                <p id="repo"><a href="https://github.com/Argent-T/Drinky-Bird"
                                >https://github.com/Argent-T/Drinky-Bird</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://ana199816.github.io/Homework-03/">
                                    <img src="assets/img/screenshot pasw.PNG"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Try: Password Generator</p>
                                <p id="repo"><a href="https://github.com/Ana199816/Homework-03"
                                >https://github.com/Ana199816/Homework-03</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://asproject2.herokuapp.com/">
                                    <img src="assets/img/let's.travel.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project 2: Let's Travel</p>
                                <p id="repo"><a href="https://github.com/Ana199816/Project-2"
                                >https://github.com/Ana199816/Project-2</a></p>

                            </div>
                        </div>
                        <br></br>
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/Ana199816">
                            https://github.com/Ana199816</a> </p>
                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/ana-suvac-192057195/"
                            >https://www.linkedin.com/in/ana-suvac-192057195/</a></p>
                            <p>Email Address: anasuvac@yahoo.com</p>
                            <p>Phone Number:(850)-890-5740</p>
                            <a href="https://github.com/Ana199816/homework-16/blob/master/assets/resume/resume.pdf"
                            > Resume</a>

                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio