'use client';

import { Excalidraw } from '@excalidraw/excalidraw';
import { useMyPresence } from '@liveblocks/react';
import { CursorPresence } from '../Liveblocks/CursorPresence';
import { useState } from 'react';
import { Pointer } from '@/types/Pointer.type';

export const PaintTool = () => {
  const [, setPresence] = useMyPresence();
  const [camera, setCamera] = useState<Pointer | null>({ x: 0, y: 0 });

  return (
    <div
      style={{ width: '100svw', height: '100svh' }}
      onMouseLeave={() => {
        setPresence({ cursor: null });
      }}
    >
      <CursorPresence screenX={camera?.x ?? 0} screenY={camera?.y ?? 0} />
      <Excalidraw
        onPointerUpdate={(pointer) => {
          setPresence({
            cursor: { x: pointer.pointer.x, y: pointer.pointer.y },
          });
        }}
        onScrollChange={(scrollX, scrollY) => {
          setCamera({ x: scrollX, y: scrollY });
        }}
      />
    </div>
  );
};
