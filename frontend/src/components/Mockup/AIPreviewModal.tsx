
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Edit, Sparkles } from 'lucide-react';

const API_UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL || 'http://localhost:5371';
interface AIPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  previewImage?: string;
  projectName?: string;
  technique?: string;
  onDownload?: () => void;
  onEdit?: () => void;
}

const AIPreviewModal: React.FC<AIPreviewModalProps> = ({
  open,
  onOpenChange,
  previewImage,
  projectName,
  technique,
  onDownload,
  onEdit
}) => {
  console.log(previewImage)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              AI Generated Preview
            </DialogTitle>
            <Badge className="bg-green-100 text-green-700">
              Generated Successfully
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {previewImage ? (
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={API_UPLOAD_URL + previewImage}
                alt="AI Generated Mockup"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <p className="text-muted-foreground">No preview available</p>
              </div>
            </div>
          )}

          {(projectName || technique) && (
            <div className="grid grid-cols-2 gap-4 text-sm">
              {projectName && (
                <div>
                  <span className="font-medium">Project:</span>
                  <p className="text-muted-foreground">{projectName}</p>
                </div>
              )}
              {technique && (
                <div>
                  <span className="font-medium">Technique:</span>
                  <p className="text-muted-foreground">{technique}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onEdit}>
            <Edit className="h-4 w-4 mr-2" />
            Edit More
          </Button>
          <Button onClick={onDownload} className="bg-gradient-primary">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AIPreviewModal;
