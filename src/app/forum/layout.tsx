export const metadata = {
	title: `Forum • ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function ForumLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
