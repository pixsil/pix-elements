<template>

    <slot name="override">
        <div class="flex justify-center">

            <div id="default-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex" aria-modal="true" role="dialog">
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

                        <PixOverlay :show="loading">
                            <slot></slot>
                        </PixOverlay>
                    </div>
                </div>
            </div>
            <div class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"></div>
        </div>
    </slot>

<!--    <div v-if="show" class="modal fade" data-bs-keyboard="false" ref="base-modal">-->
<!--        <div class="modal-dialog" :class="'modal-'+ size" role="document">-->
<!--            <div class="modal-content">-->
<!--                <PixOverlay :show="loading">-->
<!--                    <component @set-size="setSize" :is="component" @loading="setLoading" v-bind="attributes"></component>-->
<!--                </PixOverlay>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>

import PixOverlay from "./PixOverlay.vue";

export default {

    inject: ['eventBus'],

    props: {},

    components: {
        PixOverlay,
    },

    data() {
        return {
            loading: false,
            size: 'md',
        }
    },

    methods: {
        setSize(size) {
            this.size = size;
        },
        setLoading(status) {
            this.loading = status;
        },
    },

    mounted() {
    },

    created() {
        this.eventBus.on('modal-loading', this.setLoading)
    },

    computed: {}
}
</script>
