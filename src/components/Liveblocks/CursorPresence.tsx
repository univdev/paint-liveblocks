import { useOthers } from '@liveblocks/react';
import { FC, Fragment } from 'react';
import { Cursor } from '../Cursor/Cursor';

export type CursorPresenceProps = {
  screenX: number;
  screenY: number;
};

export const CursorPresence: FC<CursorPresenceProps> = ({
  screenX,
  screenY,
}) => {
  const others = useOthers();

  return (
    <Fragment>
      {others.map(({ id, presence }) => {
        const cursor = presence.cursor;

        if (!cursor) return null;

        return (
          <Cursor
            key={id}
            x={cursor.x - screenX}
            y={cursor.y - screenY}
            color="black"
            username="anonymous"
          />
        );
      })}
    </Fragment>
  );
};
