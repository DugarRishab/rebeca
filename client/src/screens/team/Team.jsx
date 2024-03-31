import React, { useRef } from "react";
import Heading from "../../components/Heading/Heading";
import TeamHeading from "../../components/Team/TeamHeading";
import "./Team.css";
function Team() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Function to handle dropdown change
  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    let ref;
    // Determine which section to scroll to based on the selected option
    switch (selectedOption) {
      case "section1":
        ref = section1Ref;
        break;
      case "section2":
        ref = section2Ref;
        break;
      case "section3":
        ref = section3Ref;
        break;
      default:
        ref = null;
    }
    // Scroll to the selected section
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const intro =
    "Prepare to be swept away as you put your best foot forward in this epic celebration of creativity and culture tha promises you laughter,joy and memories that will last you a lifetime and more.Keep your water bottles handy and get ready to feel the heat cuz the 83rd edition of REBECA is back with a bang!";
  return (
    <div>
      <br />
      <br />
      <Heading title={"MEET WITH OUR TEAM"} subTitle={intro} />
      <p className="heading1">Select a Team you want to view</p>
      <div className="cars">
        <select onChange={handleDropdownChange}>
          <option value="section1">Head</option>
          <option value="section2">Management Team</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      {/* <TeamHeading date={""} datetxt={"saptami"} customcss={""} /> */}
      <br />
      <br />
      <div className="HeadPortion">
        <div ref={section1Ref}>
          <h1 className="heading1">Head</h1>
          <div className="Person1">
            <img
              src="/assets/imgs/team/man.png"
              className="teamimage"
              alt="person1"
            />
            <h4 className="heading1">Albert Einstein</h4>
            <div className="intro2">
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="row2">
            <div className="Person1">
              <img
                src="/assets/imgs/team/man.png"
                className="teamimage"
                alt="person1"
              />
              <h4 className="heading1">Albert Einstein</h4>
              <div className="intro2">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="Person1">
              <img
                src="/assets/imgs/team/man.png"
                className="teamimage"
                alt="person1"
              />
              <h4 className="heading1">Albert Einstein</h4>
              <div className="intro2">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="Person1">
              <img
                src="/assets/imgs/team/man.png"
                className="teamimage"
                alt="person1"
              />
              <h4 className="heading1">Albert Einstein</h4>
              <div className="intro2">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div ref={section2Ref}>
          <h1 className="heading1">Management Team</h1>
          <div className="row2">
            <div className="Person1">
              <img
                src="/assets/imgs/team/logo192.png"
                className="teamimage"
                alt="person1"
              />
              <h4 className="heading1">Albert Einstein</h4>
              <div className="intro2">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="Person1">
              <img
                src="/assets/imgs/team/logo192.png"
                className="teamimage"
                alt="person1"
              />
              <h4 className="heading1">Albert Einstein</h4>
              <div className="intro2">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="Person1">
              <img
                src="/assets/imgs/team/logo192.png"
                className="teamimage"
                alt="person1"
              />
              <h4 className="heading1">Albert Einstein</h4>
              <div className="intro2">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="Person1">
              <img
                src="/assets/imgs/team/logo192.png"
                className="teamimage"
                alt="person1"
              />
              <h4 className="heading1">Albert Einstein</h4>
              <div className="intro2">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="Person1">
              <img
                src="/assets/imgs/team/logo192.png"
                className="teamimage"
                alt="person1"
              />
              <h4 className="heading1">Albert Einstein</h4>
              <div className="intro2">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
            <div className="Person1">
              <img
                src="/assets/imgs/team/logo192.png"
                className="teamimage"
                alt="person1"
              />
              <h4 className="heading1">Albert Einstein</h4>
              <div className="intro2">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
