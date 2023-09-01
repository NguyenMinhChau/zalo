export const metadata = {
	title: `Products - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
