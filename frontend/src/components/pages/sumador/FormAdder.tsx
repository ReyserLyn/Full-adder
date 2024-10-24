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

interface FormAdderProps {
  size: number;
}

export default function FormAdder({ size }: FormAdderProps) {
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
    console.log(values);
  }

  return (
    <section className="container py-16 bg-white flex justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center gap-5 ">
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
          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
