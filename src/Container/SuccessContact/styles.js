import styled from "styled-components";

import SuccessBg from "../../assets/success-bg.svg";

export const Container = styled.div`
  background: url("${SuccessBg}") no-repeat;
  background-size: cover;
  padding: 150px 232px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 82px;
  line-height: 70px;
  color: #ffffff;
  margin-bottom: 25px;
`;

export const P = styled.p`
  font-style: normal;
  font-weight: ${(props) => (props.pStrong ? `bold` : `normal`)};
  font-size: ${(props) => (props.pStrong ? `18px` : `16px`)};
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
`;
