import React from 'react';
import { MonitorSmartphone } from 'lucide-react';
import { Button } from './ui';
import Link from 'next/link';

function welcome() {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <span>welcome to</span>
      <div className="flex items-center gap-3">
        <MonitorSmartphone />
        <h1 className="text-2xl font-bold text-gray-800">Digital Shop</h1>
      </div>
      <Button asChild className="mt-6" variant={'default'}>
        <Link href="/products">Go to products</Link>
      </Button>
    </div>
  );
}

export default welcome;
