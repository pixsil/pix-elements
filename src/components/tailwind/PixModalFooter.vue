<template>
    <slot name="override">
        <div class="modal-footer">
            <div class="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <slot>
                    <button type="button" class="btn btn-primary" :class="[disable_close ? 'disabled' : '']">I accept</button>
                    <button type="button" class="btn btn-white" :class="[disable_close ? 'disabled' : '']">Decline</button>
                </slot>
            </div>
        </div>
    </slot>

</template>

<script>
export default {

    inject: ['eventBus'],

    props: {},

    components: {},

    data() {
        return {
            disable_close: false
        }
    },

    methods: {
        disableClose(bool) {
            this.disable_close = bool
        },
    },

    mounted() {},

    created() {
        this.eventBus.on('modal-disable-close', this.disableClose);
    },

    computed: {}
}
</script>

<style scoped>

</style>