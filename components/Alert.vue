<template>
  <div id="alert-messages" class="alerts">
    <transition-group name="fade">
      <div v-for="(message, idx) in messages" :key="idx">
        <div v-if="show" class="alert" :class="classObject">
          <span>{{ message }}</span>
          <span class="alert__btn-close" @click="closeMessage(idx)"
            >&times;</span
          >
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: null
    },
    messageType: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
    classObject() {
      console.log('messageType', this.messageType)
      return {
        'alert--success': this.messageType.toLowerCase() === 'success',
        'alert--info': this.messageType.toLowerCase() === 'info',
        'alert--warning': this.messageType.toLowerCase() === 'warning',
        'alert--danger': this.messageType.toLowerCase() === 'danger'
      }
    }
  },
  methods: {
    closeMessage(idx) {
      this.messages.splice(idx, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 15px;
  width: 100%;
  justify-content: space-between;

  &__btn-close {
    cursor: pointer;
    transition: all 0.5s;
  }
  &--success {
    background-color: lightgreen;
    color: darken(lightgreen, 40%);
  }
  &--info {
    background-color: lightblue;
    color: darken(lightblue, 40%);
  }
  &--warning {
    background-color: lightgoldenrodyellow;
    color: darken(lightgoldenrodyellow, 40%);
  }
  &--danger {
    background-color: lightcoral;
    color: darken(lightcoral, 40%);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
