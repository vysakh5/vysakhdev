import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Home | <yzk/>",
  description: `My name is Vysakh, welcome to my website. I'm a full-stack JS developer with more than 3 year's of professional experience.
I love to build things that solve real-world problems.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta property="og:image" content="/meta.png" />
        <meta property="twitter:image" content="/meta.png" />
      </head>
      <body className={`${poppins.className}`}>
        <div
          style={{
            zIndex: "100 !important",
          }}
        >
          {/* <Header /> */}
          Header
        </div>
        <div
          style={{
            zIndex: "0 !important",
          }}
        >
          {children}
        </div>
        Footer
        {/* <Footer /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
