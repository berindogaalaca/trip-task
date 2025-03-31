"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AstronautIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <Card className="w-full max-w-md border-none bg-background/80 shadow-xl backdrop-blur">
        <CardContent className="flex flex-col items-center p-6 pt-6 text-center">
          <div className="mb-6 flex justify-center relative h-48 w-48">
            <AstronautIcon />
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
