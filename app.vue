<template>
  <h1>待办清单</h1>
  <a-input v-model:value="newTodo" style="width: 500px;margin-bottom: 50px;">
      <template #addonAfter>
        <!-- <CheckOutlined @click="addTodo" /> -->
         <a-button @click="addTodo">添加</a-button>
      </template>
  </a-input>
  <div>
    <a-card style="width: 500px">
      <a-list size="small" bordered  v-for="(todo, index) in todolist.value" :key="index">
        <a-list-item>
          {{ todo.title }}
          <template #actions>
          <a key="list-loadmore-delete" @click="delTodo(todo.id)">delete</a>
        </template>
        </a-list-item>
      </a-list>
    </a-card>
  </div>

</template>

<script setup lang="ts">
  const todolist = ref([])
  const newTodo = ref('')
  const newTodoInput = ref(null)
  async function getTodoList () {
    // 查询待办事项清单
    const { data } = await useFetch('/api/todo',{
      method: 'get',
    })
    todolist.value = data
  }
  async function addTodo () {
    // 新增待办事项清单
    const { data } = await useFetch('/api/todo',{
      method: 'post',
      body: { newTodo }
    })
    console.log("新增待办事项清单",data)
    getTodoList()
  }
  async function delTodo (item) {
    // 删除待办事项
    const { data } = await useFetch('/api/todo',{
      method: 'delete',
      body: { item }
    })
    console.log("新增待办事项清单",data)
    getTodoList()
  }

  onMounted(async () => {
    getTodoList()
  })
</script>