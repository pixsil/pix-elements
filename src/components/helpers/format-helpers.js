
export function setDecimalComma(object, key, decimals, event) {
    let value = event.target.value;
    if (value.match(/^[-]?\d+([.,]\d+)?$/g)) {
        value = parseFloat(value.replace(',', '.'));
        value = parseFloat(value.toFixed(decimals));
    }
    object[key] = value;
}

export function getDecimalComma(object, key) {
    if (!object[key]) {
        return;
    }
    if (typeof object[key] !== 'number') {
        return object[key];
    }
    return object[key].toFixed(3).replace('.', ',');
}

export function euro3Decimal(value) {
    return '€ ' + Number(value).toFixed(3).replace('.', ',');
}

export function euroThousandPoint(value) {
    let parts = Number(value).toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return '€ ' + parts.join(',');
}

export function onlyThousandPoint(value, decimals = 2) {
    let parts = Number(value).toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return parts.join(',');
}
