export const metadata = {
	title: `Venue - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function VenueLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
