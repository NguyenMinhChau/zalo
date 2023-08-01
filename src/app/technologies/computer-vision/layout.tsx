export const metadata = {
	title: `Computer Vision - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function ComputerVisionLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div>{children}</div>;
}
