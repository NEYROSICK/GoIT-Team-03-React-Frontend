import styled from '@emotion/styled';

export const InputList = styled.div`
  margin-bottom: 24px;

  & label {
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
  }

  & input {
    padding: 8px 16px;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: 0.56px;

    border-radius: 40px;
    border: 1px solid var(--clr-brand-blue);
    
    &:focus{
      outline: none;
      border: 2px solid var(--clr-brand-blue);
    }
    
    &.is-invalid {
      border-color: var(--clr-brand-red);

      &:focus{
        outline: none;
        border: 2px solid var(--clr-brand-red);
      }
    }
  }
`;
