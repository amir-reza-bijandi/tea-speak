export function toPersianNumber(str: string) {
	return str.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}
