'use client';

import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react";
import dynamic from "next/dynamic";

const PaintTool = dynamic(async () => await import('@/components/PaintTool/PaintTool'), {
  ssr: false,
});

export default function PaintScreen() {
  return (
    <RoomProvider
      id="test-room-id"
      initialPresence={{ cursor: { x: 0, y: 0 } }}
      initialStorage={{ elements: new LiveList([]) }}
    >
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        <PaintTool />
      </ClientSideSuspense>
    </RoomProvider>
  );
}