import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url("../images/misc/home-bg.jpg") top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

const Button = styled(Link)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

function Header({ bg = true, link = "#", ...restProps }) {
  const children = (
    <Container>
      <Link to={link}>
        <Logo src="/images/misc/logo.svg" alt="Netflix" />
      </Link>
      <Button to="/signin">Sign In</Button>
    </Container>
  );
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

export default Header;
