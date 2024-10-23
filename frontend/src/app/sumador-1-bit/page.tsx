"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Definir esquema del formulario
const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export default function Sumador1BitPage() {
  const [apiTitle, setApiTitle] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiTitle = async () => {
      try {
        const response = await fetch("https://sumador.reyserlyn.com");
        const data = await response.json();
        setApiTitle(data.message);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
        setApiTitle("Error al cargar título"); // Mensaje de error
      }
    };

    fetchApiTitle();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="w-full">
      <section className="container py-16">
        {apiTitle && (
          <h1 className="text-3xl font-bold text-center mb-8">{apiTitle}</h1>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </main>
  );
}
