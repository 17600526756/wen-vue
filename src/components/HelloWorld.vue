<template>
  <div class="hello">
    <h1>hello HelloWorld</h1>
    <input placeholder='请输入姓名'
           v-model="value">
    <button @click="submit">提交</button>
    <msg ref="msg"></msg>
    <vue-button type='warn'>警告按钮</vue-button>
    <vue-button type='error'>错误按钮</vue-button>
    <vue-button>默认按钮</vue-button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: null
    }
  },
  methods: {
    submit () {
      if (!this.value) {
        console.log(this.$msg)
        // this.$myMethods()
        // alert('姓名不能为空')
        this.$nextTick(() => {
          this.$refs.msg.msgpluin('请输入姓名', 6000)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
