<template>
  <div @click="But">
    <button :class="
            type ==='warn'?'warn':
            type ==='error'?'error':'defaultBtn'">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'vue-button',
  props: {
    type: {
      type: String,
      default: 'defaultBtn'
    }
  },
  methods: {
    But () {
      console.log(1)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
button {
  color: #ffffff;
  border: none;
}

button.defaultBtn {
  background: blue;
}

button.warn {
  background: red;
}

button.error {
  background: pink;
}
</style>
