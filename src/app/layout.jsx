import { Inter } from 'next/font/google';
import React from 'react';
import PropTypes from 'prop-types';
import './globals.css';
import MenuHeader from '../widgets/MenuHeader';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuHeader />
        {children}
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
