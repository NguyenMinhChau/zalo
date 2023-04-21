export const metadata = {
	title: `Media Partners - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function MediaPartnersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
