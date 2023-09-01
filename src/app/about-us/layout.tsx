export const metadata = {
	title: `About Us - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function AboutUsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div>{children}</div>;
}
