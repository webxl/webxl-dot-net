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
      <p className="mb-4">
        <a href="https://inflation-planner.vercel.app/">
          <img
            className="outline outline-1 outline-gray-300 rounded-sm"
            src="/images/inflation-planner.png"
            alt="Inflation Planner"
            height="200"
            width="300"
          />
        </a>
      </p>
      <p className="mb-4">
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
            <li className="mb-2">
              withdrawal (retirement) start and end dates
            </li>
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
            <li className="mb-2">Shows any shortfall in a different color</li>
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

      <h3 className="text-xl mb-3">
        <a href="https://btc-charts-lovat.vercel.app/">BTC Charts</a>
      </h3>
      <p className="mb-4">
        <a href="https://btc-charts-lovat.vercel.app/">
          <img
            className="outline outline-1 outline-gray-300 rounded-sm"
            src="/images/btc-charts.png"
            alt="BTC Charts"
            height="200"
            width="300"
          />
        </a>
      </p>
      <p className="mb-4">
        <a href="https://btc-charts.vercel-lovat.app/">BTC Charts</a> is a simple web
        application that allows you to view historical price data for Bitcoin
        (BTC) while comparing it to a popular trend line known as the Power Law.
        You can also configure the x and y axes to display in logarithmic scale.
      </p>
      <ul className="my-4" style={{ listStyle: "circle inside" }}>
        <li className="mb-2">
          This project shares some of the components and styles from Inflation Planner, but
          also pushes <a href="https://nivo.rocks/">Nivo charts</a> to its
          limits animating a large amount of data with logarithmic scales.
        </li>
        <li className="mb-2">
          Backend written in <a href="https://www.python.org/">Python</a> using{' '}
          <a href="https://flask.palletsprojects.com/">Flask</a> and{' '}
          <a href="https://pandas.pydata.org/">Pandas</a>.
        </li>
        <li className="mb-2">
          Hosted on <a href="https://vercel.com/">Vercel</a> along with their{' '}
          <a href="https://www.postgresql.org/">PostgreSQL</a> database service.
        </li>
        <li className="mb-2">
          Source code: <a href="https://github.com/webxl/btc-charts">Github</a>
        </li>
      </ul>

      <h3 className="text-xl mb-3">
        <a href="https://tustinirvineinternalmedicine.com/">
          Tustin Irvine Internal Medicine
        </a>
      </h3>
      <div className="flex flex-row gap-4 mb-4">
        <div className="flex-none">
          <a href="https://tustinirvineinternalmedicine.com/">
            <img
              className="outline outline-1 outline-gray-300 rounded-sm"
              src="/images/tustin-irvine-internal-medicine.png"
              alt="Tustin Irvine Internal Medicine"
              width="150"
            />
          </a>
        </div>
        <div className="flex-auto">
          <ul className="my-4" style={{ listStyle: "circle inside" }}>
            <li className="mb-2">
              Tustin Irvine Internal Medicine is a medical practice that
              provides a wide range of services to patients in the Tustin and
              Irvine areas.
            </li>
            <li className="mb-2">
              This marketing website was built using{' '}
              <a href="https://getbootstrap.com/">Bootstrap</a> and is fully
              responsive.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
