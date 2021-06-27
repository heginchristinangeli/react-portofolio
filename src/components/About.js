import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="https://i.pinimg.com/564x/d0/3a/23/d03a2374c7e1f2aea18758230f7723ae.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {resumeData.aboutme}
               </p>
               <span>

               </span>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
                     <span>
                        {resumeData.email}
                     </span>
                    <br></br>
                    <span>
                        {resumeData.phone}
                     </span>
                    <br></br>
                     <span>
                        {resumeData.address}
                     </span>
                    <br></br>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}