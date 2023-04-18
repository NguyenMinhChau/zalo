export const metadata = {
	title: `Trader • ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function TraderLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
