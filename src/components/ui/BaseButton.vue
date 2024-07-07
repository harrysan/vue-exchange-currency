<template>
  <button class="btn btn-class" type="submit">
    <slot></slot>
  </button>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
/* small screen */
@media (max-width: 575.98px) {
  .btn-class {
    background-color: #613eea;
    color: #f9fafb;
  }
}

.btn-class {
  background-color: #613eea;
  color: #f9fafb;
}
</style>
