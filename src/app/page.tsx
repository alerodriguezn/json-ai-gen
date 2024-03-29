'use client';

import { JsonForm } from '@/components/form/json-form';
import { useChat } from 'ai/react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="mx-auto w-full flex flex-col items-center">
      <h2
        className='text-4xl font-bold text-center text-blue-600 mt-4 '>
        {"{ "}
        <span className='text-white font-bold'>JSON AI</span>
        {" }"}
      </h2>

      <div className='w-1/2 flex gap-4 mt-6'>
        <JsonForm/>
        <ScrollArea className="h-[200px] w-[450px] rounded-md border p-4 border-dashed">

          <p>
           {JSON.stringify(messages)}
          </p>
          
          
     
        </ScrollArea>

      </div>


    </main>
  );
}