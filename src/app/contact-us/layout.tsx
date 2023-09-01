export const metadata = {
	title: `Speed Processing Contact Us - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function SpeedProcessingContactUsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
