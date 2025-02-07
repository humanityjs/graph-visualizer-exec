import { FileText, Server, ShieldX } from "lucide-react";

const Number = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[106px] rounded-md bg-red-50 p-2 py-1 font-mono font-semibold text-red-500">
      {children}
    </div>
  );
};

export function SourceToolTipContent() {
  return (
    <div className="space-y-3 p-4">
      <h3 className="inline-block rounded-md bg-red-50 py-1 pr-6 font-mono font-semibold text-red-500">
        Lorem Ipsum Dolor Sit
      </h3>

      <div className="space-y-2 pl-10">
        <div className="grid grid-cols-3 gap-2">
          <Number>1.2.3.4</Number>
          <Number>1.2.3.4</Number>
          <Number>1.2.3.4</Number>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Number>1.2.3.4</Number>
          <Number>1.2.3.4</Number>
          <Number>1.2.3.4</Number>
        </div>
      </div>

      <h3 className="inline-block rounded-md bg-light-purple p-2 pr-8 font-mono font-semibold text-main-purple">
        Lorem: 1.2.3.4
      </h3>
    </div>
  );
}

export function MiddleToolTipContent() {
  return (
    <div className="max-w-[360px] space-y-3 p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-blue-100 p-3">
          <Server className="h-5 w-5 text-blue-500" />
        </div>
        <span className="text-sm font-medium text-gray-soft">Loremipsu</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <FileText className="h-5 w-5 flex-shrink-0 text-gray-500" />
        <span className="font-bold text-gray-soft">
          Lorem: Loremipsum Loremipsum
        </span>
        <span className="rounded bg-light-purple px-2 py-1 font-mono text-xs font-semibold text-main-purple">
          1.2.3.4
        </span>
        <span className="rounded bg-light-purple px-2 py-1 font-mono text-xs font-semibold text-main-purple">
          1.2.3.4
        </span>
        <span className="font-bold text-gray-soft">Loremipsum</span>
        <span className="rounded bg-light-purple px-2 py-1 font-mono text-xs font-semibold text-main-purple">
          1.2.3.4
        </span>
        <span className="rounded bg-light-purple px-2 py-1 font-mono text-xs font-semibold text-main-purple">
          1.2.3.4
        </span>
      </div>
    </div>
  );
}

export function TargetToolTipContent() {
  return (
    <div className="space-y-1 p-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="rounded-full bg-blue-100 p-3">
            <Server className="h-6 w-6 text-blue-500" />
          </div>
          <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
            <ShieldX className="h-3 w-3 text-white" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-soft">
            Loremipsumdolorsit
          </span>
          <span className="text-xs text-gray-soft-500">192.168.1.1</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <FileText className="h-5 w-5 flex-shrink-0 text-gray-500" />
        <span className="font-bold text-gray-soft">Lorem:</span>
        <span className="inline-block rounded-md bg-amber-50 px-2 py-1 font-mono font-semibold text-amber-500">
          Lorem &quot;Ipsum&quot;
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="font-bold text-gray-soft">Loremipsum</span>
        <span className="inline-block rounded-md bg-blue-50 px-2 py-1 font-mono font-semibold text-blue-500">
          Lorem 1234,5678
        </span>
      </div>
    </div>
  );
}
