<template>
  <div>
     <p>{{title}}</p>
     <p v-if="showsub">{{subtitle}}</p>
     <input @keyup.enter="handleclick" type="text" v-model="mydos">

     <button @click="handleclick">添加</button>
     <button @click="clean">清空</button>
       <ul>
            <li :class="{'done':todo.done}" @click="toggle(index)" v-for="(todo,index) in todos">{{index+1}}:{{todo.text}}</li>
       </ul>
     {{remain}}/{{todos.length}}
   </div>
</template>

<script>
/* eslint-disable */
    export default {
      data() {   // 页面上用到的变量都要有对应该的值
        return {
            title : 'hello vuejs',
            subtitle :'duanlian',
            showsub : false,
            mydos :'',
            todos : [
              {text:'吃饭',done:false},
              {text:'睡觉',done:false},
              {text:'写代码',done:false}
              ]
        }
      },
      computed:{
        // 需要计算的函数放这里
        remain(){
          return this.todos.filter(v=>!v.done).length
        }
      },
      methods: {
        // 需要处理事件响应的函数放这里
        handleclick () {
          this.todos.push({
            text:this.mydos,
            done:false
          })
          this.mydos = ''
        },
        toggle(i){
          this.todos[i].done = !this.todos[i].done
        },
        clean (){
          this.todos = this.todos.filter(v=>!v.done)
        }
      }
    }
</script>

<style>
  .done {
    text-decoration: line-through;
    color:rebeccapurple;
  }
</style>
