
const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', { currency: "USD", style: "currency" });

export function formatCurrency(num: number | undefined): string {
    return CURRENCY_FORMATTER.format(num as number);
}
