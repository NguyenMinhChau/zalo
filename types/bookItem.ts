export type ListCheckType = {
	id: number;
	title: string;
	icon: any;
};
export type ListPriceType = {
	id: number;
	type: string;
	price: string;
	desc: string;
};
export type BookItemType = {
	title: string;
	desc: string;
	subtitle?: string;
	LIST_CHECK: ListCheckType[];
	LIST_PRICE: ListPriceType[];
	bgc?: string;
};
