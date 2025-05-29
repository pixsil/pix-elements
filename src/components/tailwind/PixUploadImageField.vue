<template>
    <div>
        <div class="form-group">
            <div class="">
                <div class="font-weight-bold">
<!--                    <label class="col-form-label" :for="field.column_name">{{ field.label }}</label>-->
                </div>
            </div>
            <div class="">
                <div class=" ">

                    <div class="">
                        <div class=" mb-3">

                            <div class="input-group">
                                <PixUploadField
                                    accept="image/*"
                                    :disabled="upload_disabled"
                                    :modelValue="modelValue"
                                    @update:modelValue="onFileSelect"
                                ></PixUploadField>
                            </div>

                        </div>

                        <!-- loading -->
                        <div class="" v-if="status === 'loading'">
                            Loading
<!--                            <b-overlay :show="true" rounded="sm">-->
<!--                                <b-img class="init_loading_img" thumbnail fluid></b-img>-->
<!--                            </b-overlay>-->
                        </div>
                        <!-- could not loaded -->
                        <div class="" v-else-if="status === 'could_not_loaded'">
                            <div class="cropper_outer_div img-thumbnail img-fluid">
                                <span class="m-2">The image could not be loaded</span>
                            </div>
                        </div>
                        <div class="" v-else-if="status === 'loaded'">
                            <div v-if="!crop_mode">
                                <div class="flex justify-center my-4">
                                    <img class="h-[300px] w-auto object-contain" :src="cropped_image_base64" alt=""/>
<!--                                        <b-overlay :show="loading" rounded="sm">-->
<!--                                            <b-img class="cropped_img" thumbnail fluid :src="cropped_image_base64"></b-img>-->
<!--                                        </b-overlay>-->
                                </div>
                                <div class="">
                                    <button type="button"
                                            @click="editCrop()"
                                            class="btn btn-white">
                                        <slot name="edit-crop">Edit crop</slot>
                                    </button>
<!--                                        <b-button-group class="w-100">-->
<!--                                            <b-button @click="editCrop()" variant="default"><i class="fas fa-crop-alt"></i></b-button>-->
<!--                                        </b-button-group>-->
                                </div>
                            </div>
                            <div v-else>
                                <div class="">
                                    <div class="">
                                        <div class="my-4">
                                            <pix-overlay :show="loading" rounded="sm">
                                                <img
                                                    v-if="original_image_base64"
                                                    ref="image"
                                                    :src="original_image_base64"
                                                    @load="onReady"
                                                    class="h-[300px] w-auto"
                                                    alt=""/>
                                            </pix-overlay>
                                        </div>
                                        <div class="">
                                            <button type="button"
                                                    @click="endCrop()"
                                                    class="btn btn-white">
                                                <slot name="edit-crop">Save crop</slot>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

// Local
import 'cropperjs/dist/cropper.css';
import {PixOverlay} from "pix-elements";
import Cropper from 'cropperjs';
import {PixUploadField} from "./index";

