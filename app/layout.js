import AuthProvider from '@/components/AuthProvider';

export default function RootLayout({ children }) {
  return (
    <html>
 <body>
        <AuthProvider>{children}</AuthProvider>
      </body>   
       </html>
  );
}

