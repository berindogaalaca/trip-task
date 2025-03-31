"use client";

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditButtonProps {
  onClick?: () => void;
}

export default function EditButton({ onClick }: EditButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 absolute top-4 right-4"
      onClick={onClick}
    >
      <Pencil className="h-5 w-5 text-gray-500" />
    </Button>
  );
}
