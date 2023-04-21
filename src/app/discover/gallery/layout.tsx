export const metadata = {
	title: `Gallery - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function GalleryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
