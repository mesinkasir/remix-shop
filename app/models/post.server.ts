import { prisma } from "~/db.server";
import type { Inventori } from "@prisma/client";
export type { Inventori };

export async function getPosts() {
  return prisma.inventori.findMany();
}
export async function getPost(id: string) {
  return prisma.inventori.findUnique({ where: { id } });
}