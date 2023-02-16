<template>
    <button :class="[buttonType,buttonSize,bem.b()]">
        <slot></slot>
    </button>
</template>

<script >
    export default{
        name:"GButton"
    }
</script>

<script setup>
    import {computed} from "vue";
    import { createNamespace } from "../../utils/create";
    const bem = createNamespace("button");
    const props = defineProps({
        type:{
            require:false,
            type:String,
            default:'default'
        },
        size:{
            require:false,
            type:String,
            default:'default'
        }
    })


    const buttonType = computed(()=>'g-button--'+props.type)
    const buttonSize = computed(()=>'g-button--'+props.size)


</script>