export default {

    inject: ['eventBus'],

    components: {
        PixOverlay,
        PixUploadField,
    },

    props: {
        field: Object,
        modelValue: File,
        cropValue: Object,
    },

    emits: [
        'update:modelValue',
        'update:cropValue',
    ],

    data() {
        return {
            // selected_image: null,
            status: 'empty',
            loading: false,
            cropper: null,
            original_image: null,
            original_image_base64: null,
            cropped_image: null,
            cropped_image_base64: null,
            // crop_mode: false,
            coords: null,
            // crop_data_object: null,
            mime_type: '',
            cropedImage: '',
            autoCrop: false,
            selectedFile: '',
            image: '',
            dialog: false,
            files: '',
            crop_mode: false,
            upload_disabled: false,
        }
    },

    methods: {
        changeValue(file) {
            console.log(2);
            console.log(file);
            // this.$emit('update:modelValue', file);
        },
        deleteFile() {
            // this.modelValue = null;
            // this.cropValue = null;
            this.status = 'empty';
        },
        onFileSelect(file) {

            // set loading
            this.status = 'loading';
            this.loading = true;
            this.crop_mode = false;

            this.eventBus.emit('modal-disable-close', false);

            this.$emit('update:modelValue', file)
            this.$emit('update:cropValue', null)

            // get the original image
            // const file = e.target.files[0]

            // set the original image to the formdata
            // this.vueFormParent.formData[this.field.column_name] = file;
            // this.cropValue = null;

            this.mime_type = file.type

            if (typeof FileReader === 'function') {

                const reader = new FileReader()

                reader.onload = (event) => {

                    this.cropped_image_base64 = event.target.result
                    this.original_image_base64 = event.target.result

                    // remove loading
                    this.loading = false;
                    this.status = 'loaded';

                    this.$nextTick(() => {
                        if (this.crop_mode) {
                            this.onReady();
                        }
                    });
                    // this.$refs.cropper.replace(this.selected_image)
                }

                reader.readAsDataURL(file)
            } else {
                alert('Sorry, FileReader API not supported')
            }
        },
        async onFileLoad(file) {
          // start loading
          this.status = 'loading';
          this.loading = true;
          this.crop_mode = false;
          this.upload_disabled = false;

          this.eventBus.emit('modal-disable-close', false);

          this.mime_type = file.type;

          if (typeof FileReader !== 'function') {
            return alert('Sorry, FileReader API not supported');
          }

          const reader = new FileReader();
          reader.onload = async (e) => {
            // set both original and cropped previews to full image
            this.original_image_base64 = e.target.result;
            this.cropped_image_base64 = e.target.result;

            // finish loading
            this.loading = false;
            this.status = 'loaded';

            // if there's a saved crop, apply it off-screen
            if (this.cropValue) {
              await this.applySavedCrop();
            }
          };
          reader.readAsDataURL(file);
        },
        applySavedCrop() {
          return new Promise((resolve) => {
            // create hidden image for cropping
            const img = document.createElement('img');
            img.style.visibility = 'hidden';
            img.src = this.original_image_base64;
            document.body.appendChild(img);

            img.onload = () => {
              const tempCropper = new Cropper(img, {
                viewMode: 2,
                ready: () => {
                  // apply saved coordinates
                  tempCropper.setData(this.cropValue);

                  // generate cropped image if available
                  const canvas = tempCropper.getCroppedCanvas();
                  if (canvas) {
                    this.cropped_image_base64 = canvas.toDataURL(this.mime_type);
                  } else {
                    console.warn('applySavedCrop: getCroppedCanvas returned null');
                  }

                  // clean up
                  tempCropper.destroy();
                  document.body.removeChild(img);
                  resolve();
                }
              });
            };
          });
        },
        editCrop() {

            this.crop_mode = true;
            this.upload_disabled = true;

            this.eventBus.emit('modal-disable-close', true);

            // init crop object
            // this.$emit('update:cropValue', {})

            // this.$nextTick(() => {
            //     this.$refs.cropper.replace(this.original_image_base64)
            // });
        },
        endCrop() {
            if (!this.cropper) return;

            // Save crop coordinates
            const crop_data = this.cropper.getData();
            // this.crop_data_object = crop_data;

            // Generate the cropped image as Base64
            const canvas = this.cropper.getCroppedCanvas();
            this.cropped_image_base64 = canvas.toDataURL(this.mime_type);

            // Destroy the Cropper instance and clear it
            this.cropper.destroy();
            this.cropper = null;

            this.crop_mode = false;

            this.eventBus.emit('modal-disable-close', false);

            this.upload_disabled = false;

            // Exit crop mode
            this.$emit('update:cropValue', crop_data);
        },
        onReady() {
            if (!this.cropper && this.original_image_base64) {

                this.cropper = new Cropper(
                    this.$refs.image, {
                        viewMode: 2,
                        ready: () => {
                            if (this.cropValue) {
                                this.cropper.setData(this.cropValue);
                            }
                        }
                    });
            }
        },
        // onReady() {
        //
        //     // this.$refs.cropper.setData(this.cropValue);
        // },
        onFullyLoaded() {
            // guard empty
            if (!this.vueFormParent.formData[this.field.column_name]) {
                return;
            }

            // set status loading
            this.status = 'loading';

            // load the image
            this.mimetype_checker('/serve-image/'+ this.field.table_config_id +'/'+ this.field.id +'/'+ this.vueFormParent.formData.id)
        },
        mimetype_checker(myurl) {

            axios.request({
                url: myurl,
                method: 'GET',
                responseType: 'blob', //important
            })
                .then(({ data }) => {
                    var reader = new FileReader();
                    reader.readAsDataURL(data);
                    reader.onload = (e) => {
                        this.cropped_image_base64 = e.target.result;
                        this.original_image_base64 = e.target.result;

                        // we are loading the cropper js
                        this.loading = true;

                        // set success first
                        this.status = 'loaded';

                        // if we have crops cropmode is activated fill the editor
                        if (this.crop_mode) {
                            this.$nextTick(() => {
                                // this.$refs.cropper.setData(this.cropValue);
                                this.$refs.cropper.replace(this.original_image_base64)
                            });
                        }

                        // finish loading
                        this.loading = false;
                    };
                })
                .catch((error) => {
                    this.status = 'could_not_loaded';
                });
        },
    },

    mounted() {
        if (this.modelValue) {
            this.onFileLoad(this.modelValue)
        }
    },

    created() {
    },

    computed: {
    }

}
</script>

<style scoped>

/* cropped image size non loaded */
.init_loading_img {
    height: 100px;
    width: 100%;
}
.cropped_img {
    max-height: 300px;
}
.cropper_outer_div >>> img {
    max-height: 300px;
    /*max-width: 100%;*/
}
.custom-file-label {
    cursor: pointer;
}
</style>
