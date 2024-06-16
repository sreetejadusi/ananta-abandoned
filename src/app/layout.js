import Link from "next/link";
import AnantaNavigationBar from "./components/ananta_navigation_bar";
import "./globals.css";
import "./locomotive-scroll.css";
import Script from "next/script";


export const metadata = {
  title: "theAnanta | Building next-gen solutions",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/split-type"></script>
      </head>
      <body className="bg-black">
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="/static/script.js"
        />
        <div className="custom-cursor"></div>
        <AnantaNavigationBar />
        {/* <div className="h-[5.3125rem]  lg:h-[6.875rem]"></div> */}
        {children}
      </body>
    </html>
  );
}