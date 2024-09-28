import pkg from "../../package.json";
import Name from "../components/name.jsx";
import SiteMenu from "../components/siteMenu";

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
      <h2 className="text-2xl mb-3">About Me</h2>
      <p className="mb-3">
        I'm a full-stack software engineer specializing in web and mobile apps,
        but I also have a vast DevOps background that stretches back to the
        dotcom days. After leaving Silicon Valley in the early 2000s, I spent a
        few years in Los Angeles learning the LAMP stack and JavaScript
        frameworks before joining a CRM company as a full-fledged developer.
      </p>
      <p className="mb-3">
        I currently live in Reno, NV with my crazy-beautiful wife and kids. My
        current technical interests include machine learning, home automation,
        and security. My hobbies include skiing, hiking, golfing, economics and
        3d printing.
      </p>
      <h3 className="text-xl mb-3">webXL</h3>
      <p className="mb-3">
        I ran a consulting company called webXL from 2008 to 2010 to help
        companies with their CRM implementations and online presence. I've since
        moved on to other things, but I still host and maintain a few sites for
        old clients and freelance for local businesses.
      </p>

      <h4 className="text-xl mb-3">Profiles</h4>
      <ul className="mb-4" style={{ listStyle: "circle inside" }}>
        {vars.profile_links.map((link, name) => (
          <li key={name} className="mb-2">
            <a href={link.url} target="_blank">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl my-3">Site</h3>
      <p className="mb-3">
        This site was generated with{" "}
        <a href="https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site">
          ViteJS
        </a>{" "}
        and React. The source is available at{" "}
        <a href={vars.my_public_repo}>{vars.my_public_repo}</a>. There you can
        witness the pure awesomeness that is Vite, React, styled-components and{" "}
        <a href="https://tailwindcss.com/">Tailwind CSS</a>. The backgrounds
        were generated with <a href="https://app.haikei.app/">Haikei</a>. The
        icon was generated with{" "}
        <a href="https://danmarshall.github.io/google-font-to-svg-path/">
          Google Font to Svg Path
        </a>{" "}
        and <a href="https://editor.method.ac/">Method Draw</a>.
      </p>
    </div>
  </section>
);
