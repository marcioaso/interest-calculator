const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const c = num => formatter.format(num);
export const absDecimals = num => c(num).slice(1,);