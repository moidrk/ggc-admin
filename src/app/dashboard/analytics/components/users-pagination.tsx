'use client';

import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

interface UsersPaginationProps {
  count: number;
  page: number;
}

export function UsersPagination({ count, page }: UsersPaginationProps): React.JSX.Element {
  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      rowsPerPage={10}
      onPageChange={() => {}}
      onRowsPerPageChange={() => {}}
    />
  );
}
