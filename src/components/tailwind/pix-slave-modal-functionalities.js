
export default {

    inject: ['eventBus'],

    // this is needed to make sure classes of the button trigger will not be appied to the modal
    inheritAttrs: false,

    data() {
        return {
            loading: false,
        }
    },

    methods: {
        closeModal() {
            this.eventBus.emit('modal-close');
        },
        setLoading(status) {
            this.loading = status;
            this.eventBus.emit('modal-loading', status);
        },
    },

    // as example
    mounted() {
        // this.$emit('set-size', 'xl')
    },

    // created() {
    //     this.eventBus.on('close-modal', () => {
    //         console.log(3333);
    //         // this.closeModal();
    //     });
    // }
}