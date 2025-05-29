<!-- v2: added basic functionalitties no delete button etc -->
<template>
    <div class="">
<!--        <label data-browse="Browse" class="custom-file-label" :class="[ readOnly ? 'disabled' : '' ]" @click="handleClick">-->
<!--            <span v-if="!has_file" class="d-block" style="pointer-events: none;">No file chosen</span>-->
<!--            <span v-else-if="has_file && !is_uploaded_file" class="d-block" style="pointer-events: none;">File selected for upload</span>-->
<!--            <span v-else class="d-block" style="pointer-events: none;">File uploaded</span>-->
<!--        </label>-->
        <input type="file"
               v-bind="$attrs"
               @change="onSelectedFile"
               :disabled="disabled"
               :class="[ disabled ? 'bg-gray-200 cursor-not-allowed file:cursor-not-allowed' : 'file:cursor-pointer cursor-pointer file:hover:bg-gray-200' ]"
               class="w-full border border-gray-300 text-slate-500 font-medium text-sm bg-white border file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:text-slate-500 rounded"
        />
    </div>
</template>


<script>
export default {
    props: {
        modelValue: [File, String, null],
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    emits: [
        'update:modelValue',
    ],

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
        onSelectedFile(event) {
            let file = event.target.files[0];

            // var file_object = {
            //     'file': file,
            //     'delete': false,
            // }

            this.$emit('update:modelValue', file)
        },
        // changeValue(event) {
        //     this.$emit('update:modelValue', event);
        // },
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
