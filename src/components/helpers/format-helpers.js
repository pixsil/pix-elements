
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

/**
 * Format a date according to a specified format.
 * Supported tokens:
 *  - DD   : day with two digits
 *  - MM   : month with two digits
 *  - YYYY : year with four digits
 *  - YY   : year with two digits
 *
 * @param {Date|string|number} date - The date to be formatted.
 * @param {string} format - The desired format, e.g. "DD-MM-YYYY" or "YY-MM".
 * @returns {string} The formatted date as a string.
 */
export function formatDate(date, format = "DD-MM-YYYY") {
    const d = new Date(date);
    const map = {
        'DD': d.getDate().toString().padStart(2, '0'),
        'MM': (d.getMonth() + 1).toString().padStart(2, '0'),
        'YYYY': d.getFullYear(),
        'YY': d.getFullYear().toString().slice(-2)
    };

    // Ensure that "YYYY" is matched before "YY" to prevent overlapping.
    return format.replace(/YYYY|YY|MM|DD/g, matched => map[matched]);
}
