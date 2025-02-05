'use client';

import { Excalidraw } from '@excalidraw/excalidraw';
import { useMutation, useMyPresence, useStorage } from '@liveblocks/react';
import { CursorPresence } from '../Liveblocks/CursorPresence';
import { useState } from 'react';
import { Pointer } from '@/types/Pointer.type';
import { ExcalidrawElement } from '@excalidraw/excalidraw/types/element/types';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { LiveObjectExcalidrawElement } from '../../../liveblocks.config';

export const PaintTool = () => {
  const [excalidrawApi, setExcalidrawApi] =
    useState<ExcalidrawImperativeAPI | null>(null);
  const [, setPresence] = useMyPresence();
  const [camera, setCamera] = useState<(Pointer & { zoom: number }) | null>({
    x: 0,
    y: 0,
    zoom: 1,
  });
  const elements = useStorage((root) => root.elements as ExcalidrawElement[]);

  const updateElements = useMutation(
    ({ storage }, elements: ExcalidrawElement[]) => {
      const items = storage.get('elements');
      elements.forEach((element, index) => {
        items.set(index, element as unknown as LiveObjectExcalidrawElement);
      });
    },
    []
  );

  if (elements === null) return;

  return (
    <div
      style={{ width: '100svw', height: '100svh' }}
      onMouseLeave={() => {
        setPresence({ cursor: null });
      }}
    >
      <CursorPresence
        screenX={camera?.x ?? 0}
        screenY={camera?.y ?? 0}
        zoom={camera?.zoom ?? 1}
      />
      <Excalidraw
        initialData={{
          elements: elements ?? [],
        }}
        onPointerUpdate={(pointer) => {
          setPresence({
            cursor: { x: pointer.pointer.x, y: pointer.pointer.y },
          });
        }}
        onScrollChange={(scrollX, scrollY) => {
          const zoom = excalidrawApi?.getAppState().zoom.value ?? 1;
          setCamera({ x: scrollX, y: scrollY, zoom });
        }}
        onChange={(elements) => {
          updateElements(elements as ExcalidrawElement[]);
        }}
        excalidrawAPI={(api) => {
          setExcalidrawApi(api);
        }}
      />
    </div>
  );
};
