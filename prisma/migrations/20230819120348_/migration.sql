-- AlterTable
ALTER TABLE "user" ADD COLUMN     "image" TEXT,
ADD COLUMN     "usertag" TEXT NOT NULL DEFAULT '신규 유저';
