export function toPersianNumber(input: string | number) {
	return input.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}
