"use client";

import { useState } from "react";
import { format, parse } from "date-fns";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type Booking = {
  id: string;
  patientName: string;
  patientPhone: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string | null;
  status: string;
};

export function BookingsTable({ initialData }: { initialData: Booking[] }) {
  const [bookings, setBookings] = useState<Booking[]>(initialData);
  const [updating, setUpdating] = useState<string | null>(null);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdating(id);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });

      if (!res.ok) throw new Error("Failed to update status");

      setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
      toast.success(`Booking status updated to ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update booking status.");
    } finally {
      setUpdating(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return <Badge className="bg-emerald-500 hover:bg-emerald-600">Confirmed</Badge>;
      case "CANCELLED":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary" className="text-orange-500 bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-400">Pending</Badge>;
    }
  };

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>Date & Time</TableHead>
            <TableHead>Patient Details</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                No bookings found.
              </TableCell>
            </TableRow>
          ) : (
            bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">
                  <div>{format(parse(booking.date, "yyyy-MM-dd", new Date()), "MMM dd, yyyy")}</div>
                  <div className="text-sm text-muted-foreground">
                    {format(parse(booking.timeSlot, "HH:mm", new Date()), "h:mm a")}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{booking.patientName}</div>
                  <div className="text-sm text-muted-foreground">{booking.patientPhone}</div>
                </TableCell>
                <TableCell>{booking.service}</TableCell>
                <TableCell>{getStatusBadge(booking.status)}</TableCell>
                <TableCell className="max-w-[200px] truncate" title={booking.notes ?? undefined}>
                  {booking.notes || "-"}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end items-center gap-2">
                    {updating === booking.id && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
                    <Select
                      defaultValue={booking.status}
                      onValueChange={(val) => handleStatusChange(booking.id, val as string)}
                      disabled={updating === booking.id}
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Update status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PENDING">Pending</SelectItem>
                        <SelectItem value="CONFIRMED">Confirm</SelectItem>
                        <SelectItem value="CANCELLED">Cancel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
