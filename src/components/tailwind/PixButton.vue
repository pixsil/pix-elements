<template>
    <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1">
            <slot />
        </button>
    </div>
</template>

<script>
export default {
    props: {},

    components: {},

    data() {
        return {}
    },

    methods: {
        submit() {
            // this.vueForm.post('/site-feedback')
            //     .then(response => this.onSuccess())
        },
        onSuccess() {
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
