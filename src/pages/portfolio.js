
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
                                <a href="https://seannbannon.github.io/StraightVintage/">
                                <img src={require ("../img/vintage.png")}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p id="repo"><a href="https://github.com/seannbannon/StraightVintage"
                                >Straight Vintage</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://p2v2takeahike.herokuapp.com/">
                                <img src={require ("../img/takeahike.png")}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p id="repo"><a href="https://github.com/seannbannon/takeahikep2"
                                >Take a Hike</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://budgettracker5827.herokuapp.com/">
                                <img src={require ("../img/budget.png")}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p id="repo"><a href="https://github.com/seannbannon/budget_tracker"
                                >Budget Tracker</a></p>

                            </div>
                        </div>
                        <br></br>
                        <div className="gitProfile">
                            <p><a href="https://github.com/seannbannon">
                            Github Profile</a> </p>
                            <p><a href="https://www.linkedin.com/in/seanbannon1/"
                            >Linkedin Profile </a></p>
                            <p>Email Address: seannbannon@gmail.com</p>
                            <p>Phone Number:(708)408-7177</p>
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