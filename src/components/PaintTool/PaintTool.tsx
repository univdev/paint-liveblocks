'use client';

import { Excalidraw } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { useMutation, useMyPresence, useStorage } from "@liveblocks/react";
import { Box } from "@mui/material";
import { CursorPresence } from "./CursorPresence";
import { useEffect, useState } from "react";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import AppRouter from "next/dist/client/components/app-router";

export default function PaintTool() {
  const [localElements, setLocalElements] = useState<ExcalidrawElement[]>([]);
  const elements = useStorage((root) => root.elements as unknown as ExcalidrawElement[]);
  const [api, setApi] = useState<ExcalidrawImperativeAPI | null>(null);
  const [, setPresence] = useMyPresence();
  const [camera, setCamera] = useState<{x: number; y: number; zoom: number} | null>(null);

  const updateElements = useMutation(({ storage }, elements: ExcalidrawElement[]) => {
    const items = storage.get('elements');
    items.clear();
    elements.forEach((element) => {
      items.push(element as any);
    })
  }, []);

  if (elements === null) return;

  return (
    <Box
      sx={{ width: '100svw', height: '100svh' }}
      onMouseLeave={() => {
        setPresence({ cursor: null });
      }}
    >
      <CursorPresence screenX={camera?.x ?? 0} screenY={camera?.y ?? 0} zoom={camera?.zoom ?? 1} />
      <Excalidraw
        initialData={{
          elements,
        }}
        onPointerUpdate={(pointer) => {
          setPresence({
            cursor: { x: pointer.pointer.x, y: pointer.pointer.y },
          });
        }}
        onScrollChange={(scrollX, scrollY) => {
          setCamera({ x: scrollX, y: scrollY, zoom: api?.getAppState().zoom.value ?? 1 });
        }}
        onChange={(elements) => {
          updateElements(elements as ExcalidrawElement[]);
        }}
        excalidrawAPI={(api) => {
          setApi(api);
        }}
      />
    </Box>
  );
}
