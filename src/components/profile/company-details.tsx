"use client";
import { useCompany } from "@/hooks/use-user";
import EditButton from "../edit-button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { PencilIcon } from "lucide-react";

export default function CompanyDetails() {
  const { data, isLoading, error } = useCompany();

  const company = data && data.length > 0 ? data[0] : null;

  if (isLoading) {
    return (
      <Card className="relative border-amber-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Bank Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-24">
            <div className="text-sm">Loading bank details...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="relative border-amber-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Bank Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-red-500">
            Failed to load bank details
          </div>
        </CardContent>
        <EditButton />
      </Card>
    );
  }

  return (
    <Card className="relative border-amber-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Company details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-2">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              {company?.legalName?.charAt(0) || "C"}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="absolute text-xs flex items-center gap-1 text-gray-500 bottom-0 right-0 "
            >
              <PencilIcon size={12} />
            </Button>
          </div>

          <div className="flex-1 space-y-2">
            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
              <div className="text-sm font-medium text-gray-500">
                Operator ID:
              </div>
              <div className="text-sm">{company?.operatorId}</div>

              <div className="text-sm font-medium text-gray-500">
                Company Number:
              </div>
              <div className="text-sm">{company?.companyNumber}</div>

              <div className="text-sm font-medium text-gray-500">
                Legal name:
              </div>
              <div className="text-sm">{company?.legalName}</div>

              <div className="text-sm font-medium text-gray-500">
                TAT Number:
              </div>
              <div className="text-sm">{company?.tatNumber}</div>

              <div className="text-sm font-medium text-gray-500">
                VAT Number:
              </div>
              <div className="text-sm">{company?.vatNumber}</div>

              <div className="text-sm font-medium text-gray-500">Address:</div>
              <div className="text-sm">{company?.address}</div>
            </div>
          </div>
        </div>
      </CardContent>
      <EditButton />
    </Card>
  );
}
