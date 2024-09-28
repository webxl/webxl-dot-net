import pkg from "../../package.json";
import Name from "../components/name.jsx";
import SiteMenu from "../components/siteMenu.jsx";

const vars = {
  my_public_repo: pkg.url,
  profile_links: [
    { url: "https://github.com/webxl", name: "Github" },
    { url: "https://linkedin.com/in/webxl", name: "LinkedIn" },
    { url: "https://twitter.com/mattmotherway", name: "Twitter" },
  ],
};

export default () => (
  <section className="container mx-auto content-start px-4" id="about">
    <Name />
    <SiteMenu />
    <div className="content container px-6 py-4">
      <h2 className="text-2xl mb-3">Portfolio</h2>
      <h3 className="text-xl mb-3">
        <a href="https://inflation-planner.vercel.app/">Inflation Planner</a>
      </h3>
      <p>
        <a href="https://inflation-planner.vercel.app/">Inflation Planner</a> is
        a simple web application that helps you plan for inflation. It allows
        you to calculate the future value of your savings based on the current
        value, interest rate, rate or return, contributions, withdrawals and
        contributions, withdrawals and retirement time frame.
      </p>
      <ul className="my-4" style={{ listStyle: "circle inside" }}>

        <li className="mb-2">
          Calculates a savings balance over time, factoring in:
          <ul className="pl-8 my-2" style={{ listStyle: "disc inside" }}>
            <li className="mb-2">initial balance</li>
            <li className="mb-2">monthly contributions</li>
            <li className="mb-2">withdrawal amount</li>
            <li className="mb-2">withdrawal (retirement) start and end dates</li>
            <li className="mb-2">expected rate of return</li>
            <li className="mb-2">and last but not least, inflation rate</li>
          </ul>
        </li>
        <li className="mb-2">
          Graphs the savings balance over time using an interactive chart
          <ul className="pl-8 my-2" style={{ listStyle: "disc inside" }}>
            <li className="mb-2">
              Highlights the date contributions end and withdrawals begin
        </li>
            <li className="mb-2">
              Shows any shortfall in a different color
            </li>
          </ul>
        </li>
        <li className="mb-2">
          Allows the user to automatically correct a shortfall and conditionally
          keep the adjusted parameter value
        </li>
        <li className="mb-2">
          Source code:{" "}
          <a href="https://github.com/webxl/inflation-planner">Github</a>
        </li>
      </ul>
    </div>
  </section>
);
