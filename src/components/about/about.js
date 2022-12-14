import React from 'react';
import './about.css';
import about from '../../images/about.jpg';
import pdf from '../../resume/CV.pdf';

const About = ()  => {


    return (
        <div class="container-fluid">
                    <section id="about">
                            <div class="container mt-4 pt-4">
                                <h1 class="text-center"> <strong>About Me</strong></h1>
                                <div class="row mt-4">
                                    <div class="col-lg-4">
                                       <img src = {about} class= "imageAboutPage" alt="profile_image"/>
                                    </div>
                                    <div class="col-lg-8">
                                        <p> Junior Java Developer by Huisartsenzorg Research & Development at PharmaPartners.</p>
                                        <p> Working to become a Fullstack developer, but specializes in back-end development Java, have experiences with Front-end development (HTML, CSS, JavaScript/TypeScript) and front-end frameworks (Angular & React)</p>
                                        <div class="row mt-3">
                                            <div class="col-md-12">
                                                <ul>
                                                    <li>Name: Mignon Gakuba</li>
                                                    <li>Age: 25</li>
                                                    <li>Occupation: Junior Java Developer</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>
                                        </div>
                                        <div class="col-sm-2"><a href={pdf} class=" btn btn-dark btn btn-primary btn-filled btn-block">Download CV</a></div>
                                    </div>
                                </div>
                        </div>
                    </section>
        </div>

    )

}




export default About;