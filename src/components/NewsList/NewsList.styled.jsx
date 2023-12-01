import styled from '@emotion/styled';

export const List = styled.ul`
  max-width: 280px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    max-width: 696px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1233px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 576px) {
    margin-top: 0.5rem;
  }
`;

export const PageButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  margin: 0 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? 'rgba(84, 173, 255, 1)' : 'white'};
  color: ${(props) => (props.active ? 'yellow' : 'black')};

  @media (max-width: 576px) {
    margin: 0 4px;
  }
`;

export const ArrowButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  margin: 0 40px;
  cursor: pointer;
  background-color: white;
  color: black;

  @media (max-width: 576px) {
    margin: 0 20px;
  }
`;
