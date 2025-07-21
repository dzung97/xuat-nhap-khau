import { Button } from "@/components/ui/button";
import {  Leaf } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AgroTrade</h1>
                <p className="text-xs text-gray-600">Xuất Nhập Khẩu Nông Nghiệp</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Trang chủ</Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors">Dịch vụ</Link>
              <Link href="/products" className="text-gray-700 hover:text-green-600 transition-colors">Sản phẩm</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">Về chúng tôi</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Liên hệ</Link>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              Liên hệ ngay
            </Button>
          </div>
        </div>
      </header>

     
  
    </div>
  );
}
