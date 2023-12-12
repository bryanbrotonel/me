import React from 'react';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const footerLabel = `Bryan Brotonel © ${year}`;

  return (
    <footer className="mt-auto py-6">
      <div className="mt-12 text-center text-xs text-gray-500">
        <span>{footerLabel}</span>
      </div>
    </footer>
  );
}
