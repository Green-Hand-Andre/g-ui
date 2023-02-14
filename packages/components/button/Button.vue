<template>
    <button :class="[bem.b()]">
        <slot></slot>
    </button>
</template>

<script>
    import { createNamespace } from "../../utils/create";
    const bem = createNamespace("button");
    export default{
        name:"GButton"
    }
</script>

<script setup>


</script>