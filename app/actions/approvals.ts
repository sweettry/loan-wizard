"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

export async function createApproval(apNumber: string) {
  if (!apNumber) {
    return { success: false, error: "AP Number is required" };
  }

  const { userId } = await auth();

  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const approval = await prisma.approval.create({
      data: {
        apNumber,
        status: "Pending",
        customer: "TBD",
        amount: 0,
        userId: userId,
      },
    });

    revalidatePath("/");
    return { success: true, data: approval };
  } catch (error) {
    console.error("Failed to create approval:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to create approval" };
  }
}

export async function getApprovals() {
  const { userId } = await auth();

  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const approvals = await prisma.approval.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });

    return { success: true, data: approvals };
  } catch (error) {
    console.error("Failed to fetch approvals:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Failed to fetch approvals" };
  }
}
