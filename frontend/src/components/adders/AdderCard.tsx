'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function AdderCard(
  {
    title, image_url, description, AdderExample,
  }:{
    title: string, image_url: string, description: string, Adder: React.ReactNode
  }) {
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div>
        <img
          src={image_url}
          alt={title}
          width={400}
          height={300}
        />
        <div>
          <p> {description} </p>
        </div>
      </div>
    </CardContent>
    { AdderExample }
  </Card>
}
