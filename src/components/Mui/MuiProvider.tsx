'use client';

import { createTheme, ThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';

export type MuiProviderProps = {
  children: ReactNode;
};

export const muiTheme = createTheme({
  spacing: 2,
});

export const MuiProvider: FC<MuiProviderProps> = ({ children }) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};
