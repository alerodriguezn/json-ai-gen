'use client';

import { JsonForm } from '@/components/form/json-form';
import { useChat } from 'ai/react';

export default function Home() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="mx-auto w-full max-w-md flex flex-col stretch">
      <h2
        className='text-4xl font-bold text-center text-blue-600 mt-4 '>
        {"{ "}
        <span className='text-white font-bold'>JSON AI</span>
        {" }"}
      </h2>

      <JsonForm/>


    </main>
  );
}