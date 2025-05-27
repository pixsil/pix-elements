<template>

    <div v-if="show" id="" class="flex justify-center">

        <div id="default-modal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex" aria-modal="true" role="dialog">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

                    <PixOverlay :show="loading">
                        <component @set-size="setSize" :is="component" @loading="setLoading" v-bind="attributes"></component>
                    </PixOverlay>
                </div>
            </div>
        </div>
        <div class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"></div>
    </div>


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

import PixBaseModalFunctions from './pix-base-modal-functionalities.js';
import PixOverlay from "./PixOverlay.vue";

export default {

    props: {},

    mixins: [
        PixBaseModalFunctions
    ],

    components: {
        PixOverlay
    },

    data() {
        return {}
    },

    methods: {},

    mounted() {

    },

    created() {

    },

    computed: {}
}
</script>
