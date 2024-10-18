// import { PrismaClient } from '@prisma/client'

// export default defineEventHandler(async (event) => {
//     // ... 在这里做任何你想做的事情
//     const prisma = new PrismaClient()
//     try {
//         //新增一个用户
//         // await prisma.user.create({
//         //     data: {
//         //         name: 'lixiang',
//         //         email: 'lixiang@prisma.io',
//         //         posts: {
//         //         create: { title: '插入数据测试' },
//         //         },
//         //         profile: {
//         //         create: { bio: '插入数据测试111111111' },
//         //         },
//         //     },
//         // })

//         // 查询用户数据
//         const allUsers = await prisma.user.findMany({
//             include: {
//               posts: true,
//               profile: true,
//             },
//         })
//         return allUsers
//     } catch (error) {
//         console.error('数据库操作出现异常:', error)
//         throw error // 重新抛出异常，以便在调用此事件处理程序的地方进行处理
//     } finally {
//         await prisma.$disconnect() // 确保断开与数据库的连接
//     }
// })
  