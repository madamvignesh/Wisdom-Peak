import React from "react";
import { MdDarkMode, MdOutlineDarkMode  } from "react-icons/md";
import Context from "../../context/context";
import { HeaderContainer, Heading, ThemeButton,StyledLink } from "./styledComponents";

const Header = () => {
  return (
    <Context.Consumer>
      {({ isDarkTheme, onChangeTheme }) => {
        const bgColor = isDarkTheme ?  "#131819": "#33F0FF"; 
        const color = isDarkTheme ? "#00ffff" : "#001A9E"; 

        return (
          <HeaderContainer bgColor={bgColor}>
            <Heading color={color}>Wisdom Peak Analysis</Heading>
            <div>
              <ThemeButton onClick={onChangeTheme}>
                {isDarkTheme ? <MdOutlineDarkMode color="ffffff" size={30}/> : <MdDarkMode size={30}/>}
              </ThemeButton>
            </div>
          </HeaderContainer>
        );
      }}
    </Context.Consumer>
  );
};

export default Header;
