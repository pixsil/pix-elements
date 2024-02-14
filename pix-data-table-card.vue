<!-- v2 -->

<template>
    <div>
        <b-card>
            <template #header>
                <div class="row justify-content-between">
                    <div class="col-12 col-md-6 col-lg-4">
                        <slot name="header"></slot>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="d-flex">
                            <div class="flex-grow-1 mr-2 form-inputs position-relative">
                                <input ref="search_input" class="form-control" type="text" placeholder="Zoek product templates" v-debounce:300ms="onSearch" @keyup.enter="this.$emit('enter-on-search-input')">
                                <i class="bx bx-i fa-solid fa-magnifying-glass"></i>
                            </div>
                            <b-button class="d-inline-block" variant="outline-primary" :href="$route('product-templates.create')">Nieuw</b-button>
                        </div>
                    </div>
                </div>
            </template>
            <pix-data-table :items="items" :fields="fields" @on-pagination-change="this.$emit('on-pagination-change', $event)" :tdClass="fitForButtonColumn">
                <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
                    <slot :name="name" v-bind="slotData" />
                </template>
            </pix-data-table>
        </b-card>
    </div>
</template>

<script>
import vueDebounce from 'vue-debounce';
import { nextTick } from 'vue';

export default {
    props: {
        // object is it as pagination object
        items: [Array, Object],
        fields: {
            type: Array,
            default: null,
        },
        autofocus: {
            default: true,
            type: Boolean,
        }
    },

    emits: [
        'onSearch',
        'on-pagination-change',
        'enter-on-search-input',
    ],

    directives: {
        debounce: vueDebounce({ lock: true })
    },

    components: {},

    data() {
        return {
            fitForButtonColumn(value, key, item) {
                return 'fit';
                if (key === 'bottons') {
                    return 'fit';
                }
            }
        }
    },

    methods: {
        onPaginationChange(page) {
            this.$emit('onPaginationChange', page);
        },
        onSearch(text) {
            this.$emit('onSearch', text);
        },
        onSearchClear() {
            this.search_field = null;
            this.$emit('onSearch', null);
        },
    },

    mounted() {
        if (this.autofocus) {
            setTimeout(() => { this.$refs.search_input.focus() }, 300)
        }
    },

    created() {
        // Event.('event', () => {});
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
.bx {
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
    display: inline-block;
    text-transform: none;
    speak: none;
    -webkit-font-smoothing: antialiased;
}
.bx-i {
    position: absolute;
    right: 13px;
    top: 13px;
}
</style>
