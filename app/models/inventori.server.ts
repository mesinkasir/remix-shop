import type { User, Inventori } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Inventori } from "@prisma/client";

export function getInventori({
  id,
  userId,
}: Pick<Inventori, "id"> & {
  userId: User["id"];
}) {
  return prisma.inventori.findFirst({
    select: { id: true, markdown: true, link: true, cover: true, video: true, description: true, title: true },
    where: { id, userId },
  });
}

export function getInventoriListItems({ userId }: { userId: User["id"] }) {
  return prisma.inventori.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "asc" },
  });
}

export function createInventori({
  title,
  description,
  cover,
  link,
  video,
  markdown,
  userId,
}: Pick<Inventori, "markdown" | "title"| "cover"| "video"| "link"| "description"> & {
  userId: User["id"];
}) {
  return prisma.inventori.create({
    data: {
	  title,
	  description,
	  cover,
	  link,
	  video,
	  markdown,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}
	

export function deleteInventori({
  id,
  userId,
}: Pick<Inventori, "id"> & { userId: User["id"] }) {
  return prisma.inventori.deleteMany({
    where: { id, userId },
  });
}
