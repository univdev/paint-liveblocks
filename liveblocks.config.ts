/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExcalidrawElement } from '@excalidraw/excalidraw/types/element/types';

declare global {
  interface Liveblocks {
    Presence: {
      cursor: {
        x: number;
        y: number;
      } | null;
    };
    // Storage: {};
    // UserMeta: {};
    // RoomEvent: {};
    // ThreadMetadata: {};
  }
}
