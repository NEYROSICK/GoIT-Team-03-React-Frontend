import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
  color: #111111;
  text-align: center;
  font-family: "Inter-Regular, sans-serif";
  font-size: 16px;
  font-weight: 400;
  line-height: 0.9375;
  padding-bottom: 20px;

  ${({ $variant }) =>
    $variant === "hidden"
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}

  ul {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #54ADFF;

    a {
      display: flex;
      justify-content: center;
      width: 35px;
      height: 35px;
      padding: 10px 10px 10px 10px;
      cursor: pointer;
    }

    &.active {
      background-color: #54ADFF;
      color: #FFFFFF;
    }
    &.activeLink {
      background-color: #54ADFF;
      color: #FFFFFF;
    }

    &.previous {
      margin-right: 15px;
      color: #54ADFF;

      @media only screen and (min-width: 1280px) {
        margin-right: 32px;
      }

      &.disabled {
        color: rgba(17, 17, 17, 0.5);
        cursor: default;
      }
    }

    &.next {
      margin-left: 15px;
      color: #54ADFF;

      @media only screen and (min-width: 1280px) {
        margin-left: 32px;
      }

      &.disabled {
        color: rgba(17, 17, 17, 0.5);
        cursor: default;
      }
    }
  }
`;