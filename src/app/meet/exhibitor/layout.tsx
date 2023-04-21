export const metadata = {
	title: `Exhibitor - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function ExhibitorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
