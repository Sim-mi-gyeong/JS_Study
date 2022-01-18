<template>
  <header>
      <!-- <h1>Header</h1> -->
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">Send</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
             // renew 라는 이벤트를 올림: 값을 갱신 
             // -> 1. 이벤트를 올렸을 때 받을 수 있는 곳은 가장 먼저, appHeader 컴포넌트를 등록한 태그!
            this.$emit('renew');  
        }
    }
}
</script>

<style>

</style>