// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `portfolio_${name}`);

export const posts = createTable(
  "post",
  { 
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

// export const projects = createTable(
//   "projects",
//   { 
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 256 }).notNull(),
//     description: text("description").notNull(),
//     type: varchar("type", {length: 20}).$type<"mobile" | "web" | "ui/ux">(),
//     tags: varchar("tags", {length: 50}).array().notNull().default(sql`'ARRAY[]::text[]`),
//     featuredImageUrls: varchar("featured_image_urls", { length: 1024 }).array().notNull().default(sql`'ARRAY[]::varchar[]`),
//     thumbnailUrl: varchar("thumbnail_url", { length: 1024 }).notNull(),
//     challenge: text("challenge").notNull(),
//     linkUrl: varchar("link_url", {length: 1024}).notNull(),
//     createdAt: timestamp("created_at", { withTimezone: true })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updatedAt", { withTimezone: true }),
//   },
//   (example) => ({
//     nameIndex: index("name_idx").on(example.name),
//   })
// );
