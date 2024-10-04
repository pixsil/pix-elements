<template>
    <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Upload file</label>
    <input @change="previewFiles" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
    <PixButton>Upload</PixButton>

    <form @submit.prevent="submit">
        <input type="text" v-model="form.name" />
        <input type="file" @input="form.avatar = $event.target.files[0]" />
        <progress v-if="form.progress" :value="form.progress.percentage" max="100">
            {{ form.progress.percentage }}%
        </progress>
        <button type="submit">Submit</button>
    </form>

    <img id="blah" src="#" alt="your image" />
</template>
<script>
import PixButton from '@/Components/PixButton.vue';
import { useForm } from '@inertiajs/vue3'

export default {
    name: 'PixUploadField',

    components: {
        PixButton
    },

    emits: ['changebackground'],

    data() {
        return {
            form: useForm({
                name: null,
                avatar: null,
            }),
            tempfileurl: null,
        }
    },

    methods: {
        submit() {
            this.form.post('/users')
        },
        previewFiles(event) {
            const [file] = event.target.files
            if (file) {
                let tempfileurl = URL.createObjectURL(file)
                this.$emit('changebackground',  tempfileurl )
            }
        },
        changeInput() {
            console.log(33);
            let email = 'efef';
            let password = 'efef';
            his.$emit('submit', { email, password })
        }
    },
}
</script>
