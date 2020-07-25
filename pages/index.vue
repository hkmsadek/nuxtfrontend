<template>
  <div class="container">
    <div>
        <h1>user is : {{$store.state.authUser}}</h1>
        <Button type="info" @click="login">Login</Button>
        <Button type="info" @click="getUser">Get user</Button>



    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  methods : {
     async login(){

        const res = await this.callApi('get', 'login')
        if(res.status==200){
           console.log(res.data)
        }

     },
     async getUser(){
        const res = await this.callApi('post', 'post', {})
        console.log(res.data)
     }
  },

  // async created(){
  //     const res = await this.callApi('get', 'myuser')
  //     console.log(res)
  // },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
