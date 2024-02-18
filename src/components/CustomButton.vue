<template>
    <button class="type">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['type']
}
</script>

<style scoped>
button {
    padding: 8px 16px;
    margin-left: 4px;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
}

.danger {
    background-color: rgb(211, 88, 88);
}

.proceed {
    background-color: rgb(107, 107, 219);
}

.edit {
    background-color: rgb(111, 211, 111);
}

.update {
    background-color: rgb(179, 125, 230);
}
</style>