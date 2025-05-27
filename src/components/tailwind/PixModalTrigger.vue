<template>
    <a @click="openModal(component)" href="javascript:void(0);">
        <slot></slot>
    </a>
</template>

<script>

export default {

    inject: ['eventBus'],

    props: {
        component: {
            type: [Object, Function],
            required: true,
        },
    },

    components: {
    },

    data() {
        return {
            // vueForm: new VueForm5()
        }
    },

    methods: {
        openModal(component) {
            this.eventBus.emit('modal-open', {component: component, attributes: this.$attrs});
        },
    },

    mounted() {
    },

    created() {
        // Event.('event', () => {});
    },

    computed: {
        // func() {}
    }
}
</script>

<style scoped>

</style>
