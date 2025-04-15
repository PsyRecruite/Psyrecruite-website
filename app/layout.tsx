export const metadata = {
  title: "PsyRecruite",
  description: "Verbind psychologie met de juiste professional.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}