import * as React from "react";
import { useFormContext, FieldValues, Path } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

interface RHFTextFieldProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  label?: string;
  type?: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export default function RHFTextField<TFormValues extends FieldValues>({
  name,
  label,
  type = "text",
  placeholder,
  description,
  required,
  disabled,
  className,
  icon,
}: RHFTextFieldProps<TFormValues>) {
  const { control } = useFormContext<TFormValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative">
              {icon && (
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  {icon}
                </div>
              )}
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={`bg-white shadow-sm ${icon ? "pl-10" : ""}`}
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  backgroundColor: "white",
                }}
                value={
                  type === "number" && field.value === 0
                    ? ""
                    : field.value ?? ""
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (type === "number") {
                    const numberValue =
                      e.target.value === "" ? 0 : Number(e.target.value);
                    field.onChange(numberValue);
                  } else {
                    field.onChange(e.target.value);
                  }
                }}
              />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
