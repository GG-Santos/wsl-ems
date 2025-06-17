"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validLCNs } from "@/data/LCN/LCN_Data";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [lcn, setLcn] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validLCNs.includes(lcn.trim())) {
      router.push(`/${lcn.trim()}`);
    } else {
      setError("Invalid License Number");
    }
  };
  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">License Verification</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Login with your License Number
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="lcn">License Number</Label>
          <Input
            id="lcn"
            type="text"
            value={lcn}
            onChange={(e) => setLcn(e.target.value)}
            placeholder="XX-XXXXXX"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <Button type="submit" className="w-full">
          Verify
        </Button>
      </div>
    </form>
  );
}
