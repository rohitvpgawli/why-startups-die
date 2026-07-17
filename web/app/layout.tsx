import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Startup Graveyard — The post-ZIRP startup reset";
const description = "An evidence-first atlas of 2021 startup cohorts, with a frozen YC sampling frame and separately reviewed shutdowns, wind-downs, and pivots.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.jpg`;
  return {
    title,
    description,
    openGraph: { title, description, type: "website", images: [{ url: image, width: 1728, height: 910, alt: "Startup Graveyard — What happened after easy money?" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
