import Link from "next/link";
import { KEYWORD } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="mb-4 text-4xl font-bold text-neutral-900">404</h1>
      <p className="mb-8 text-neutral-600">
        ไม่พบหน้าที่คุณต้องการ — กลับไปที่ Entity Hub ของ {KEYWORD}
      </p>
      <Link
        href="/"
        className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
      >
        กลับหน้าแรก
      </Link>
    </div>
  );
}
