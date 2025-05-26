<!-- v2: added basic functionalitties no delete button etc -->
<template>
    <div class="max-w-md mx-auto">
<!--        <label data-browse="Browse" class="custom-file-label" :class="[ readOnly ? 'disabled' : '' ]" @click="handleClick">-->
<!--            <span v-if="!has_file" class="d-block" style="pointer-events: none;">No file chosen</span>-->
<!--            <span v-else-if="has_file && !is_uploaded_file" class="d-block" style="pointer-events: none;">File selected for upload</span>-->
<!--            <span v-else class="d-block" style="pointer-events: none;">File uploaded</span>-->
<!--        </label>-->
        <input type="file"
               v-bind="$attrs"
               :model-value="modelValueDate"
               @change:model-value="changeValue($event)"
               :disabled="disabled"
               class="w-full border border-gray-300 text-slate-500 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-slate-500 rounded"
        />
    </div>
</template>


<script>
import Datepicker from "@vuepic/vue-datepicker";

export default {
    props: {
        modelValue: String,
        readOnly: {
            type: Boolean,
            default: null,
        },
    },

    emits: [
        'update:modelValue',
    ],


    components: {Datepicker},

    data() {
        return {}
    },

    methods: {
        // handleClick() {
        //     if (this.readOnly) {
        //         return;
        //     }
        //     this.$refs.file.click()
        // },
        // selectedFile(event) {
        //
        //     let file = event.target.files[0];
        //
        //     var file_object = {
        //         'file': file,
        //         'delete': false,
        //     }
        //
        //     this.$emit('update:modelValue', file_object)
        // },
        changeValue(event) {
            console.log(333);
            this.$emit('update:modelValue', this.formatToStore(event));
        },
    },

    mounted() {

    },

    created() {
        // Event.('event', () => {});
    },


    computed: {
        has_file() {
            return this.modelValue?.file ? true : false;
        },
        is_uploaded_file() {
            // guard false
            if (!this.modelValue.file) {
                return false;
            }
            //
            if (typeof this.modelValue.file !== 'string') {
                return false;
            }

            return true;
        },
        modelValueDate() {
            if (this.modelValue === null) {
                return null;
            }
            return new Date(this.modelValue)
        },
}
}
</script>

<style scoped>
.disabled {
    background-color: #e9ecef;
}
.inputx {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #6b7280;
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-shadow: 0 0 #0000;
}
</style>
