import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WITH H | Premium Streetwear & Luxury Fashion",
  description:
    "Discover the latest in premium streetwear and luxury fashion. Authenticity guaranteed on every item. Shop Off-White, Stone Island, Palm Angels, and more.",
};

export default function WithhukLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
