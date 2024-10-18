import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
    // ... 在这里做任何你想做的事情
    const prisma = new PrismaClient()
    console.log("event",event)
    try {
        // 获取前端传递的数据
        const data = await readBody(event)
        const deleteTodo = await prisma.todo.delete({
          where: {
            id: data.item,
          },
        })
        return { deleteTodo }
    } catch (error) {
        console.error('数据库操作出现异常:', error)
        throw error // 重新抛出异常，以便在调用此事件处理程序的地方进行处理
    } finally {
        await prisma.$disconnect() // 确保断开与数据库的连接
    }
  })