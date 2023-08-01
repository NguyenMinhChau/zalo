export const metadata = {
	title: `Pricing - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
