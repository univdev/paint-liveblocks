'use client';

import { LiveblocksRoomProvider } from '@/components/Liveblocks/LiveblocksRoomProvider';
import { ClientSideSuspense } from '@liveblocks/react';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';

const PaintTool = dynamic(
  async () => (await import('@/components/PaintTool/PaintTool')).PaintTool,
  { ssr: false }
);

export default function PaintScreen() {
  return (
    <LiveblocksRoomProvider roomId="test-room-id">
      <ClientSideSuspense fallback={<Fragment />}>
        <PaintTool />
      </ClientSideSuspense>
    </LiveblocksRoomProvider>
  );
}
