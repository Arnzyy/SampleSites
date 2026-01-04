import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAXA Building Solutions | Professional Building Services in Somerset",
  description:
    "Family-run building company with 50+ years combined experience. Extensions, loft conversions, renovations & more. Quality workmanship, competitive prices. Keynsham, Somerset.",
  keywords: [
    "building solutions Somerset",
    "property extensions Keynsham",
    "loft conversions Bristol",
    "home renovations",
    "builders Somerset",
    "construction company",
  ],
};

export default function DaxaBuildingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
