export const metadata = {
	title: `Experiments Project - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function ExperimentsProjectLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
