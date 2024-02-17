<template>
    <h2>List Items</h2>
    <ul>
        <ListItem v-for="(listItem, index) in getList" :key="index" :item="listItem" :isEditing="isEditing" :tempId="tempId"
            @remove-from-list="removeFromList($event)" @edit-item="editItem($event)" @update="onUpdate($event)" />
    </ul>
    <input class="mt-4" v-model="inputText" />
    <button class="btn btn-primary" @click="addToList">Add to List</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import ListItem from './ListItem.vue';
export default {
    components: {
        ListItem
    },
    data() {
        return {
            inputText: '',
            editText: '',
            isEditing: false,
            tempId: ''
        }
    },
    computed: {
        ...mapGetters(['getList']),
        dropdownList() {
            return this.getList.map((element) => {
                return {
                    id: element.id,
                    value: element.text
                }
            })
        }
    },
    methods: {
        ...mapActions(['appendToList', 'deleteFromList', 'updateFromList']),
        addToList() {
            const uid = uuidv4();
            this.appendToList({
                id: uid,
                text: this.inputText
            })
            this.inputText = ''
        },
        removeFromList(id) {
            console.log('here!');
            this.deleteFromList(id)
        },
        editItem(item) {
            const { id } = item
            this.isEditing = true;
            this.tempId = id
        },
        onUpdate(newItem) {
            this.updateFromList(newItem)
            this.isEditing = false;
            this.tempId = ''
        },
        find() {
            console.log('find', this.getList.find((element) => element.id === 1))
            const newArr = this.getList.map((element) => {
                return {
                    text: element.text,
                    id: element.id * 2
                }
            })
            console.log('map', newArr)
        }
    }
}
</script>

<style scoped></style>