<template>
    <li class="w-full d-flex align-items-center justify-content-between mb-2">
        <div class="mt-4" v-if="isEditing && tempId === item.id">
            <input v-model="listItemText" />
            <button @click="onChange" class="btn btn-success">Update</button>
        </div>
        <template v-else>
            <h4 class="m-0">{{ item.text }} </h4>
            <div>
                <button class="btn btn-danger" @click="$emit('removeFromList', item.id)">
                    Remove
                </button>
                <button class="btn btn-secondary" @click="$emit('editItem', item)">
                    Edit
                </button>
            </div>
        </template>
    </li>
</template>

<script>
export default {
    props: ['item', 'isEditing', 'tempId'],
    data() {
        return {
            listItemText: ''
        }
    },
    methods: {
        onChange() {
            this.$emit('update', {
                id: this.item.id,
                text: this.listItemText
            })
        },
    },
    mounted() {
        this.listItemText = this.item.text
    }
}
</script>

<style scoped></style>