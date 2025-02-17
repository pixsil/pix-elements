
export function euro(value, decimals = 2) {
    return '€ ' + Number(value).toFixed(decimals).replace('.', ',');
}

export function euroThousandPoint(value,  decimals = 2) {
    let parts = Number(value).toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return '€ ' + parts.join(',');
}

export function thousandPoint(value, decimals = 2) {
    let parts = Number(value).toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return parts.join(',');
}
