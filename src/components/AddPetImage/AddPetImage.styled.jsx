import styled from "styled-components";

export const UserDataWrapper = styled.div`
    padding: 50px;   
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
    background: gray;
    display: block;
    width: 182px;
    height: 182px;
    border-radius: 40px;
`;

export const UserPhotoBtn = styled.button`

  cursor: pointer;
  border: 2px solid gray;
  background: gray;
`;