import React from "react";
import bioPic from "../../Images/YK_pic.jpg"


function Home() {
    return (
        
      <div className="container">
        <div
          className="card py-4 px-4 m-5"
        >
          {/* <!-- Start Page Title --> */}
          <h3 className="h1Border m-0 py-2">My Story</h3>
          {/* <!-- End Page Title --> */}

          {/* <!-- Start of Main Image --> */}
          <div className="col-lg-12 px-0">
            <img
              src={bioPic}
              className="pull-left mainImage pt-4 pl-0 pb-3 pr-3"
              alt="Photo of Yulin Karaiscos"
            />
            {/* <!-- End of Image --> */}

            <p className="py-3">
              An accomplished Creative Strategist and Senior Designer with over
              20 years of experience in all aspects of art, digital media, and
              design. I have a proven-track record of pitching ideas, working
              with internal and external clients, and understanding client needs
              with a broad perspective to brand and promotional development. I
              have an absolute passion for effective design and visual
              communications.
            </p>
            <p className="pb-3">
              I have been successful in adapting to constant changes in visual
              communication techniques through the course of my life and career
              by constantly challenging myself to breakthrough creative walls
              and norms to always think outside of the box whether approaching a
              design or strategy project. I would describe myself as a confident
              and experienced business professional that takes team oriented
              concepts and leadership very seriously. I understand that working
              within a team system excels productivity and performance and with
              strong leadership can exceed expectations.
            </p>
          </div>
        </div>
      </div>
        // </div>

    )
}
export default Home;
