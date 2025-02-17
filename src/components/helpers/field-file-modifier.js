// v1 now in components

export default {
    methods: {
        setFile(object, key, event) {
            object[key]['file'] = event.target.files[0];
            object[key]['delete'] = false;
        },
        getFile(object, key) {
            if (!object[key]) {
                return;
            }

            // give back null when it is a string
            // make a nice 'file connected' message to the field
            if (!(object[key]['file'] instanceof File)) {
                return null;
            }

            return object[key]['file'];
        },
        hasAlreadyFile(object, key) {
            if (!object[key]) {
                return false;
            }
            if (typeof object[key]['saved_name'] === 'string') {
                return true;
            }

            return false;
        },
    },
}
