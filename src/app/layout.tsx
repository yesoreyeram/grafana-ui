import React from "react";
import { type Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grafana UI Experiments",
  description: "Grafana UI Experiments with Grafana design system",
};

type Props = Readonly<{ children: React.ReactNode }>;

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
};

export default Layout;
