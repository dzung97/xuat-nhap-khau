// File: app/products/details/page.tsx
"use client";

import { Suspense } from "react";
import ProductDetailsClient from "./ProductDetailsClient";

export default function ProductDetailsPage() {
  return (
    <Suspense fallback={<div>Đang tải chi tiết sản phẩm...</div>}>
      <ProductDetailsClient />
    </Suspense>
  );
}
