<!-- v2 -->

<template>
    <b-table responsive v-if="local_items?.length" :items="local_items" :fields="fields" :tdClass="tdClass">
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </b-table>
    <div class="row justify-content-center text center">
        <div v-if="local_items?.length === 0">{{ tanslate('no_items') }}</div>
    </div>
    <div v-if="local_items?.length"  class="row mt-4 justify-content-center text center">
        <Bootstrap4Pagination :show-disabled="true" :limit="8" :data="items" @pagination-change-page="this.$emit('on-pagination-change', $event)">
            <template #prev-nav>
                <span>Previous</span>
            </template>
            <template #next-nav>
                <span>Next</span>
            </template>
        </Bootstrap4Pagination>
    </div>
</template>

<script>
import { Bootstrap4Pagination } from 'laravel-vue-pagination';

export default {
    props: {
        lang: {
            default: 'en',
            type: String,
        },
        fields: {
            type: Array,
            default: null,
        },
        items: [Array, Object],
        tdClass: {
            type: [Function], // [String, Array, Function]
            default: null,
        },
    },

    emits: [
        'on-pagination-change'
    ],

    components: {
        Bootstrap4Pagination
    },

    data() {
        return {
            text: {
                nl: {
                    'no_items': 'Cannot find any items..'
                },
                en: {
                    'no_items': 'Kan geen items vinden..'
                }
            },
        }
    },

    methods: {
        tanslate(key) {
            return this.text[this.lang][key];
        }
    },

    mounted() {
    },

    created() {
    },

    computed: {
        local_items() {
            if (typeof this.items === "object") {
                return this.items.data;
            }

            return this.items;
        }
    }
}
</script>

<style scoped>
</style>
