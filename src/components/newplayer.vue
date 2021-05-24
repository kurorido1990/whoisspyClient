<template>
  <div class="hello">
    <b-container style="margin-top: 10pt;width: 500pt;text-align: center;">
      <b-input-group size="sm" class="mb-2">
        <b-form-input v-model="name" @keyup.enter="create" placeholder="請輸入 暱稱" ref="createInput"></b-form-input>
        <b-input-group-prepend is-text>
          <b-icon @click="create" icon="arrow-return-left"></b-icon>
        </b-input-group-prepend>
      </b-input-group>
      <div><h1>{{msg}}</h1></div>
<div></div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'newplayer',
  data () {
    return {
      name: '',
      msg:'',
      topic:'',
    }
  },
  mounted() {
    // alert(this.$route.query.roomID)
  },
  methods: {
    create() {
      this.$http.get("/api/addPlayer/"+ this.$route.query.roomID+ "/"+ this.name).then((res) =>{
        console.log(res)
        this.$router.push({ name: 'getcard', query: { roomID : this.$route.query.roomID, playerID : res.data.PlayerID} })
      },function(res) {
        this.msg = res.body
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

 body{background:#363636;} 

.centered-wrap{
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}

.card-wrap{
  width:200px;
  height:280px;
  position:relative;
}

.card{
  position:absolute;
  width:100%;
  height:100%;
  /*preserve the back when fliping*/
  transform-style:preserve-3d;
  transition:0.5s all ease;
  box-shadow:0px 0px 10px rgba(10,10,0.8);
}

.card:hover{
  transform:rotateY(180deg);
}

/*front card*/
.card-front{
  border-radius:5px;
  position:absolute;
  background:#e8e8e8;
  width:100%;
  height:100%;
  /*hide backface*/
  backface-visibility:hidden;
  color:#333;
  background:url("https://preview.ibb.co/bF05wV/danask.png") center top repeat;
  font-size:1.5rem;
}

.card-front span:nth-of-type(1){
  display:block;
  position:absolute;
  top:5%;
  left:5%;
}

.card-front img{
  display:block;
  position:relative;
  left:25%;
  top:25%;
/*   transform:translate(-50%,-50%); */
}

.card-front span:nth-of-type(2){
  display:block;
  position:absolute;
  right:5%;
  bottom:5%;
}

/*back card*/
.card-back{
  border-radius:5px;
  position:absolute;
  width:100%;
  height:100%;
  /*hide backface*/
  backface-visibility:hidden;
  color:#333;
  font-size:1.5rem;
  transform:rotateY(180deg);
}
</style>
