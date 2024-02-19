<template>
  <input type="text" :value="value" @input="$emit('update:value', $event.target.value)" />
</template>

<script>

export default {
  props: ['value'],
  emits: ['update:value']
}

</script>









