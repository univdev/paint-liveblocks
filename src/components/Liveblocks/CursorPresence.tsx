import { useOthers } from '@liveblocks/react';
import { FC, Fragment } from 'react';
import { Cursor } from '../Cursor/Cursor';

export type CursorPresenceProps = {
  screenX: number;
  screenY: number;
  zoom: number;
};

export const CursorPresence: FC<CursorPresenceProps> = ({
  screenX,
  screenY,
  zoom,
}) => {
  const others = useOthers();

  return (
    <Fragment>
      {others.map(({ presence }, index) => {
        const cursor = presence.cursor;

        if (!cursor) return null;

        return (
          <Cursor
            key={index}
            x={(cursor.x + screenX) * zoom}
            y={(cursor.y + screenY) * zoom}
            color="black"
            username="anonymous"
          />
        );
      })}
    </Fragment>
  );
};
