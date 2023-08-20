-- CreateTable
CREATE TABLE "recipe_tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "recipe_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_tag_relation" (
    "id" SERIAL NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "recipe_tag_relation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recipe_tag_relation" ADD CONSTRAINT "recipe_tag_relation_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_tag_relation" ADD CONSTRAINT "recipe_tag_relation_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "recipe_tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
