"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

export function CvViewerModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Resume Peek</Button>
      </DialogTrigger>
      <DialogContent className="flex h-[90vh] w-[80vw] max-w-[80vw] flex-col p-6">
        {/* Header Row */}
        <div className="mt-4 mb-4 flex items-center justify-between">
          <DialogTitle className="text-xl font-semibold">Humayun Kabir: Career Details</DialogTitle>

          <div className="flex gap-2">
            <a
              href="https://drive.google.com/u/0/uc?id=18QIxm4-HBNO2sFg8v6C17-lK59GcWktX&export=download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="flex cursor-pointer items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </a>
          </div>
        </div>

        {/* PDF Preview */}
        <iframe
          src="https://drive.google.com/file/d/18QIxm4-HBNO2sFg8v6C17-lK59GcWktX/preview"
          className="w-full flex-1 rounded border"
          title="CV Preview"
          allow="autoplay"
        />
      </DialogContent>
    </Dialog>
  );
}
