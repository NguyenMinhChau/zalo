export const metadata = {
	title: `FAQ - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function FAQLayout({ children }: { children: React.ReactNode }) {
	return <section>{children}</section>;
}
