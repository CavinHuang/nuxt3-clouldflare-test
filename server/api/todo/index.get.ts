// import { PrismaClient } from '@prisma/client'
import { useDb } from '~/server/database'
import { todos } from '~/server/database/schema'

export default defineEventHandler(async (event) => {
    // ... 在这里做任何你想做的事情
    try {
        // 查询待办事项清单
        const todoList = await useDb().select().from(todos)
        return todoList
    } catch (error) {
        console.error('数据库操作出现异常:', error)
        // 重新抛出异常，以便在调用此事件处理程序的地方进行处理
        throw error
    } finally {
        // 确保断开与数据库的连接
        // await prisma.$disconnect()
    }
})
