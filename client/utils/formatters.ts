export const formatDollars = (num: number): string => {
    const formatter = Intl.NumberFormat('en', {
        notation: 'standard',
        style: 'currency',
        currency: 'USD',
    })

    return formatter.format(num);
}