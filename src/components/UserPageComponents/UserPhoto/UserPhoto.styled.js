import styled from 'styled-components';

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const PhotoContainer = styled.img`
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const UserPhotoBtnCheck = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const UserPhotoTitle = styled.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
`;

export const UserPhotoBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const UserPhotoBtnEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  min-height: 224px;
`;

export const UserPhotoEdit = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  transition: transform 300ms;

  &:hover{
  transform: scale(1.1);
  }
`;

export  const UserPhotoIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke:var(--clr-brand-blue);
`;

export const CameraSvg = styled.svg`
  fill: none;

`;
export const CheckSvg = styled.svg`
  fill: none;
  stroke:var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`;

export const XSvg = styled.svg`
  stroke:var(--clr-brand-red);
  width: 24px;
  height: 24px;
`


