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
import { fullAdder1Bit } from "@/lib/sumador-1bit";
import { fullAdder4Bit } from "@/lib/sumador-4bit";
import { fullAdder8Bit } from "@/lib/sumador-8bit";
import { binaryToDecimal } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
    const value1 = parseInt(values.bitValue1, 2);
    const value2 = parseInt(values.bitValue2, 2);
    let res;

    switch (size) {
      case 1:
        res = fullAdder1Bit(value1, value2, 0);
        break;
      case 4:
        res = fullAdder4Bit(value1, value2, 0);
        break;
      case 8:
        res = fullAdder8Bit(value1, value2, 0);
        break;
      default:
        res = { sum: 0, carryOut: 0 };
    }

    setSum(res.sum);
    setCarry(res.carryOut);
  }

  return (
    <section className="container py-16 bg-transparent flex flex-col gap-8 text-lg bg-white">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-48">
        <div className="flex justify-center items-center font-medium ">
          Resultado (Binario):
          <span className="flex px-3 py-1 justify-center font-normal">
            {carry === 0 ? "" : carry.toString(2)}
            {sum.toString(2).padStart(size, "0")}
          </span>
        </div>
        <div className="flex justify-center items-center font-medium ">
          Resultado (Decimal):
          <span className="flex px-3 py-1 justify-center font-normal">
            {binaryToDecimal(
              carry.toString(2) + sum.toString(2).padStart(size, "0")
            )}
          </span>
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-lg"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
            <FormField
              control={form.control}
              name="bitValue1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor 1</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`Ingrese ${size} bits`}
                      {...field}
                      maxLength={size}
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
                      placeholder={`Ingrese ${size} bits`}
                      {...field}
                      maxLength={size}
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

        <h2 className="mt-32 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Sumador de {size} Bit(s) (Expliación)
        </h2>

        <div className="flex justify-center gap-10 font-medium">
          <div className="flex flex-col gap-2">
            <label className="flex justify-center" htmlFor="carry">
              Acarreo
            </label>
            <span
              id="carry"
              className="flex rounded-md border border-input bg-transparent px-3 py-1 justify-center shadow-sm font-normal"
            >
              {carry.toString(2)}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex justify-center" htmlFor="result">
              Suma
            </label>
            <span
              id="result"
              className="flex rounded-md border border-input bg-transparent px-3 py-1 justify-center shadow-sm font-normal"
            >
              {sum.toString(2).padStart(size, "0")}
            </span>
          </div>
        </div>
      </Form>
    </section>
  );
}
