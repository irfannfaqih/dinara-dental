
import React from 'react';

export default function FaviconGenerator() {
  return (
    <div style={{
      width: '512px',
      height: '512px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: '80px',
      overflow: 'hidden',
      padding: '40px'
    }}>
      <img 
        src="/logo-browser.png" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
        alt="Original Logo"
      />
    </div>
  );
}
