<template>
  <div class="msg"
       ref="msg"
       :class="{active:msgStatus}">
    <div class="msg-warpper">
      {{text}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'msg',
  data () {
    return {
      msgStatus: false,
      text: ''
    }
  },
  methods: {
    msgpluin (msg, time) {
      var newTime
      this.text = msg
      this.msgStatus = true
      // console.log(1)
      !time ? time = 2000 : newTime = time
      setTimeout(() => {
        this.msgStatus = false
      }, newTime)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.msg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  min-height: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  color: #ffffff;
  transition: all 0.5s;
  z-index: 1;
  opacity: 0;
}

.msg.active {
  width: 150px;
  min-height: 25px;
  opacity: 1;
  z-index: 11;
}
</style>
