import styled from "styled-components";

export const DropdownContainer = styled.div`
  margin-bottom: 12px;
`;
export const TimeBox = styled.div`
  position: relative;
`;
export const TimeList = styled.ul`
  position: absolute;
  top: 0px;
  left: 0;
  width: 130px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border: 1px solid #54adff;
  border-radius: 8px;
  padding: 12px;
  gap: 4px 0px;
`;
export const TimeItem = styled.li`
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.div`
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;