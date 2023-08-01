export const metadata = {
	title: `Natural Language Processing - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function NaturalLanguageProcessingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
