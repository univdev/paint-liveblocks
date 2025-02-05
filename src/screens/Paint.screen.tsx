'use client';

import dynamic from 'next/dynamic';

const PaintTool = dynamic(
  async () => (await import('@/components/PaintTool/PaintTool')).PaintTool,
  { ssr: false }
);

export default function PaintScreen() {
  return <PaintTool />;
}
