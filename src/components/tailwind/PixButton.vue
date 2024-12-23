<template>
    <template v-if="href !== null">
        <a :href="disabled ? null : href"
           @click="disabled && $event.preventDefault()"
           :class="['border font-bold py-2 px-4 rounded inline-block', { 'opacity-50 cursor-not-allowed': disabled }]"
           target="_self">
            <slot></slot>
        </a>
    </template>
    <template v-else>
        <button
            type="button"
            :disabled="disabled"
            :class="['border font-bold py-2 px-4 rounded', { 'opacity-50 cursor-not-allowed': disabled }]">
            <slot></slot>
        </button>
    </template>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: null,
        },
        size: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
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
</style>