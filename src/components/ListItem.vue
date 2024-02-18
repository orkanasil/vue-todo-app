<template>
    <li class="w-full d-flex align-items-center justify-content-between mb-2">
        <div class="mt-4" v-if="isEditing && tempId === item.id">
            <input v-model="listItemText" />
            <CustomButton :class="'update'" @click="onChange">Update</CustomButton>
        </div>
        <template v-else>
            <h4 class="m-0">{{ item.text }} </h4>
            <div>
                <CustomButton :class="'danger'" @click="$emit('removeFromList', item.id)">Remove</CustomButton>
                <CustomButton :class="'edit'" @click="$emit('editItem', item)">Edit</CustomButton>

            </div>
        </template>
    </li>
</template>

<script>
import CustomButton from './CustomButton.vue'
export default {
    components: {
        CustomButton
    },
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