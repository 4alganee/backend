/*
  Warnings:

  - Added the required column `estimated_time` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recipe" ADD COLUMN     "estimated_time" TEXT NOT NULL;
