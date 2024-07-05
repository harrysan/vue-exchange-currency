<template>
  <div class="container-lg py-3">
    <h3 class="mulish-semibold text-dark mb-4">Exchange Currency</h3>
    <div class="container shadow p-3 mb-5 bg-body rounded px-2 py-1">
      <div class="row">
        <div class="col p-3">
          <div
            class="d-flex flex-column flex-sm-row bd-highlight justify-content-start gap-3"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="../../assets/icon/calendar.png"
                  class="img-fluid"
                  width="24"
                  height="20"
                  alt="Calendar Today"
                />
              </div>
              <div class="flex-grow-1 ms-3">Date</div>
            </div>
            <div class="bd-highlight">{{ datetoday }}</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-3">
          <div class="d-flex flex-column flex-sm-row justify-content-start">
            <!-- Select 1 -->
            <select
              class="form-select select-curr first-item px-2 py-2"
              aria-label="Select Currency"
              v-model="value1"
            >
              <base-option :currencies="currencies"></base-option>
            </select>
            <!-- Select 2 -->
            <select
              class="form-select select-curr px-2 py-2"
              aria-label="Select Currency"
              v-model="value2"
            >
              <base-option :currencies="currencies"></base-option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-3">
          <div
            class="d-flex flex-column flex-sm-row justify-content-start align-self-center"
          >
            <div class="px-2 py-2 border rounded result">
              <div class="d-flex justify-content-between">
                <div>1</div>
                <div>
                  <span @click="copyText"
                    ><i class="fa fa-clipboard link-icon" aria-hidden="true"></i
                    ><span v-if="isCopied">(Copied to clipboard!)</span></span
                  >
                </div>
              </div>
            </div>
            <div class="exchange-icon">
              <img
                src="../../assets/icon/exchange.png"
                class="img-fluid"
                width="36"
                height="36"
                alt="Exchange Icon"
              />
            </div>
            <div class="px-2 py-2 border rounded result">
              <div class="d-flex justify-content-between">
                <div>16000</div>
                <div>
                  <span @click="copyText"
                    ><i class="fa fa-clipboard link-icon" aria-hidden="true"></i
                    ><span v-if="isCopied">(Copied to clipboard!)</span></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-3">
          <div class="d-flex flex-column">
            <small class="text-muted"
              >*Exchange rate may change during transaction process.</small
            >
            <small class="text-muted"
              >*Last updated currency {{ datetoday }}.</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from "dateformat";
import { useStore } from "vuex";
import { ref } from "vue";
import BaseOption from "../../components/ui/BaseOption.vue";

export default {
  components: { BaseOption },
  setup() {
    const store = useStore();
    const currencies = store.getters.currencies;
    const value1 = ref("");
    const value2 = ref("");
    const isCopied = ref(false);

    const now = new Date();
    const datetoday = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

    function copyText() {
      console.log("copy text clicked");
    }

    return { value1, value2, datetoday, currencies, isCopied, copyText };
  },
};
</script>

<style scoped>
/* small screen */
@media (max-width: 575.98px) {
  .first-item {
    margin-bottom: 1rem;
  }
  .exchange-icon {
    transform: rotate(-0.25turn);
    align-self: center;
    margin-right: 5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}

@media (min-width: 576px) {
  .first-item {
    margin-right: 5rem;
  }
  .exchange-icon {
    margin-left: 1.5rem;
    margin-right: 1.3rem;
  }
}

/* large screen */
@media (min-width: 1000px) {
  .first-item {
    margin-right: 9rem;
  }
  .exchange-icon {
    margin-left: 3.5rem;
    margin-right: 3.3rem;
  }
}

.select-curr {
  width: 300px;
  max-height: 300px;
  overflow-y: scroll;
  white-space: normal;
}

.result {
  width: 300px;
  white-space: normal;
}
</style>
