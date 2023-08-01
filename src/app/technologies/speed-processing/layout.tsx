export const metadata = {
	title: `Speed Processing - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function SpeedProcessingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
