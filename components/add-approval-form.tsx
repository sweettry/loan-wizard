'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function AddApprovalForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [apNumber, setApNumber] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (!isFormVisible) {
      setApNumber('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted AP Number:', apNumber);
    setApNumber('');
    setIsFormVisible(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className='relative'>
      <Button onClick={toggleForm} size='sm'>
        {isFormVisible ? 'Close' : 'Add Approval'}
      </Button>
      {isFormVisible && (
        <Card className='absolute right-0 top-full z-10 mt-2 w-[300px]'>
          <CardHeader className='p-4'>
            <CardTitle className='text-lg'>New Approval</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit} ref={formRef} autoComplete='off'>
            <CardContent className='p-4 pt-0'>
              <div className='space-y-2'>
                <Label htmlFor='apNumber' className='text-sm'>
                  AP Number
                </Label>
                <Input
                  id='apNumber'
                  name='apNumber'
                  placeholder='Enter AP number'
                  value={apNumber}
                  onChange={(e) => setApNumber(e.target.value)}
                  required
                  className='h-8 text-sm'
                  autoComplete='off'
                />
              </div>
            </CardContent>
            <CardFooter className='flex justify-end p-4 pt-0'>
              <Button type='submit' size='sm'>
                Submit
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </div>
  );
}
