"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useState } from "react";
import ac from "@/lib/addersAvailables";

interface FormAdderProps {
  size: number;
}

export default function FormAdder({ size }: FormAdderProps) {
  const [sum, setSum] = useState<number>(0);
  const [carry, setCarry] = useState<number>(0);

  const formSchema = z.object({
    bitValue1: z
      .string()
      .max(size, `Se permiten hasta ${size} números`)
      .regex(/^[01]*$/, "Solo se permite 0 o 1"),
    bitValue2: z
      .string()
      .max(size, `Se permiten hasta ${size} números`)
      .regex(/^[01]*$/, "Solo se permite 0 o 1"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bitValue1: "",
      bitValue2: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const func = ac[size];
    const value1 = parseInt(values.bitValue1, 2);
    const value2 = parseInt(values.bitValue2, 2);

    const res = func(value1, value2, 0);
    const resultSum = res["sum"];
    const sumCarry = res["carry_out"];

    setSum(resultSum);
    setCarry(sumCarry);
  }

  return (
    <section className="container py-16 bg-transparent flex flex-col gap-8 text-lg">
      <Form {...form} className="text-lg">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
            <FormField
              control={form.control}
              name="bitValue1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor 1</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingrese operador 1"
                      {...field}
                      maxLength={size}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[01]*$/.test(value)) {
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Plus size={24} className="mt-7" />

            <FormField
              control={form.control}
              name="bitValue2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor 2</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingrese operador 2"
                      {...field}
                      maxLength={size}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[01]*$/.test(value)) {
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
        <div className="flex justify-center gap-10 font-medium">
          <div className="flex flex-col gap-2">
            <label className="flex justify-center" htmlFor="result">Suma</label>
            <span id="result" className="flex rounded-md border border-input bg-transparent px-3 py-1 justify-center shadow-sm font-normal">
              {sum.toString(2).padStart(size, "0")}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex justify-center" htmlFor="carry">Acarreo</label>
            <span id="carry" className="flex rounded-md border border-input bg-transparent px-3 py-1 justify-center shadow-sm font-normal">
              {carry.toString(2)}
            </span>
          </div>
        </div>
      </Form>
    </section>
  );
}
