export const metadata = {
	title: `Data Mining - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function DataMiningLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
