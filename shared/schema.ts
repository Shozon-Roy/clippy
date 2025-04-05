import { pgTable, text, serial, integer, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  avatar: text("avatar"),
});

export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  thumbnail: text("thumbnail").notNull(),
  userId: integer("user_id").references(() => users.id),
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  avatar: text("avatar").notNull(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  timestamp: text("timestamp").notNull(),
  image: text("image").notNull()
});

export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  videoCount: integer("video_count").notNull().default(0),
  memberCount: integer("member_count").notNull().default(0),
  commentCount: integer("comment_count").notNull().default(0)
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  avatar: true
});

export const insertVideoSchema = createInsertSchema(videos).pick({
  title: true,
  author: true,
  thumbnail: true,
  userId: true
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).pick({
  name: true,
  avatar: true
});

export const insertCommentSchema = createInsertSchema(comments).pick({
  title: true,
  author: true,
  timestamp: true,
  image: true
});

export const insertStatsSchema = createInsertSchema(stats).pick({
  videoCount: true,
  memberCount: true,
  commentCount: true
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertVideo = z.infer<typeof insertVideoSchema>;
export type Video = typeof videos.$inferSelect;

export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;

export type InsertComment = z.infer<typeof insertCommentSchema>;
export type Comment = typeof comments.$inferSelect;

export type InsertStats = z.infer<typeof insertStatsSchema>;
export type Stats = typeof stats.$inferSelect;
