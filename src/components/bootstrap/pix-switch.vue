<template>
    <div class="custom-control custom-switch">
        <input
            :id="'switch-' + this._.uid"
            :checked="modelValue"
            type="checkbox"
            class="custom-control-input"
            @change="toggleValue"
        >
        <label :for="'switch-' + this._.uid" class="custom-control-label"></label>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: Boolean,
    },
    emits: ['update:modelValue'],
    methods: {
        toggleValue() {
            this.$emit('update:modelValue', !this.modelValue);
        }
    }
}
</script>

<style scoped>
.custom-control {
    display: block;
    min-height: 1.44rem;
    padding-left: 1.5rem;
    position: relative;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    z-index: 1
}

.custom-control-inline {
    display: inline-flex;
    margin-right: 1rem
}

.custom-control-input {
    height: 1.22rem;
    left: 0;
    opacity: 0;
    position: absolute;
    width: 1rem;
    z-index: -1
}

.custom-control-input:checked ~ .custom-control-label:before {
    background-color: #078e1d;
    border-color: #078e1d;
    color: #fff
}

.custom-control-input:focus ~ .custom-control-label:before {
    box-shadow: 0 0 0 .2rem rgba(7, 142, 29, .25)
}

.custom-control-input:focus:not(:checked) ~ .custom-control-label:before {
    border-color: #20f443
}

.custom-control-input:not(:disabled):active ~ .custom-control-label:before {
    background-color: #51f66c;
    border-color: #51f66c;
    color: #fff
}

.custom-control-input:disabled ~ .custom-control-label, .custom-control-input[disabled] ~ .custom-control-label {
    color: #6c757d
}

.custom-control-input:disabled ~ .custom-control-label:before, .custom-control-input[disabled] ~ .custom-control-label:before {
    background-color: #e9ecef
}

.custom-control-label {
    margin-bottom: 0;
    position: relative;
    vertical-align: top
}

.custom-control-label:before {
    background-color: #fff;
    border: 1px solid #adb5bd;
    pointer-events: none
}

.custom-control-label:after, .custom-control-label:before {
    content: "";
    display: block;
    height: 1rem;
    left: -1.5rem;
    position: absolute;
    top: .22rem;
    width: 1rem
}

.custom-control-label:after {
    background: 50%/50% 50% no-repeat
}

.custom-checkbox .custom-control-label:before {
    border-radius: .25rem
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='m6.564.75-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E")
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label:before {
    background-color: #078e1d;
    border-color: #078e1d
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E")
}

.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label:before {
    background-color: rgba(7, 142, 29, .5)
}

.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label:before {
    background-color: rgba(7, 142, 29, .5)
}

.custom-radio .custom-control-label:before {
    border-radius: 50%
}

.custom-radio .custom-control-input:checked ~ .custom-control-label:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E")
}

.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label:before {
    background-color: rgba(7, 142, 29, .5)
}

.custom-switch {
    padding-left: 2.25rem
}

.custom-switch .custom-control-label:before {
    border-radius: .5rem;
    left: -2.25rem;
    pointer-events: all;
    width: 1.75rem
}

.custom-switch .custom-control-label:after {
    background-color: #adb5bd;
    border-radius: .5rem;
    height: calc(1rem - 4px);
    left: calc(-2.25rem + 2px);
    top: calc(.22rem + 2px);
    transition: transform .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    width: calc(1rem - 4px)
}

@media (prefers-reduced-motion: reduce) {
    .custom-switch .custom-control-label:after {
        transition: none
    }
}

.custom-switch .custom-control-input:checked ~ .custom-control-label:after {
    background-color: #fff;
    transform: translateX(.75rem)
}

.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label:before {
    background-color: rgba(7, 142, 29, .5)
}

.custom-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0 0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") right .75rem center/8px 10px no-repeat;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    color: #495057;
    display: inline-block;
    font-size: .9rem;
    font-weight: 400;
    height: calc(1.6em + .75rem + 2px);
    line-height: 1.6;
    padding: .375rem 1.75rem .375rem .75rem;
    vertical-align: middle;
    width: 100%
}

.custom-select:focus {
    border-color: #20f443;
    box-shadow: 0 0 0 .2rem rgba(7, 142, 29, .25);
    outline: 0
}

.custom-select:focus::-ms-value {
    background-color: #fff;
    color: #495057
}

.custom-select[multiple], .custom-select[size]:not([size="1"]) {
    background-image: none;
    height: auto;
    padding-right: .75rem
}

.custom-select:disabled {
    background-color: #e9ecef;
    color: #6c757d
}

.custom-select::-ms-expand {
    display: none
}

.custom-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #495057
}

.custom-select-sm {
    font-size: .7875rem;
    height: calc(1.5em + .5rem + 2px);
    padding-bottom: .25rem;
    padding-left: .5rem;
    padding-top: .25rem
}

