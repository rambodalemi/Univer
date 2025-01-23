import React from 'react';

const Page = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <embed
        src="/univercat.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Page;
