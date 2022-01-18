import styled from "styled-components";

import HeaderImage from "../../../assets/bg-header.svg";

export const Header = styled.div`
  background: url("${HeaderImage}") no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  z-index: 99 !important;
  position: relative;
`;

export const HeaderItems = styled.div`
  flex-direction: column;
  width: 35%;
  padding-bottom: 150px;
`;

export const TitleHeader = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 82px;
  line-height: 70px;
  color: #ffffff;
  margin-bottom: 22px;
`;

export const ParagraphHeader = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 22px;
`;

export const Button = styled.button`
  background: #a459d0;
  border-radius: 10px;
  width: 171px;
  height: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
  :active{
    opacity: 0.6;
  }
`;

export const Body = styled.div`
padding: 0 232px;
`