export const metadata = {
	title: `Contact Us - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function ContactUsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
