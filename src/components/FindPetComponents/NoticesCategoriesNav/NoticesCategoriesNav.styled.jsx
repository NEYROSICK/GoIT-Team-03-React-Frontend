import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavContaier = styled.div`
  width: 205px;
  height: 121px;

  @media screen and (min-width: 768px) {
    width: 319px;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction:  row;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const UserNavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: no-wrap;
  gap: 8px;
  flex-direction: row;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const NavLi = styled.li`
display: flex;
border: none;
text-decoration: none;
justify-content: center;
align-items: center;
background-color: #CCE4FB;
border-radius: 40px;
font-weight: 500;
font-size: 14px;
line-height: 19px;
letter-spacing: 0.04em;
text-decoration: none;
transition: 300ms;    

&:hover,
&:focus {
    
    color: #FEF9F9;
    
}
`
export const StyledLink = styled(Link)`
padding: 8px 16px;
text-decoration: none;
color: #54ADFF;
color: ${(props) => props.active && '#FEF9F9'};
background-color: ${(props) => props.active && '#54ADFF'};
border-radius: 40px;
&:focus, &:hover {
    color: #FEF9F9;
    background-color: #54ADFF;
}
`