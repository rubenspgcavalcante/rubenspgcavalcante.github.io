import ThemeSwitchContext from "@/themes/ThemeSwitchContext";
import styled from "@emotion/styled";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useContext } from "react";

type ThemeSwitchProps = {};

const FloatingButton = styled.button`
  position: absolute;
  right: 0;
  background: transparent;
  cursor: pointer;
  border: none;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.1);

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  :active {
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4) inset;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 32px;
  text-shadow: -2px 1px 2px ${({ theme: { colors } }) => colors.baseAlpha30};
  color: ${({ theme }) =>
    theme.meta.name === "light" ? "#FFFF00" : "#0000FF"};
`;

export default function ThemeSwitch({}: ThemeSwitchProps) {
  const { current, setTheme } = useContext(ThemeSwitchContext);

  const toggleTheme = useCallback(() => {
    current === "light" ? setTheme("dark") : setTheme("light");
  }, [current, setTheme]);

  return (
    <FloatingButton onClick={toggleTheme}>
      <Icon icon={current === "light" ? faSun : faMoon} />
    </FloatingButton>
  );
}
