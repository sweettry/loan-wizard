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
import { createApproval } from '@/app/actions/approvals';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function AddApprovalForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [apNumber, setApNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (!isFormVisible) {
      setApNumber('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await createApproval(apNumber);

      if (result.success) {
        toast({
          title: 'Success',
          description: 'Approval has been created',
        });
        setApNumber('');
        setIsFormVisible(false);
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to create approval',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
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
                  disabled={isSubmitting}
                />
              </div>
            </CardContent>
            <CardFooter className='flex justify-end p-4 pt-0'>
              <Button type='submit' size='sm' disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </div>
  );
}
