import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  background-color: #001220;
  color: #fff !important;
`;

export default ({ isLanding }) => {
  const { pathname } = useLocation();
  const btnClass = `rounded-md px-4 ${isLanding ? "mx-4 py-3" : "py-2"}`;
  return (
    <div className={`my-10  ${isLanding ? "text-center" : "flex gap-4"}`}>
      <StyledLink to="/" className={btnClass} hidden={pathname === "/"}>
        Home
      </StyledLink>
      <StyledLink
        to="/resume"
        className={btnClass}
        hidden={pathname === "/resume"}
      >
        Résumé
      </StyledLink>
      <StyledLink
        to="/about"
        className={btnClass}
        hidden={pathname === "/about"}
      >
        About
      </StyledLink>
      <StyledLink
        to="/portfolio"
        className={btnClass}
        hidden={pathname === "/portfolio"}
      >
        Portfolio
      </StyledLink>
    </div>
  );
};
