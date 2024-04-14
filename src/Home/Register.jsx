import React from "react";
const subtitle = "Save the Day";
const title = (
  <h2 className="title">
    Join on Day long Free Workshop for{" "}
    <b>
      Advacne <span>Mastering</span>
    </b>{" "}
    on Sales
  </h2>
);
const desc = "Limited Time Offer!!";
function Register() {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="cointainer">
        <div className="row row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subtitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>Register Now!</h4>
              <form className="register-form">
                <input
                  type="text"
                  className="reg-input"
                  name="name"
                  placeholder="username"
                />
                <input
                  type="email"
                  className="reg-input"
                  name="email"
                  placeholder="email"
                />
                <input
                  type="number"
                  className="reg-input"
                  name="Phone-number"
                  placeholder="Phone-Number"
                />
                <button type="submit" className="lab-btn">
                  Register Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
