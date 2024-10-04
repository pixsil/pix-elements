<template>
    <div>
        <div class="b-overlay-wrap position-relative" :class="show ? 'b-overlay-wrap-height' : ''" aria-busy="true">
            <slot></slot>
            <div v-if="show" class="b-overlay position-absolute" style="inset: 0px; z-index: 10;">
                <div class="position-absolute bg-light rounded-3" style="inset: 0px; opacity: 0.85; backdrop-filter: blur(2px);"></div>
                <div class="position-absolute" style="top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);">
                    <span aria-hidden="true" class="spinner-border"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "pix-overlay",

    props: {
        show: false,
    },

    components: {},

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

<style scoped>
.b-overlay-wrap-height {
    min-height: 200px;
}
</style>
