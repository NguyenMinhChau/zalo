export const metadata = {
	title: `Agenda - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function AgendaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
