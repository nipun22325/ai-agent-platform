import { EmptyState } from "@/components/empty-state";
import { useState } from "react";
import { NewMeetingDialog } from "./new-meeting-dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const CancelledState = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        title="Meeting cancelled"
        description="This meeting was cancelled. Create a new meeting."
        image="/cancelled.svg"
      />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full">
        <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        <Button onClick={() => setIsDialogOpen(true)}>
          <PlusIcon />
          New Meeting
        </Button>
      </div>
    </div>
  );
};
