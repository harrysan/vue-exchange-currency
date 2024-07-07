<template>
  <div>
    <div class="container-lg py-3">
      <h3 class="mulish-semibold text-dark mb-4">Feedback</h3>
      <div class="container shadow p-3 mb-5 bg-body rounded px-2 py-1">
        <div class="row">
          <div class="col p-3">Got a feedback? Please let us know.</div>
        </div>
        <form class="p-3">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Message</label>
            <input type="text" class="form-control" id="password" />
          </div>
          <base-button>Send</base-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
