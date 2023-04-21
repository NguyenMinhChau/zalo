export const metadata = {
	title: `About - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div>{children}</div>;
}
