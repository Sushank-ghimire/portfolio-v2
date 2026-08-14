type FormStatusProps = {
  type: "success" | "error";
  message: string;
};

export function FormStatus({ type, message }: FormStatusProps) {
  const isSuccess = type === "success";

  return (
    <div
      role={isSuccess ? "status" : "alert"}
      className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
        isSuccess
          ? "border-accent/20 bg-accent-soft text-accent"
          : "border-red-400/20 bg-red-400/10 text-red-300"
      }`}
    >
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
          isSuccess ? "bg-accent/15" : "bg-red-400/10"
        }`}
      >
        {isSuccess ? "✓" : "!"}
      </span>

      <p>{message}</p>
    </div>
  );
}
