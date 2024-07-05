<template>
  <option
    v-for="curr in currencies"
    :key="curr.code"
    :value="curr.code"
    class="px-2 py-2"
  >
    <div class="d-flex">
      <div>{{ curr.code }} - {{ curr.name }}</div>
    </div>
  </option>
</template>

<script>
export default {
  props: ["currencies"],
};
</script>

<style>
</style>