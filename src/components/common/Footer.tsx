import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} - Blog de React</p>
    </footer>
  );
};

export default Footer;
