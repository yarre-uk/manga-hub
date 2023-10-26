// import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <p>test root layout</p>
        {children}
      </body>
    </html>
  );
}
