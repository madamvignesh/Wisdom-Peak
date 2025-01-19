import React from "react";
import { MdDarkMode, MdOutlineDarkMode  } from "react-icons/md";
import Context from "../../context/context";
import { HeaderContainer, Heading, ThemeButton } from "./styledComponents";

const Header = () => {
  return (
    <Context.Consumer>
      {({ isDarkTheme, onChangeTheme }) => {
        const bgColor = isDarkTheme ?  "#1a1a40": "#d3d3d3"; 
        const color = isDarkTheme ? "#00ffff" : "#4169e1"; 

        return (
          <HeaderContainer bgColor={bgColor}>
            <div>
              <Heading color={color}>Wisdom Peak Analysis</Heading>
            </div>
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
