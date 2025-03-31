"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <Card className="w-full max-w-md border-none bg-background/80 shadow-xl backdrop-blur">
        <CardContent className="flex flex-col items-center p-6 pt-6 text-center">
          <div className="mb-6 flex justify-center">
            <LostAstronaut />
          </div>

          <h1 className="mb-2 text-6xl font-extrabold tracking-tight text-primary">
            404
          </h1>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Sayfa Bulunamadı
          </h2>

          <p className="mb-8 text-muted-foreground">
            Aradığınız sayfa uzayın derinliklerinde kaybolmuş gibi görünüyor.
            Belki de başka bir galaksiye gitmiştir?
          </p>

          <div className="space-y-4">
            <Button asChild className="w-full" size="lg">
              <Link href="/">Ana Sayfaya Dön</Link>
            </Button>

            <div className="text-sm text-muted-foreground">
              veya{" "}
              <Button variant="link" asChild className="p-0 h-auto">
                <Link href="/contact">bize ulaşın</Link>
              </Button>{" "}
              yardıma ihtiyacınız varsa
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function LostAstronaut() {
  return (
    <div className="relative h-48 w-48">
      <svg
        width="150"
        height="150"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="85"
          r="55"
          fill="#f1f5f9"
          stroke="#94a3b8"
          strokeWidth="4"
        />
        <circle cx="100" cy="85" r="45" fill="#e2e8f0" />

        <path d="M75 85 A25 25 0 0 1 125 85" fill="#475569" />

        <path
          d="M70 140 L80 100 L120 100 L130 140"
          fill="#f1f5f9"
          stroke="#94a3b8"
          strokeWidth="4"
        />

        <rect
          x="85"
          y="110"
          width="30"
          height="40"
          rx="5"
          fill="#cbd5e1"
          stroke="#94a3b8"
          strokeWidth="2"
        />

        <path
          d="M70 140 L60 160"
          stroke="#94a3b8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M130 140 L140 160"
          stroke="#94a3b8"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M85 140 L80 170"
          stroke="#94a3b8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M115 140 L120 170"
          stroke="#94a3b8"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <circle cx="85" cy="75" r="8" fill="white" fillOpacity="0.6" />
      </svg>
    </div>
  );
}
