/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './contact.css';

const Contact = ()  => {

    return (
        <div class="container-fluid">
   <section id="contact">
     <div class="container mt-3 pt-4 contactContent">
      <h1 class="text-center">Contact Me</h1>
      <div class="row">
        <div class="col-lg-4 mt-4">
            <div>
                <strong>Address:</strong><br/>
                A795 Folsom Ave, Suite 600<br/>
                San Francisco, CA 94107<br/><br/>
                <strong>Phone:</strong><br/>
                +48 221 909 99<br/><br/>
                <strong>E-mail:</strong><br/>
                <a href="#">your.name@example.com</a>
            </div>
        </div>
      <div class="col-lg-8 mt-6">
        <form class="contact-form validate-form" id="contact-form">
            <div class="row st-4">
                <div class="form-group col-sm-6 container">
                    <input name="name" id="name" type="text" class="form-control bordered" placeholder="Name"/>
                </div>
                <div class="form-group col-sm-6 container">
                    <input name="email" id="email" type="text" class="form-control bordered" placeholder="E-mail address"/>
                </div>
            </div>
            <div class="form-group mt-4">
                <textarea name="message" id="message" cols="30" rows="7" class="form-control bordered" placeholder="Message"></textarea>
            </div>
            <div class="row">
            <div class="col-lg-1 mt-2 ">
                    <button class="btn btn-filled btn-primary btn-block">Confirm<i class="i-after ti-arrow-right"></i></button>
                </div>
            </div>
        </form>
        </div>
    </div>
     </div>              
    </section>
        </div>
 
    );
}

export default Contact;