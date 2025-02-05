'use client';

import { LiveblocksProvider as LBP } from '@liveblocks/react';
import { FC, ReactNode } from 'react';

export type LiveblocksProviderProps = {
  children: ReactNode;
};

export const LiveblocksProvider: FC<LiveblocksProviderProps> = ({
  children,
}) => {
  return (
    <LBP publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_API_KEY as string}>
      {children}
    </LBP>
  );
};
