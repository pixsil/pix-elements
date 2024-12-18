export default {

    props: {
    },

    data() {
        return {
        }
    },

//    mounted: function () {
//    },
//
//    created: function () {
//    },

    methods: {
        calculateCalendarStartDate(date) {
            let calculated_day = new Date(date.addDays(3).setHours(0,0,0,0));

            // on wednesday, thursday, friday and saturday - add the two weekend days
            if ([3,4,5,6].includes(date.getDay())) {
                calculated_day = calculated_day.addDays(2);
            }
            // on sunday - add one weekend day
            if ([0].includes(date.getDay())) {
                calculated_day = calculated_day.addDays(1);
            }

            return calculated_day;
        },
    }
}
