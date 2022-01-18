<template>
  <!-- template root는 하나의 element만 있어야 함 (div 여러개 병렬적으로 X)-->
  <div>
    <!-- 3. app-header 컴포넌트 등록(태그 정의) -->
    <!-- 프롭스 속성 이름은 하위 컴포넌트에서 정의한 프롭스 속성 이름
    상위 컴포넌트는 App.vue -->
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트 데이터 이름"></app-header></app-header>  -->
    <!-- str 이라는 데이터를 propsdata로 porps 속성으로 내려보냄 -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr">   
      <!-- v-on으로 아래에서 올라온 이벤트를 받아 renewStr 메서드 실행 -> 메서드 실행 시 this에 의헤 str 데이터 변경 -->
    </app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'   // 1. 파일의 내용이 변수(AppHeader)에 담겼고
// 원래는 
// var AppHeader = {
//   template: '<app-header><h1>Header</h1></app-header>'
// }

// new Vue({
//   data: {
//     str: 'hi'
//   }
// })
// 여러개의 컴포넌트에서 동일한 값을 공유(참조)하면 X -> function 함수 연결 후 return으로 새 객체를 반환해야함.
export default {
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header' : AppHeader   // 2. 변수의 내용을 연결했다
  },
  methods: {
    renewStr: function() {
      this.str = 'hi';
    }
  }

}
</script>

<style>

</style>