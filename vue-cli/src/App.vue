<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 컴포넌트 명명법 종류 -->
    <!-- vscode에서 파일 바로가기 기능을 사용하려면 hello-world 의 컴포넌트 태그 명명법을 따르도록 -->
    <hello-world></hello-world>
    <HelloWorld></HelloWorld>
    <HelloWorld/>
  </div>
  

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 위에 컴포넌트 내용을 들고와 아래에서 컴포넌트에 연결해 사용한다.
// expoer default -> new Vue로 보면 됨
export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: 'App',
  components: {
    HelloWorld,
    // 'hello-world' : HelloWorld,   // 뒤에 HelloWorld : 컴포넌트 내용 / 이름: 'hello-world'
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
