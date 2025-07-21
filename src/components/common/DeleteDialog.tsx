import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface DeleteDialogProps {
  trigger: React.ReactNode;
  selectedCount: number;
  onConfirm: () => void;
}

const DeleteDialog = ({
  trigger,
  selectedCount,
  onConfirm,
}: DeleteDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="w-[400px] sm:w-[350px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-600">
            Confirm Deletion
          </AlertDialogTitle>
          <AlertDialogDescription>
            {selectedCount === 1
              ? "Are you sure you want to delete this file? This action is irreversible."
              : `Are you sure you want to delete ${selectedCount} selected files? This action is irreversible.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
