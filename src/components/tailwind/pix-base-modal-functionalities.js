// v3 > uni_pdfgen -->

export default {

    inject: ['eventBus'],

    props: {},

    components: {},

    data() {
        return {
            loading: false,
            show: false,
            component: null,
            attributes: {},
            size: 'md',
        }
    },

    methods: {
        openModal({component, attributes}) {
            this.component = component;
            this.attributes = attributes;
            this.show = true;
        },
        closeModal() {
            this.show = false;
            this.component = null;
            this.size = 'md';
        },
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
        this.eventBus.on('modal-open', this.openModal)
        this.eventBus.on('modal-close', this.closeModal)
        this.eventBus.on('modal-loading', this.setLoading)
    },

    computed: {}
}
