import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';
export const StyledPagination = styled(Pagination)`
  display: flex;
  gap: 8px;
  margin-top: 68px;
  .MuiPagination-ul {
  }

  .MuiPaginationItem-root {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    color: #54adff;
    transition: color 0.3s ease;
    background: none;
    outline: 1px solid #54adff;
  }

  .MuiPaginationItem-root:hover {
    color: #fff;
    background-color: #54adff;
  }
`;
