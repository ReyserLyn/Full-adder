"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function AdderCard({
  title,
  image_url,
  description,
  AdderExample,
}: {
  title: string;
  image_url: string;
  description: string;
  AdderExample: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Image src={image_url} alt={title} width={400} height={300} />
          <div>
            <p>{description}</p>
          </div>
        </div>
      </CardContent>
      {AdderExample}
    </Card>
  );
}
