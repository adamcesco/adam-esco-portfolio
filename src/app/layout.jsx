import React from 'react';
import PropTypes from 'prop-types';
import './globals.css';
// eslint-disable-next-line import/no-unresolved, import/extensions
import MenuHeader from '@/widgets/MenuHeader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuHeader />
        {children}
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
