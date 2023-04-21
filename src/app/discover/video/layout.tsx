export const metadata = {
	title: `Video - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function VideoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
