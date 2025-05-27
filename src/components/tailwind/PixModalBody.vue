<template>
    <slot name="override">
        <div class="modal-body">
            <div class="p-4 md:p-5 space-y-4">
                <slot></slot>
            </div>
        </div>
    </slot>
</template>

<script>
export default {
    props: {},

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

</style>