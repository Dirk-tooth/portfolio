import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trevor Davis</h1>

        <div className="workExperience">
          <h3>Digital Product Manager and Team Lead</h3>
          <h6>Jun 2018 – Present • 1 yr 9 mos</h6>
          <p small>
            As our organization’s first Digital Product Manager, I teamed with
            customers, other product managers, and engineers across the division
            to develop a comprehensive, customer-centric, strategy designed to
            leapfrog competition across the full breadth of the digital customer
            journey.
          </p>
          <p small>
            I worked closely with our sales and engineering teams, facilitating
            ideation events, collecting voice of the customer to ensure that our
            products and strategy were focused sharply on the needs of our
            customers and the market.
          </p>
          <p small>
            Beyond building the strategy for our digital product offerings, I
            worked closely with development teams to ensure delivery of the
            right products. I worked with cross functional teams on and off
            shore on hardware, firmware, and software design for a range of
            products and tools including IIoT monitoring devices, web and mobile
            applications, and a design language system.
          </p>
          <p small>
            I also worked with internal teams on defining and developing
            architecture for our corporate customer digital experience, our
            DevOps standards, and development best practice and standard tools
            to help increase quality, supportability, and reusability across the
            organization.
          </p>
        </div>

        <div className="workExperience">
          <h3>Agile Trainer and Facilitator</h3>
          <h6>Oct 2017 – Present • 2 yrs 5 mos</h6>
          <p small>
            Selected to pioneer Agile and Scrum across digital and physical
            product engineering teams, our small team of champions were tasked
            with traveling across business units, division, and locations for
            the Weir Group, to begin the organization's transformation from
            Waterfall to Agile.
          </p>
          <p small>
            Our team worked with leadership teams, coaching them on their
            responsibilities during the transition and implementation of Agile
            as well as conducted Agile training sessions for teams transitioning
            to Scrum across the organization.
          </p>
          <p small>
            In addition to Scrum trainings, I facilitated Design Thinking
            sessions on a variety of products and topics independently and with
            larger facilitation teams and consulted with teams across the
            organization to help reinforce and improve Agile practices and
            principles.
          </p>
        </div>

        <div className="workExperience">
          <h3>Application Engineer</h3>
          <h6>Jan 2017 – Jun 2018 • 1 yr 6 mos</h6>
          <p small>
            As an applications engineer, I worked in a fast-paced team to
            deliver solutions to a new smart factory initiative across the
            global organization
          </p>
          <p small>
            Built scalable, reliable applications that were deployed across the
            globe with minimal configuration and simple installation at any site
          </p>
          <p small>
            Contributed to the full stack code base working on front end design,
            APIs, and CI/CD pipelines to keep multiple sites secure and
            up-to-date without any reconfiguration by the end users
          </p>
          <p small>
            Worked closely with end users to provide feedback and direction
            during development to deliver the solutions that actually solved end
            user pain points
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
