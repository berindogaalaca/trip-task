"use client";
import { useContactDetail } from "@/hooks/use-user";
import EditButton from "../edit-button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function ContactDetails() {
  const { data, isLoading, error } = useContactDetail();
  const contactDetail = data && data.length > 0 ? data[0] : null;

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
        <CardTitle className="text-lg font-medium">Contact details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            <div className="text-sm font-medium text-gray-500">
              Phone number:
            </div>
            <div className="text-sm">{contactDetail.phoneNumber}</div>

            <div className="text-sm font-medium text-gray-500">
              Office phone number:
            </div>
            <div className="text-sm">{contactDetail.officePhoneNumber}</div>

            <div className="text-sm font-medium text-gray-500">
              Office phone number 2:
            </div>
            <div className="text-sm">{contactDetail.officePhoneNumber_2}</div>
          </div>
        </div>
      </CardContent>
      <EditButton />
    </Card>
  );
}
