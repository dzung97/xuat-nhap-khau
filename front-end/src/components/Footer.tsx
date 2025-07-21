import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Globe, ShieldCheck, Users, ArrowRight, Leaf, Factory, Ship } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function Footer() {
  return (
    <div className="">
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">AgroTrade</h3>
                  <p className="text-xs text-gray-400">Xuất Nhập Khẩu Nông Nghiệp</p>
                </div>
              </div>
              <p className="text-gray-400">
                Đối tác tin cậy trong việc kết nối nông sản Việt Nam 
                với thị trường toàn cầu qua 15 năm kinh nghiệp.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Dịch vụ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/export" className="hover:text-white transition-colors">Xuất khẩu nông sản</Link></li>
                <li><Link href="/import" className="hover:text-white transition-colors">Nhập khẩu thiết bị</Link></li>
                <li><Link href="/quality" className="hover:text-white transition-colors">Kiểm tra chất lượng</Link></li>
                <li><Link href="/consulting" className="hover:text-white transition-colors">Tư vấn thị trường</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Công ty</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Đội ngũ</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Tuyển dụng</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">Tin tức</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Liên hệ</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 123 Nguyễn Huệ, Q.1, TP.HCM</p>
                <p>📞 +84 28 1234 5678</p>
                <p>✉️ info@agrotrade.vn</p>
                <p>🌐 www.agrotrade.vn</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AgroTrade. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
