'use client'

import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { PlusCircledIcon, TrashIcon} from "@radix-ui/react-icons"


type FormValues = {
  fields: {
    name: string;
    type: number;
    description: string;
  }[];
};




export const JsonForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      fields: [{ name: "name", type: 1, description: "Super Heroe Name" }]
    },
    mode: "onBlur"
  });
  const { fields, append, remove } = useFieldArray({
    name: "fields",
    control
  });
  const onSubmit = (data: FormValues) => console.log(data);


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="">
              <section className="flex gap-2 mt-2" key={field.id} >

                <Input
                  placeholder="Name"
                  {...register(`fields.${index}.name` as const, {
                    required: true
                  })}
                  className={errors?.fields?.[index]?.name ? "error" : ""}
                />

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="number">Number</SelectItem>
                    <SelectItem value="string">String</SelectItem>
                    <SelectItem value="boolean">Boolean</SelectItem>
                  </SelectContent>
                </Select>



                <Input
                  placeholder="Description"
                  {...register(`fields.${index}.description` as const, {
                    valueAsNumber: true,
                    required: true
                  })}
                  className={errors?.fields?.[index]?.description ? "error" : ""}
                />



                <button type="button" onClick={() => remove(index)}>
                  <TrashIcon width={20} height={20}/>
                </button>
              </section>
            </div>
          );
        })}



        <button
          type="button"
          className="flex items-center justify-center gap-1 bg-blue-600 text-black rounded-md font-semibold p-2 mt-2 w-full"
          onClick={() =>
            append({
              name: "",
              type: 0,
              description: ""
            })
          }
        >
          New Field
          <PlusCircledIcon width={20} height={20} />
        </button>
 
      </form>
    </div>
  );
}