export const metadata = {
	title: `Attendees - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function AttendeesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