.custom-select-lg {
    font-size: 1.125rem;
    height: calc(1.5em + 1rem + 2px);
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-top: .5rem
}

.custom-file {
    display: inline-block;
    margin-bottom: 0
}

.custom-file, .custom-file-input {
    height: calc(1.6em + .75rem + 2px);
    position: relative;
    width: 100%
}

.custom-file-input {
    margin: 0;
    opacity: 0;
    overflow: hidden;
    z-index: 2
}

.custom-file-input:focus ~ .custom-file-label {
    border-color: #20f443;
    box-shadow: 0 0 0 .2rem rgba(7, 142, 29, .25)
}

.custom-file-input:disabled ~ .custom-file-label, .custom-file-input[disabled] ~ .custom-file-label {
    background-color: #e9ecef
}

.custom-file-input:lang(en) ~ .custom-file-label:after {
    content: "Browse"
}

.custom-file-input ~ .custom-file-label[data-browse]:after {
    content: attr(data-browse)
}

.custom-file-label {
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    font-weight: 400;
    height: calc(1.6em + .75rem + 2px);
    left: 0;
    overflow: hidden;
    z-index: 1
}

.custom-file-label, .custom-file-label:after {
    color: #495057;
    line-height: 1.6;
    padding: .375rem .75rem;
    position: absolute;
    right: 0;
    top: 0
}

.custom-file-label:after {
    background-color: #e9ecef;
    border-left: inherit;
    border-radius: 0 .25rem .25rem 0;
    bottom: 0;
    content: "Browse";
    display: block;
    height: calc(1.6em + .75rem);
    z-index: 3
}

.custom-range {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    height: 1.4rem;
    padding: 0;
    width: 100%
}

.custom-range:focus {
    outline: 0
}

.custom-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #f8fafc, 0 0 0 .2rem rgba(7, 142, 29, .25)
}

.custom-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #f8fafc, 0 0 0 .2rem rgba(7, 142, 29, .25)
}

.custom-range:focus::-ms-thumb {
    box-shadow: 0 0 0 1px #f8fafc, 0 0 0 .2rem rgba(7, 142, 29, .25)
}

.custom-range::-moz-focus-outer {
    border: 0
}

.custom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #078e1d;
    border: 0;
    border-radius: 1rem;
    height: 1rem;
    margin-top: -.25rem;
    -webkit-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    width: 1rem
}

@media (prefers-reduced-motion: reduce) {
    .custom-range::-webkit-slider-thumb {
        -webkit-transition: none;
        transition: none
    }
}

.custom-range::-webkit-slider-thumb:active {
    background-color: #51f66c
}

.custom-range::-webkit-slider-runnable-track {
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
    color: transparent;
    cursor: pointer;
    height: .5rem;
    width: 100%
}

.custom-range::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    background-color: #078e1d;
    border: 0;
    border-radius: 1rem;
    height: 1rem;
    -moz-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    width: 1rem
}

@media (prefers-reduced-motion: reduce) {
    .custom-range::-moz-range-thumb {
        -moz-transition: none;
        transition: none
    }
}

.custom-range::-moz-range-thumb:active {
    background-color: #51f66c
}

.custom-range::-moz-range-track {
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
    color: transparent;
    cursor: pointer;
    height: .5rem;
    width: 100%
}

.custom-range::-ms-thumb {
    appearance: none;
    background-color: #078e1d;
    border: 0;
    border-radius: 1rem;
    height: 1rem;
    margin-left: .2rem;
    margin-right: .2rem;
    margin-top: 0;
    -ms-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    width: 1rem
}

@media (prefers-reduced-motion: reduce) {
    .custom-range::-ms-thumb {
        -ms-transition: none;
        transition: none
    }
}

.custom-range::-ms-thumb:active {
    background-color: #51f66c
}

.custom-range::-ms-track {
    background-color: transparent;
    border-color: transparent;
    border-width: .5rem;
    color: transparent;
    cursor: pointer;
    height: .5rem;
    width: 100%
}

.custom-range::-ms-fill-lower, .custom-range::-ms-fill-upper {
    background-color: #dee2e6;
    border-radius: 1rem
}

.custom-range::-ms-fill-upper {
    margin-right: 15px
}

.custom-range:disabled::-webkit-slider-thumb {
    background-color: #adb5bd
}

.custom-range:disabled::-webkit-slider-runnable-track {
    cursor: default
}

.custom-range:disabled::-moz-range-thumb {
    background-color: #adb5bd
}

.custom-range:disabled::-moz-range-track {
    cursor: default
}

.custom-range:disabled::-ms-thumb {
    background-color: #adb5bd
}

.custom-control-label:before, .custom-file-label, .custom-select {
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion: reduce) {
    .custom-control-label:before, .custom-file-label, .custom-select {
        transition: none
    }
}
</style>
