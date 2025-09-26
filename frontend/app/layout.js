// frontend/app/layout.js
import './globals.css';

export const metadata = {
  title: 'BaseCamp dApp',
  description: 'Beginner-friendly Base dApp template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
