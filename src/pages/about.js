import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPage = () => {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
                </h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <img id="pic" img src={require ("../img/me.JPG")} alt="profile pic" width="100%" height="auto%" />
                                </div>

                                <div className="col-md-8">

                                <p>My name is Sean Bannon. I am an aspiring Full Stack Developer currently in a bootcamp with Northwestern University.</p>
    
    <p>I have a very assorted background in areas ranging from land conservation to substitute teaching.
        I have spent the majority of my twenties trying to figure out what I want to accomplish in my life. 
        After spending significant time traveling throughout the country as well as 15 other countries, I have discovered that what is most important to me is basically freedom. 
        This led me want to pursue a career in computer programming. 
        After learning the amount of power that is accessible through the knowledge of computer languages, I am all the more interested in becoming a Full Stack Developer. 
     </p>
        
    <p>My next goal is to find work as a full stack developer. I hope to gain enough knowledge to work in this sphere and continue gaining even more experience in the field.</p>
    <p>During my free time I like to write short stories, play guitar, and go for long walks.</p>
   </div>
    </div>
       </blockquote>
    </div>
</div>
</div>

        </div>
    )
}
export default mainPage