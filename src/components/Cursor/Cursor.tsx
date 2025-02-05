import { FC } from 'react';
import { MousePointer2 } from 'lucide-react';
import { Box, Typography } from '@mui/material';

export type CursorProps = {
  x: number;
  y: number;
  color: string;
  username: string;
};

export const Cursor: FC<CursorProps> = ({
  x = 100,
  y = 100,
  color = 'black',
  username,
}) => {
  return (
    <Box sx={{ position: 'absolute', left: x, top: y, zIndex: 1000 }}>
      <MousePointer2 color={color} />
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          transform: 'translate(100%, 10px)',
          backgroundColor: color,
          px: 2,
          color: (theme) => theme.palette.background.paper,
        }}
      >
        <Typography variant="caption">{username}</Typography>
      </Box>
    </Box>
  );
};