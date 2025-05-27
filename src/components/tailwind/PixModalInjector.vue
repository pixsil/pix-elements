<template>

    <div>
        <component v-if="show" :is="component" v-bind="attributes"></component>
<!--        <component @set-size="setSize" :is="component" @loading="setLoading" v-bind="attributes"></component>-->
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

import PixOverlay from "./PixOverlay.vue";

export default {

    inject: ['eventBus'],

    props: {},

    mixins: [
    ],

    components: {
        PixOverlay
    },

    data() {
        return {
            show: false,
            component: null,
            attributes: {},
        }
    },

    methods: {
        openModal({component, attributes}) {
            this.show = true;
            this.component = component;
            this.attributes = attributes;
        },
        closeModal() {
            console.log(333);
            this.show = false;
            this.component = null;
        },
    },

    mounted() {

    },

    created() {
        this.eventBus.on('modal-open', this.openModal)
        this.eventBus.on('modal-close', this.closeModal)
    },

    computed: {}
}
</script>
