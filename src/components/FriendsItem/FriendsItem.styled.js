import styled from 'styled-components';

export const ListFriends = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px 0px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: flex-start;
    align-items: stretch;
  }
  @media only screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const ItemFriends = styled.li`
  padding: 16px 17px 16px 12px;
  width: 280px;

  background-color: var(--clr-bcg-user);
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  transition: 300ms;

  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 394px;
  }

  &:hover {
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 1);
  }
`;

export const TitleFriends = styled.h2`
  color: var(--clr-brand-blue);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
  }
`;
export const FriendsPhoto = styled.img`
  width: 100px;
  height: 68px;

  @media only screen and (min-width: 768px) {
    width: 124px;
    height: 88px;
  }
  @media only screen and (min-width: 768px) {
    width: 146px;
    height: 104px;
  }
`;

export const ContainerFriends = styled.div`
  display: flex;
  gap: 0px 12px;

  font-size: 12px;
  font-style: normal;
  line-height: normal;
  @media only screen and (min-width: 768px) {
    gap: 0px 20px;
    font-size: 14px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px 0px;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Info = styled.p`
  font-weight: 600;
`;
