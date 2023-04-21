export const metadata = {
	title: `Accommodation - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function AccommodationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
