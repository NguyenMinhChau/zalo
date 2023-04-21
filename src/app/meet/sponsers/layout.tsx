export const metadata = {
	title: `Sponsers - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function SponsersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
