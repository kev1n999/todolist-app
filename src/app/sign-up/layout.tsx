export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-600 min-h-screen">
        {children}
      </body>
    </html>
  );
}
