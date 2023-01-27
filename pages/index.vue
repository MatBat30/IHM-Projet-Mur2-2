<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      inputValue: '',
    }
  },
  computed: {
    ...mapState({
      inputValue: state => state.inputValue,
    }),
  },

  methods: {
    ...mapActions({
      updateInputValue: 'updateInputValue',
    }),
    handleInput(e) {
      this.updateInputValue(e.target.value)
    },
  },
}
</script>

<template>
  <div class="w-full h-240 relative-border bg black overflow-hidden border-5 border-blue" style="display: flex; flex-direction: row">
    <div class="w-1200px h-800px relative-border border-5 border-red" style="display: flex; flex-direction: row">
      <div class="w-1/2 h-1/2 relative-border bg black overflow-hidden border-5 border-black" />
      <div class="w-1/2 h-1/2 relative-border bg black overflow-hidden border-5 border-black ">
        <!--        <img src=""> -->
      </div>
    </div>
    <div class="w-200px h-50px border-5 border-red">
      <form>
        <input v-model="inputValue" type="text">
        <button class="w-1/5 h-auto border-1" @click="submitForm">
          <p>val</p>
        </button>
      </form>
    </div>
  </div>
</template>

