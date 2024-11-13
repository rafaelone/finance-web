import { AlertCircle } from 'lucide-react';

type AlertProps = {
  title: string;
  message: string;
};
export function Alert({ title, message }: AlertProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <AlertCircle className="size-6 text-red-200" />
      <div>
        <strong className="text-md font-firacode font-bold text-red-200">
          {title}
        </strong>
        <p className="font-firacode text-sm font-bold text-red-200">
          {message}
        </p>
      </div>
    </div>
  );
}
