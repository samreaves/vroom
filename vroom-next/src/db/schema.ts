import { integer, pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";
export const carsTable = pgTable("cars", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  color: varchar({ length: 255 }).notNull(),
  year: integer().notNull(),
  make: varchar({ length: 255 }).notNull(),
  model: varchar({ length: 255 }).notNull(),
  price: integer().notNull(),
  description: text().notNull(),
  imageUrl: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});