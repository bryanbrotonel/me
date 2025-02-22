import { ImageResponse } from 'next/server';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: 'Inter, sans-serif',
          background: '#F8FAFC',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#020617',
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
