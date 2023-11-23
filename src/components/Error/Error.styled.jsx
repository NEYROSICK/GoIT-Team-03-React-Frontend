import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorH2 = styled.h2`
weight: 600px;
font-size: 32px;
line-height: 41.6px;
text-align: center;
padding-top: 60px;
  padding-bottom: 80px;
`;

export const ErrorLink = styled(Link)`
  display: block;
  cursor: pointer;
  margin: 18px auto 100px;
  weight: 700px;
  font-size: 16px;
  line-height: 21.86px;
  text-align: center;
  border-radius: 40px;
  cursor: pointer;
  background-color: var(--clr-brand-blue);
  color: var(--clr-primary-inv);
  padding: 9px;
  width: 248px;
`;
