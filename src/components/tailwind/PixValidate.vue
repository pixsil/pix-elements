<!-- version 4 for inertia -->

<template>
    <div v-if="error">
        <p class="text-sm text-red-600 mt-2">
            <template v-if="label">
                {{ label }}
            </template>
            <template v-else>
                {{ error }}
            </template>
        </p>
    </div>
</template>

<script>
export default {

    props: {
        field: {
            type: Object,
            required: true,
        },
        errorBag: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: null
        }
    },

    components: {
    },

    data() {
        return {
        }
    },

    methods: {
        // ucfirst(string) {
        //     return string.charAt(0).toUpperCase() + string.slice(1);
        // },
        // getError() {
        //     // get error
        //     let error = this.vueForm.vueErrors.get(this.field);
        //
        //     // if we have one
        //     if (!!error) {
        //         // if there is given an alternative label
        //         if (!!this.label) {
        //             // override
        //             error = this.label
        //             // check if we have to use a field translation
        //         } else if (!!this.fieldTranslation) {
        //             let field = this.field.replaceAll('_', ' ');
        //             error = error.replaceAll(field, this.fieldTranslation);
        //             error = error.replaceAll(this.ucfirst(field), this.ucfirst(this.fieldTranslation));
        //         }
        //     }
        //
        //     return error;
        // }
    },

    mounted() {
        // if (typeof this.vueForm.vueErrors.fields[this.field] === 'undefined') {
        //     this.vueForm.vueErrors.fields[this.field] = null;
        // }
    },

    created() {
    },

    computed: {
        error() {
            let error;

            if (this.errorBag) {
                error = this.$page.props.errors?.[this.errorBag]?.[this.field] ?? '';
            } else {
                error = this.$page.props.errors?.[this.field] ?? '';
            }

            return error;
        }
    }
}
</script>
