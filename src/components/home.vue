<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>Token contract: 0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce</h2> -->
    <b-container style="margin-top: 10pt;width: 500pt;
    text-align: center;">
      <b-input-group size="sm" class="mb-2">
        <b-form-input v-model="text" @keyup.enter="search" placeholder="Enter Topic" ref="searchInput"></b-form-input>
        <b-input-group-prepend is-text>
          <b-icon @click="search" icon="search"></b-icon>
        </b-input-group-prepend>
      </b-input-group>
      <b-list-group v-for="topic in tList" :key="topic">
        <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click.self="gogo(topic)">{{topic}} <b-icon @click="deletec(topic)" icon="x-circle" scale="2" variant="danger"></b-icon></b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '',
      text: '',
      tList: (localStorage.getItem("topicList")) ? localStorage.getItem("topicList").split(",") : [],
    }
  },
  mounted() {
    this.$refs.searchInput.$el.focus()
  },
  methods: {
    deletec(channel) {
      var topicList = (localStorage.getItem("topicList")) ? localStorage.getItem("topicList").split(",") : []
      var newone = []

      topicList.forEach(val => {
        if (val != channel) {
          newone.push(val)
        }
      })

      this.tList = newone
    },
    gogo(channel) {
      this.$router.push({ name: 'topic', query: { channel : channel} })
    },
    search () {
      if (this.text.replace(/\s*/g,"").length == 0) {
        alert("Are you kidding me?");
        return
      }

      var topicList = (localStorage.getItem("topicList")) ? localStorage.getItem("topicList").split(",") : []

      var sameFlag = false

      topicList.forEach(val => {
        if (val == this.text && this.text == '') {
          sameFlag = true
          return
        }
      })

      if (!sameFlag) {
        topicList.push(this.text)

        localStorage.setItem("topicList", topicList.join(","))
      }

      this.$router.push({ name: 'topic', query: { channel : this.text} })
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
</style>
