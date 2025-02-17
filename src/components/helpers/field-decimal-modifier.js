export default {
    methods: {
        setDecimalComma(object, key, decimals, value) {
            value = value.target.value
            // if a value with numbers and one dot or a comma
            // if not just give back the entered value
            if (value.match(/^[-]?\d+([.,]\d+)?$/g)) {

                // make it an float with dot
                value = parseFloat(value.replace(',', '.'));

                // make it the right length, and output float again
                value = parseFloat(value.toFixed(decimals));
            }

            object[key] = value;
        },
        getDecimalComma(object, key) {
            if (!object[key]) {
                return;
            }

            // only transform if the value is a number
            if (typeof object[key] !== 'number') {
                return object[key];
            }

            return object[key].toFixed(3).replace('.', ',');
        },
    },
}
