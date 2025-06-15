import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMemo } from "react";

interface GeneratedAvatarProps {
  className?: string;
  seed: string;
  variant?: "botttsNeutral" | "initials";
}

export const GeneratedAvatar = ({
  className,
  seed,
  variant,
}: GeneratedAvatarProps) => {
  //   let avatarSvg;

  //   if (variant === "botttsNeutral") {
  //     avatarSvg = createAvatar(botttsNeutral, {
  //       seed,
  //     });
  //   } else {
  //     avatarSvg = createAvatar(initials, {
  //       seed,
  //       fontSize: 42,
  //       fontWeight: 500,
  //     });
  //   }
  const avatarSvg = useMemo(
    () =>
      variant === "botttsNeutral"
        ? createAvatar(botttsNeutral, { seed })
        : createAvatar(initials, { seed, fontSize: 42, fontWeight: 500 }),
    [seed, variant]
  );

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatarSvg.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
