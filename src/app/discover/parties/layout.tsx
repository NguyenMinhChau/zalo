export const metadata = {
	title: `Parties - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function PartiesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
