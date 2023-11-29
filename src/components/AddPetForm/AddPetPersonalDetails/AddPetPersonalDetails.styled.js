import styled from '@emotion/styled';

export const InputList = styled.div`
  margin-bottom: 36.95px;

  @media (min-width: 768px) {
    margin-bottom: 57.6px;
  }

  & label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26.5px; /* 132.5% */
      gap: 8px;

      margin-bottom: 24px;
    }
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
    outline: 3px solid transparent;
    outline-offset: -3px;
    transition: outline-color 0.3s;

    @media (min-width: 768px) {
      padding: 12px 16px;
      height: 48px;

      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.64px;
    }

    &:focus {
      outline: 3px solid var(--clr-brand-blue);
    }

    &.is-invalid {
      outline-color: var(--clr-brand-red);

      &:focus {
        outline: 3px solid var(--clr-brand-red);
      }
    }
  }

  & input[type='date'][value=''] {
    color: var(--clr-secondary);
  }
`;

export const ErrorPersonalInfoText = styled.p`
  position: absolute;
  bottom: -16px;
  left: 12px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--clr-brand-red);

  @media (min-width: 768px) {
    font-size: 12px;
    bottom: -20px;
    left: 13px;
  }
`;
