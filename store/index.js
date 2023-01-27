export const state = () => ({
  inputValue: '',
})
export const mutations = {
  updateInputValue(state, value) {
    state.inputValue = value
  },
}
