export const metadata = {
	title: `Speakers - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function SpeakersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
