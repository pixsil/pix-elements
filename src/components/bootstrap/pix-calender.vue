<!-- v2: placed in github -->

<template>
    <div >
        <Datepicker class="datepicker"
                    :auto-apply="true"
                    :enableTimePicker="false"
                    :model-value="modelValueDate"
                    @update:model-value="changeDate($event)"
                    :disabled-dates="withBlockedDates ? dateDisabled : []"
                    :disabled="disabled"
                    locale="nl"
                    :format="formatField"
        >
        </Datepicker>
    </div>
</template>

<script>

import calendarMixin from "./calendarMixin";

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: {
        Datepicker,
    },

    mixins: [calendarMixin],

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
        dateDisabled(calendar_render_date) {

            // disabled weekend
            if ([6,0].includes(calendar_render_date.getDay())) {
                return true;
            }
            // disabled everything before start date
            if (calendar_render_date < this.calendarStartDate) {
                return true;
            }

            return false;
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
        calendarStartDate() {
            return this.calculateCalendarStartDate(this.current_date);
        },
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
    font-family: "ubuntu-regular", sans-serif;
    font-size: 11.9167px;
    font-weight: 400;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}
</style>
