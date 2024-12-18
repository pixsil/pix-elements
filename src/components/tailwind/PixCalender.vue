<!-- v2: placed in github -->

<template>
    <Datepicker class="datepicker"
                :auto-apply="true"
                :enableTimePicker="false"
                :model-value="modelValueDate"
                @update:model-value="changeDate($event)"
                :disabled="disabled"
                :format="formatField"
                :teleport="true"
                :ui="{ input: 'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full' }"
    >
    </Datepicker>
</template>

<script>

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: {
        Datepicker,
    },

    props: {
        modelValue: String,
        disabled: {
            type: Boolean,
            default: false,
        },
        withBlockedDates: {
            default: true,
            type: Boolean,
        }
    },

    emits: [
        'update:modelValue',
    ],

    data() {
        return {
            current_date: new Date(),
        }
    },

    methods: {
        changeDate(event) {
            this.$emit('update:modelValue', this.formatToStore(event));
        },
        formatField(date) {
            if (!this.isDateValid(date)){
                return null;
            }
            // const day = date.getDate();
            // const month = date.getMonth() + 1;
            // const year = date.getFullYear();

            var MyDateString;

            MyDateString = ('0' + date.getDate()).slice(-2) + '-'
                + ('0' + (date.getMonth()+1)).slice(-2) + '-'
                + date.getFullYear();

            return MyDateString;
        },
        formatToStore(date) {
            if (!date) {
                return null;
            }
            // const day = date.getDate();
            // const month = date.getMonth() + 1;
            // const year = date.getFullYear();

            var MyDateString;

            MyDateString =
                date.getFullYear()
                + '-'
                + ('0' + (date.getMonth()+1)).slice(-2)
                + '-'
                + ('0' + date.getDate()).slice(-2);

            return MyDateString;
        },
        isDateValid(date_object) {
            return date_object instanceof Date;
        },
    },

    mounted() {
    },

    created() {
    },

    computed: {
        modelValueDate() {
            if (this.modelValue === null) {
                return null;
            }
            return new Date(this.modelValue)
        },
    }
}
</script>

<style scoped>
.datepicker :deep(.dp__input) {
    border-radius: 0.375rem;
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    margin-top: 0.25rem;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-width: 1px;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    line-height: 1.5rem;
    font-size: 0.875rem;
}
</style>
