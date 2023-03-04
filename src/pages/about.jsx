import pkg from '../../package.json';
import Name from "../components/Name.jsx";

const vars = {
    my_public_repo: pkg.url,
    generated_where: 'server',
    generated_reason: `clicked the 'About' link in the menu`,
    profile_links: [
        { url: 'https://github.com/webxl', name: 'Github' },
        { url: 'https://linkedin.com/in/webxl', name: 'LinkedIn' },
        { url: 'https://twitter.com/mattmotherway', name: 'Twitter' }
    ]
}

export default () => (
    <section className="container mx-auto content-start px-4" id="about">
        <Name/>
        <div className="content container px-6 py-4">
            <h2 className="subtitle">About</h2>
            <h3 className="text-2xl mb-3">Me</h3>
            <p className="mb-3">
                I'm a professional software engineer specializing in web applications, but have a
                strong DevOps background as well having set up a few high-end Sun servers back in
                the dotcom days (for literally 10s of users). The money ran out before that spike came,
                but we were ready, by golly! I spent a few years in Los Angeles learning the LAMP stack
                and JavaScript before joining a CRM company.
            </p>
            <p className="mb-3">
                I currently live in Reno, NV with my crazy-beautiful wife and kids. My current technical interests include machine learning, home automation, and security. My hobbies include skiing, hiking, golfing, economics and 3d printing.
            </p>
            <h4 className="text-xl mb-3">Profiles</h4>
            <ul className="mb-3" style={{ listStyle: "circle inside" }}>
                {vars.profile_links.map((link, name) => (
                <li key={name} className="mb-2" >
                    <a href={link.url} target="_blank">{ link.name }</a>
                </li>
                    ))}
        </ul>
        <h3 className="text-2xl mb-3">Site</h3>
        <p className="mb-3">
            This site was generated with <a href="https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site">ViteJS</a> and React.
            The source is available at <a href={vars.my_public_repo}>{ vars.my_public_repo }</a>. There you can witness the pure awesomeness that is Vite, React, styled-components and <a href="https://tailwindcss.com/">Tailwind CSS</a>.
            The backgrounds were generated with <a href="https://app.haikei.app/">Haikei</a>.
</p>

</div>
</section>);
