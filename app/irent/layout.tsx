import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iRent Properties | Professional HMO Property Management London",
  description:
    "Tired of managing your HMO properties? iRent Properties handles everything - tenant sourcing, rent collection, maintenance, and compliance. Hassle-free landlording in London.",
  keywords: [
    "HMO property management",
    "London property management",
    "landlord services",
    "rent collection",
    "tenant sourcing",
    "property maintenance",
  ],
};

export default function IRentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
