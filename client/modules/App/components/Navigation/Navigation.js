import React from 'react';
import Link from 'react-router';
import { FormattedMessage } from 'react-intl';

const Navigation = () => {
  return (
    <div>
      <Link to="/home"><FormattedMessage id="home" /></Link>
      <Link to="/"><FormattedMessage id="posts" /></Link>
      <Link to="/about"><FormattedMessage id="about" /></Link>
    </div>
  );
};

export default Navigation;
