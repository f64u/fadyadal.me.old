import React from 'react';

import SEO from '../components/seo';
import '../reset.css';

const IndexPage = () => (
  <>
    <SEO title="Hi." />

    <div
      style={{
        background: '#111',
      }}
    >
      <div
        style={{
          width: '80vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          margin: '0 auto',
          fontFamily: 'Montserrat',
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '3rem',
            fontWeight: '900',
          }}
        >
          Hi.
        </h1>
        <p
          style={{
            color: '#ddd',
            fontSize: '1.8rem',
            lineHeight: '1.2',
          }}
        >
          Mine personal website wherein my thoughts are portrayed.
        </p>
      </div>
    </div>
  </>
);

export default IndexPage;
