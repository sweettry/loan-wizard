'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function createApproval(apNumber: string) {
  try {
    const approval = await prisma.approval.create({
      data: {
        apNumber,
        status: 'Pending',
        customer: 'TBD',
        amount: 0,
      },
    });

    revalidatePath('/');
    return { success: true, data: approval };
  } catch (error) {
    console.error('Failed to create approval:', error);
    return { success: false, error: 'Failed to create approval' };
  }
}

export async function getApprovals() {
  try {
    const approvals = await prisma.approval.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 10,
    });

    return { success: true, data: approvals };
  } catch (error) {
    console.error('Failed to fetch approvals:', error);
    return { success: false, error: 'Failed to fetch approvals' };
  }
}
