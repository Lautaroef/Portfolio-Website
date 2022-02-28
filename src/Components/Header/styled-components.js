import styled from "styled-components";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";

export const theme = {
  maxWidth: "1200px",
  maxNavbarHeight: "46px",
  contactBg: `linear-gradient(
    90deg,
    rgba(94, 79, 171, 1) 0%,
    rgba(106, 81, 164, 1) 70%,
    rgba(114, 82, 157, 1) 100%
  )`,
  white: "#fff",
  black: "#000",
  grayLight: "#eee",
  grayStrong: "#808080",
  textColor: "rgba(0,0,0,0.9)",
};

const ExtendFlexAttrs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavigation = styled(ExtendFlexAttrs).attrs({
  as: "nav",
})`
  max-width: ${(props) => props.theme.maxWidth};
  max-height: 46px;
  margin: 0 auto 3rem auto;
  z-index: 999;

  .fa-hamburger {
    display: none;
    @media (max-width: 780px) {
      display: inherit;
      margin: 0.4rem 1rem;
    }
  }
`;

export const StyledPicture = styled(ExtendFlexAttrs).attrs(() => ({
  as: Link,
}))`
  margin: 0.1rem 4.5vw 0 0;
  padding-left: 1rem;
  text-decoration: none;
  color: initial;

  @media (max-width: 780px) {
    flex: 1;
    justify-content: flex-start;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    transition: transform 0.2s ease-out;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1);
    }
  }

  h3 {
    font-family: "Quite Magical";
    font-size: 28px;
    margin-left: 0.6rem;
    font-weight: 500;
  }
`;

export const StyledMenu = styled(ExtendFlexAttrs).attrs({
  as: "ul",
})`
  max-height: 46px;
  margin-top: 3px;

  justify-content: space-between;
  @media (min-width: 980px) {
    flex: 0.5;
  }
  a {
    font-family: "Gotham LsLight";
    position: relative;
    padding: 0.6rem 2rem 0.6rem 2rem;
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.grayStrong};
    font-size: 14.5px;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.black};
    }

    &::after {
      content: "";
      width: 100%;
      height: 0.1rem;
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${(props) => props.theme.contactBg};
      z-index: 5;
      transform: scale(0, 1);
      transition: transform 0.33s ease-out;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }

  div {
    margin: 2px -20px 0 0;
    padding: 1rem 0;
    background-color: ${(props) => props.theme.white};
    z-index: 2;
    transform: skew(-40deg);

    button {
      margin-right: 1.11rem;
      background-color: ${(props) => props.theme.white};
      border: none;
      transform: skew(40deg);
    }

    a {
      padding: 0.5rem 2rem 0.8rem 1.4rem;
    }
  }

  .activeLink {
    color: ${(props) => props.theme.black};
    font-weight: 600;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

export const StyledContact = styled(ExtendFlexAttrs)`
  position: relative;
  justify-content: flex-end;
  flex: 1;
  padding: 0.5rem 0;
  background: ${(props) => props.theme.contactBg};

  @media (min-width: 980px) {
    flex: 0.5;
  }

  /* MUI Button with router Link */
  a {
    margin-right: 1rem;
    padding: 0.3rem 1rem;
    background-color: ${(props) => props.theme.white};
    color: #252525; // #2e2e2e
    font-size: 15px;
    font-weight: 500;
    font-family: "Gotham Medium";
    border-radius: 25px;
    // Change MUI values
    font-family: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-transform: unset;

    &:hover {
      background-color: ${(props) => props.theme.white};
    }
  }
  @media (max-width: 780px) {
    display: none;
  }
`;

export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -5,
    padding: "1px 0px 0 0px",
    fontSize: "0.715rem",
    height: 17.5,
    minWidth: 18,
    borderRadius: "50%",
  },
  "&": {
    fontFamily: "inherit",
  },
}));
