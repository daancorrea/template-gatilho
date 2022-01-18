import styled from "styled-components";

import FirstRowBg from "../../../assets/first-row-bg.svg";

export const Body = styled.div``;
export const FirstRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 232px;
`;
export const FirstRowItemsOne = styled.div`
  margin-right: 35px;
  width: 100%;
`;
export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  color: ${(props) => (props.isThirdRow ? `#FFFFFF` : `#383855`)};
  margin-bottom: 20px;
  margin-top: 40px;
`;
export const P = styled.p`
  font-style: normal;
  font-weight: ${(props) => (props.future ? `bold` : `normal`)};
  font-size: ${(props) => (props.small ? `12px` : `16px`)};
  line-height: 24px;
  color: ${(props) => (props.isThirdRow ? `#FFFFFF` : `#383855`)};
`;
export const FirstRowItemsTwo = styled.div`
  background: url("${FirstRowBg}") no-repeat;
  background-size: 100%;
  padding: 100px 50px 80px 50px;
  position: relative;
  top: -50px;
  width: 431px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  input {
    width: 321px;
    height: 35px;
    background: #ffffff;
    border-radius: 15px;
    margin-bottom: 14px;
    border: none;
    padding-left: 10px;
  }
  textarea {
    width: 100%;
    border: none;
    border-radius: 15px;
    padding: 10px;
  }
`;

export const Button = styled.button`
  width: 223px;
  height: 35px;
  background: #ffffff;
  border-radius: 15px;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #383838;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.6;
  }
`;

export const SecondRow = styled.div`
  padding: 0 232px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    margin-top: 40px;
  }
`;
export const SecondRowItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  gap: 50px;
`;
export const SecondRowInsideItems = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 96px;
    line-height: 115px;
    color: #fed236;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #383855;
    margin-left: 20px;
  }
`;

export const ThirdRow = styled.div`
  background: #a459d0;
  padding: 20px 232px 60px 232px;
`;

export const ThirdRowItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 50px;
`;

export const ThirdRowInsideItems = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  img {
    margin-right: 20px;
  }
`;

export const FourthRow = styled.div`
  padding: 20px 232px;
`;

export const FourthRowItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

export const FourthRowInsideItems = styled.div`
  height: 358px;
  border: 2px solid #383855;
  box-sizing: border-box;
  border-radius: 30px;
  display: grid;
  grid-template-rows: 30% 70%;
  align-items: center;
  text-align: center;
  padding: 30px 20px;
  img {
    margin-bottom: 25px;
  }
  ${(props) =>
    props.bndes &&
    `
  grid-column:1/5;
  display:flex !important;
  flex-direction:row !important;
  `}
`;
export const BndesItem = styled.div`
  display: flex;
`;

export const BndesInsideItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
export const Footer = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
`;

export const FooterFirstRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 82px 200px;
`;
export const FooterSecondRow = styled.div`
  background: #ff9600;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #ffffff;
  }
`;

export const FooterTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #7800e1;
`;
export const FooterSocialMedia = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
