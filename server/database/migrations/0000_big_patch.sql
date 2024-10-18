CREATE TABLE `posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`createdAt` datetime DEFAULT now(),
	`updatedAt` datetime DEFAULT now(),
	`title` varchar(255),
	`content` varchar(255),
	`published` boolean DEFAULT false,
	`authorId` int,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`bio` varchar(255),
	`userId` int,
	CONSTRAINT `profiles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `todos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255),
	`description` varchar(255),
	`completed` boolean DEFAULT false,
	CONSTRAINT `todos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`email` varchar(255),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
