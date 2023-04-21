export const metadata = {
	title: `Transportation - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function TransportationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
