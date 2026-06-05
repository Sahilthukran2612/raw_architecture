import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    { path: "./helvetica-light-587ebe5a59211.ttf", weight: "300", style: "normal" },
    { path: "./Helvetica.ttf", weight: "400", style: "normal" },
    { path: "./Helvetica-Oblique.ttf", weight: "400", style: "italic" },
    { path: "./Helvetica-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Helvetica-BoldOblique.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-helvetica",
});

export const neutra = localFont({
  src: [
    { path: "./neutra-text-alt-587261020eccb.otf", weight: "400", style: "normal" },
    
    { path: "./neutra-text-bold-italic-5872615974382.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-neutra",
});

