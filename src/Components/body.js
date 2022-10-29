import React from "react";
import SectionOne from "./form.js"


function Content() {
    return(
        <div className="row">
            <div className="col-lg-6">
                <h1>Hey Buddy! Where Are You Flying to ?</h1>
                <br />
                <button className="btn btn-lg btn-outline-none">Explore Now</button>
            </div>
            <div className= "col-lg-6">
                <div className= "position">
                    <div className= "position-filters">
                        <label className= "tab-label active-tab">Book a Flight</label>
                        <label className= "tab-label" >Book an Hotel</label>
                        <label classname= "tab-label">Rent a car</label>
                    </div>
                        <div className= "position-group">
                            <div className= "position-post">
                                <div className= "book-seat">
                                <button type="button" className=" btn btn-sm btn-warning butt">One Way</button>
                                <button type="button" className = "btn btn-sm btn-outline-warning butt">Round Trip</button>
                                </div>
                            </div>
                            <section id="section-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Travelling From</label>
                                        <SectionOne />
                                    </div>
                                    <div className= "col-lg-12">
                                        <label>Travelling To</label>
                                        <SectionOne />
                                    </div>
                                    
                                    <div >
                                        Departure Date
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="date" />    
                                        </div>
                                        <div className="col-md-12">
                                        <label>
                                            Adults
                                        </label>
                                        <select id="sel_id" name="sel_name"  onchange="this.form.submit();">
                                            
                                            <option value="6">1 </option> 
                                            <option value="13">2</option> 
                                            <option value="14">3 </option>                   
                                        </select>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-md btn-warning SearchBtn">Search Flights</button>
                                    </div>

                                </div>
                            </section>
                        </div> 
                </div>
            </div>

        </div>
    )
}

export default Content;