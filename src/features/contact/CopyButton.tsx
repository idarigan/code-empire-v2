/**
 * Code Empire - Copy button
 *
 * Copies a value to the clipboard and confirms with a toast.
 */

import { Button, useToast } from "dara-ui";
import { CopyIcon } from "@/components/icons";
import { channels } from "@/content/contact";

export function CopyButton({ value }: { value: string }) {
  const toast = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(channels.copied);
    } catch {
      toast.error(channels.copyFailed);
    }
  };

  return (
    <Button
      size="sm"
      variant="glass"
      leftIcon={<CopyIcon className="h-3.5 w-3.5" />}
      onClick={handleCopy}
    >
      {channels.copy}
    </Button>
  );
}
