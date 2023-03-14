import React from "react";
//Photos
import TMFLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg";
//Css
import { Wrapper, Content, LogoImage, TMDBLogoImg } from "./Header.style";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImage src={TMFLogo} alt='tmf-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;