'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AddApprovalForm } from './add-approval-form';

interface Approval {
  id: string;
  date: string;
  customer: string;
  status: string;
  amount: string;
}

const approvals: Approval[] = [
  {
    id: 'AP001',
    date: 'May 9, 2024',
    customer: 'Leslie Alexander',
    status: 'Pending',
    amount: 'US$35,000',
  },
  {
    id: 'AP002',
    date: 'May 5, 2024',
    customer: 'Michael Foster',
    status: 'Approved',
    amount: 'US$42,000',
  },
  {
    id: 'AP003',
    date: 'Apr 28, 2024',
    customer: 'Dries Vincent',
    status: 'Review',
    amount: 'US$28,500',
  },
  {
    id: 'AP004',
    date: 'Apr 23, 2024',
    customer: 'Lindsay Walton',
    status: 'Pending',
    amount: 'US$45,000',
  },
];

export function Pipeline() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>Pipeline</h2>
        <AddApprovalForm />
      </div>
      <Card>
        <CardHeader className='p-4'>
          <CardTitle>Recent Approvals</CardTitle>
        </CardHeader>
        <CardContent className='p-0'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>AP Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='text-right'>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvals.map((approval) => (
                <TableRow key={approval.id}>
                  <TableCell className='font-medium'>{approval.id}</TableCell>
                  <TableCell>{approval.date}</TableCell>
                  <TableCell>{approval.customer}</TableCell>
                  <TableCell>{approval.status}</TableCell>
                  <TableCell className='text-right'>
                    {approval.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
