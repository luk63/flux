'use client';

import type { AppProps } from 'next/app';
import { Providers } from '../app/providers';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp; 