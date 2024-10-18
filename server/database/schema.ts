import { mysqlTable, varchar, boolean, int, datetime } from 'drizzle-orm/mysql-core'
import { sql } from 'drizzle-orm/sql'
import { relations } from 'drizzle-orm'

export const posts = mysqlTable('posts', {
  id: int('id').primaryKey().autoincrement(),
  createdAt: datetime('createdAt').default(sql`now()`),
  updatedAt: datetime('updatedAt').default(sql`now()`),
  title: varchar('title', { length: 255 }),
  content: varchar('content', { length: 255 }),
  published: boolean('published').default(false),
  authorId: int('authorId')
})

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id]
  })
}))

export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).unique()
})

export const usersRelations = relations(users, ({ many, one }) => ({
  posts: many(posts),
  profile: one(profiles)
}))

export const profiles = mysqlTable('profiles', {
  id: int('id').primaryKey().autoincrement(),
  bio: varchar('bio', { length: 255 }),
  userId: int('userId')
})

export const profilesRelations = relations(profiles, ({ one }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id]
  })
}))

export const todos = mysqlTable('todos', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }),
  description: varchar('description', { length: 255 }),
  completed: boolean('completed').default(false)
})
