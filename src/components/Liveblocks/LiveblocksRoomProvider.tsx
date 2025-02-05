import { LiveList } from '@liveblocks/client';
import { RoomProvider } from '@liveblocks/react';
import { FC, ReactNode } from 'react';

export type LiveblocksRoomProviderProps = {
  roomId: string;
  children: ReactNode;
};

export const LiveblocksRoomProvider: FC<LiveblocksRoomProviderProps> = ({
  roomId,
  children,
}) => {
  return (
    <RoomProvider
      id={roomId}
      initialStorage={{ elements: new LiveList([]) }}
      initialPresence={{ cursor: null }}
    >
      {children}
    </RoomProvider>
  );
};
