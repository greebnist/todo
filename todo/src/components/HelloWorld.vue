<template>
<div id="app">
<grid
  :draggable="true"
  :sortable="true"
  :items="items"
  :height="100"
  :width="100">
  <template slot="cell" scope="props">
  <h2>My To Do List</h2>
  <input type="text" class="myInput" placeholder="Title...">
  <button onclick="addToList()" class="addBtn">Add</button>
    <div>{{props.item}}</div>
  </template>
</grid>
</div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      myInput: '',
      items : [
        {myInput},
      ]
    }
  },

  methods:{
  isComplete: function(){

    },
  addToList: function(){
      let items = [''];
      items.push(myInput);

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
