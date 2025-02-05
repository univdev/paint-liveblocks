'use client';

import { Excalidraw } from '@excalidraw/excalidraw';

export const PaintTool = () => {
  return (
    <div style={{ width: '100svw', height: '100svh' }}>
      <Excalidraw
        excalidrawAPI={(api) => {
          console.log(api);
        }}
        onChange={(elements) => {
          console.log(elements);
        }}
      />
    </div>
  );
};
