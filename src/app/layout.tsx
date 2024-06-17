import "~/styles/globals.css";

import { IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";
import CustomPointer from "~/components/CustomPointer";
import InteractiveGrid from "~/components/InteractiveGrid";
import { CustomPointerContextProvider } from "~/context/custom-pointer-context";
import SmoothScrollProvider from "~/context/smooth-scroll-context";

const copyright_font = localFont({
  src: "../../public/fonts/Copyright.woff2",
  variable: "--font-copyright",
});

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
});

const devTag = " (Dev Mode)";
const prodTag = " | Frontend Developer";
const envTag = process.env.NODE_ENV === "production" ? prodTag : devTag;

export const metadata = {
  title: "Kenny Yankz" + envTag,
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
      suppressHydrationWarning={true}
      className={`${copyright_font.variable} ${ibm_plex_sans.className}`}
    >
      <body>
        <CustomPointerContextProvider>
          <InteractiveGrid />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <CustomPointer />
        </CustomPointerContextProvider>
      </body>
    </html>
  );
}
