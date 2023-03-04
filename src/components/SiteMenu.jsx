import { Link, useLocation } from 'react-router-dom'
import styled from "styled-components";

const StyledLink = styled(Link)`
  background-color: #001220;
  color: #fff !important;
`;

export default () => {
    const { pathname } = useLocation();
    const btnClass = "rounded-md px-4 py-3 mx-3";
    return (
        <div className="h-20 text-center">
            <StyledLink to="/" className={btnClass} hidden={pathname === '/'}>Home</StyledLink>
            <StyledLink to="/resume" className={btnClass} hidden={pathname === '/resume'}>Résumé</StyledLink>
            <StyledLink to="/about" className={btnClass} hidden={pathname === '/about'}>About</StyledLink>
        </div>
)};
