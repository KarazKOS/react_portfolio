import React from "react";

function Contacts() {
    return (
        <div>
<div className="container">
			{/* <div className="row">
				<div className="col-sm-8 mb-4 mt-2">
					<h3 className="h3">Connect with me</h3>
				</div>
			</div>
			<input className="form-control" type="text" placeholder="Name" />
			<br />
			<input className="form-control" type="text" placeholder="Email  " />
			<br />

			<div className="form-group">
				<label for="exampleFormControlTextarea1"> </label>
				<textarea
					className="form-control"
					placeholder="Message"
					id="exampleFormControlTextarea1"
					rows="3"
				></textarea>
			</div> */}
			<section className="row-lg-12 py-4 px-4">
            <div className="card w-100%">
              <div className="card-body">
                <h5 className="card-title">Contact Information</h5>
                <p className="card-text">Yulin Karaiscos</p>
                <p className="card-text">Phone: 909.210.2814</p>
                <p className="card-text">Email: yulin@reaktioncreative.com</p>
                <p className="card-text">www.yulinkaraiscos.com</p>
                <a href="https://www.linkedin.com/in/yulinkaraiscos/" className="btn btn-dark mt-3 text-sm">LinkedIN</a>
                <a href="https://github.com/KarazKOS" className="btn btn-dark mt-3 text-sm">GitHub</a>
              </div>
            </div>
            <div className="card w-100% mt-3">
              <div className="card-body">
                <h5 className="card-title">Message Me</h5>
                <form>
                  <div className="form-group connectLabel mt-3">
                    <label for="formGroupExampleInput">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="form-group connectLabel">
                    <label for="formGroupExampleInput2">E-mail Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </form>
                <div className="form-group connectLabel">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control rounded-0"
                    id="exampleFormControlTextarea1"
                    rows="10"
                  ></textarea>
                  <button type="submit" className="btn btn-dark mt-3 text-sm">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            
          </section>
		</div>

        </div>
    )
}

export default Contacts;
