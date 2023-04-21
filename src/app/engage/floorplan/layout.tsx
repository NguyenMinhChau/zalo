export const metadata = {
	title: `Floor Plan - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function FloorPlanLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
