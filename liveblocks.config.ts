import { ExcalidrawLinearElement, FillStyle, RoundnessType, StrokeStyle } from "@excalidraw/excalidraw/types/element/types";
import { LiveList } from "@liveblocks/client";

export type LiveObjectExcalidrawElement = {
  id: string;
  x: number;
  y: number;
  strokeColor: string;
  backgroundColor: string;
  fillStyle: FillStyle;
  strokeWidth: number;
  strokeStyle: StrokeStyle;
  roundness: null | {
      type: RoundnessType;
      value?: number;
  };
  roughness: number;
  opacity: number;
  width: number;
  height: number;
  angle: number;
  /** Random integer used to seed shape generation so that the roughjs shape
      doesn't differ across renders. */
  seed: number;
  /** Integer that is sequentially incremented on each change. Used to reconcile
      elements during collaboration or when saving to server. */
  version: number;
  /** Random integer that is regenerated on each change.
      Used for deterministic reconciliation of updates during collaboration,
      in case the versions (see above) are identical. */
  versionNonce: number;
  isDeleted: boolean;
  /** List of groups the element belongs to.
      Ordered from deepest to shallowest. */
  groupIds: string[];
  frameId: string | null;
  /** other elements that are bound to this element */
  boundElements: Readonly<{
    id: ExcalidrawLinearElement["id"];
    type: "arrow" | "text";
  }> | null;
  /** epoch (ms) timestamp of last element update */
  updated: number;
  link: string | null;
  locked: boolean;
  customData?: Record<string, any>;
};

declare global {
  // These custom types are all optional, just define the ones you want/need
  interface Liveblocks {
    Presence: {
      cursor: { x: number; y: number; } | null;
    };
    Storage: {
      elements: LiveList<LiveObjectExcalidrawElement>
    };
    // UserMeta: {};
    // RoomEvent: {};
    // ThreadMetadata: {};
  }
}