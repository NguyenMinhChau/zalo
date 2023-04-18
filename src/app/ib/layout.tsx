export const metadata = {
	title: `IB • ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function IBLayout({ children }: { children: React.ReactNode }) {
	return <section>{children}</section>;
}
