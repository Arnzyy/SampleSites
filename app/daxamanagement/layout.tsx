import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAXA Management | Professional HMO Property Management Bristol",
  description:
    "Tired of managing your HMO properties? DAXA Management handles everything - tenant sourcing, rent collection, maintenance, and compliance. Hassle-free landlording in Bristol.",
  keywords: [
    "HMO property management",
    "Bristol property management",
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
