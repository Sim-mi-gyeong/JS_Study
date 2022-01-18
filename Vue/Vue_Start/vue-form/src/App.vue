<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input id="username" type="text" v-model="username">
      <!-- input에 있는 내용을 v-model을 이용해 연결하면 
      -> input에 값이 입력될 때마다 자동으로 username에 반영이 되고, 
      -> 반대로, username의 내용을 화면에 input에 그대로 연결해주는 -> 2 way data binding 기술 -->
    </div>
    <div>
      <label for="password">pw : </label>
      <input id="password" type="password" v-model="password">
    </div>
    <!-- type="submit" : 버튼의 event가 올라가서 form까지 연결 ( 이벤트 버블링, 이벤트 캡처링 )-->
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // submitForm: function(event) {   // 폼의 이동/새로고침을 막는 방법: event 인자를 받아 -> event.preventDefault()
    //   event.preventDefault();
    //   console.log(this.username, this.password);
    // }
    submitForm: function() {    
      // event modifier: submit에 대해 event의 기본적인 동작을 막음 
      // <form v-on:submit.prevent="submitForm">
      console.log(this.username, this.password);
      // jsonplaceholder 검색 
      // url로 데이터를 보내고 결과를 받을 수 있음
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>