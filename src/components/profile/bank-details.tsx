"use client";
import { useBankDetail } from "@/hooks/use-user";
import EditButton from "../edit-button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function BankDetails() {
  const { data, isLoading, error } = useBankDetail();

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

  const bankDetails = data && data.length > 0 ? data[0] : null;

  return (
    <Card className="relative border-amber-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Bank Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            <div className="text-sm font-medium text-gray-500">
              Account Type:
            </div>
            <div className="text-sm">
              {bankDetails?.accountType || "Not specified"}
            </div>

            <div className="text-sm font-medium text-gray-500">Bank name:</div>
            <div className="text-sm">
              {bankDetails?.bankName || "Not specified"}
            </div>

            <div className="text-sm font-medium text-gray-500">
              Account Name:
            </div>
            <div className="text-sm">
              {bankDetails?.accountName || "Not specified"}
            </div>

            <div className="text-sm font-medium text-gray-500">
              Account Number:
            </div>
            <div className="text-sm">
              {bankDetails?.accountNumber || "Not specified"}
            </div>
          </div>
        </div>
      </CardContent>
      <EditButton />
    </Card>
  );
}
