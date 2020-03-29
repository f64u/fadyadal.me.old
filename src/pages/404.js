import React from 'react';

import SEO from '../components/seo';

const NotFoundPage = () => (
  <div
    style={{
      width: '80vw',
      height: '100vh',
      background: '#111',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
