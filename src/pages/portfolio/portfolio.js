import React from "react";
import BasicCard from "../../component/card";
import note from "../../Images/note_taker.png"
import alcoCall from "../../Images/alcoCallV3.png"
import alcocall2 from "../../Images/alcoCallV3.png"
import alcocall3 from "../../Images/alcoCallV3.png"
import weather from "../../Images/weatherApp.png"
import workDay from "../../Images/dayPlanner.png"



function Portfolio() {
return (
<div>
    <div>
        <div className="container">
      <div className="row">
        <div className="col-sm-7 col mb-2 mt-2">
          <h3 className="">Portfolio</h3>
        </div>
      </div>
    </div>

   
    <div className="container">
      <div className="row my-3">
        <div className="col-sm-4 col-md-6 col-lg-4 card-title-font">
        <BasicCard 
        Image={alcocall3}
        CardTitle="Project 3: The Alcocall App"
        HREF="https://alcocall.herokuapp.com/dashboard"
        buttonText1="Vist Site"
        HREF2="https://github.com/amaliawhay/alcocall"
        buttonText2="Review Code"
        />
        
         
        </div>
        
        <div className="col-sm-4 col-md-6 col-lg-4">
        <BasicCard 
        Image={alcocall2}
        CardTitle="Project 2: The Alcocall App"
        HREF="https://fathomless-cove-53726.herokuapp.com/"
        buttonText1=" Visit Site"
        HREF2="https://github.com/imartinez0753/alcoCall"
        buttonText2="Review Code"
        />
          
        </div>
      
      <div className="col-sm-4 col-md-6 col-lg-4">
        <BasicCard 
        Image={alcoCall}
        CardTitle="Project 1: The Alcocall App"
        HREF="https://darling-bee.github.io/Project-1-UCR-Extension/"
        buttonText1="Visit Site"
        HREF2="https://github.com/Darling-bee/Project-1-UCR-Extension"
        buttonText2="Review Code"
        />
        </div>
        </div>
    </div>
  
    <div className="container">
      <div className="row my-3">
        <div className="col-sm-4 col-md-6 col-lg-4">
        
          
        <BasicCard 
        Image={weather}
        CardTitle="Weather Dashboard"
        HREF="https://karazkos.github.io/weather_dashboard/"
        buttonText1="Visit Site"
        HREF2="https://github.com/KarazKOS/weather_dashboard"
        buttonText2="Review Code"
        />
        </div>
       
        <div className="col-sm-4 col-md-6 col-lg-4">
        <BasicCard 
        Image={note}
        CardTitle="Note Taker"
        HREF=" https://note-taker-yk.herokuapp.com/"
        buttonText1="Visit Site"
        HREF2="https://github.com/KarazKOS/note_taker"
        buttonText2="Review Code"
        />
        </div>

        <div className="col-sm-4 col-md-6 col-lg-4">
        <BasicCard 
        Image={workDay}
        CardTitle="Workday Scheduler"
        HREF="https://karazkos.github.io/workday_scheduler/"
        buttonText1="Visit Site"
        HREF2="https://github.com/KarazKOS/workday_scheduler"
        buttonText2="Review Code"
        />
        </div>
      </div>
    </div>
    </div>

</div>
    
)
}
export default Portfolio;