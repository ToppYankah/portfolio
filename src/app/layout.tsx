import "~/styles/globals.css";

import { IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";
import InteractiveGrid from "~/components/InteractiveGrid";

const copyright_font = localFont({
  src: "../../public/fonts/Copyright.woff2",
  variable: "--font-copyright",
});

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Kenny Yankz",
  description: "Porfolio website showcasing Kenny's projects",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${copyright_font.variable} ${ibm_plex_sans.className}`}
    >
      <body>
        <InteractiveGrid />
        {children}
      </body>
    </html>
  );
}
