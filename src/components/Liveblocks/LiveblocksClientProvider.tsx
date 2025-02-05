'use client';

import { FC, ReactNode } from "react"
import { LiveblocksProvider } from '@liveblocks/react';

export type LiveblocksClientProviderProps = {
  children: ReactNode;
}

export const LiveblocksClientProvider: FC<LiveblocksClientProviderProps> = ({ children }) => {
  return (
    <LiveblocksProvider publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY as string}>
      {children}
    </LiveblocksProvider>
  );
}
