import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Globe, ShieldCheck, Users, ArrowRight, Leaf, Factory, Ship } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                Đối tác tin cậy trong ngành nông nghiệp
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Kết nối nông sản 
                <span className="text-green-600"> Việt Nam</span> 
                với thế giới
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Chuyên cung cấp dịch vụ xuất nhập khẩu nông sản chất lượng cao, 
                kết nối nông dân Việt Nam với thị trường quốc tế thông qua quy trình 
                hiện đại và đáng tin cậy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Khám phá dịch vụ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Xem sản phẩm
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Khách hàng tin tưởng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Quốc gia xuất khẩu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <Factory className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Sản xuất</h3>
                  <p className="text-sm text-gray-600">Quản lý chất lượng từ trang trại đến xuất khẩu</p>
                </div>
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Ship className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Vận chuyển</h3>
                  <p className="text-sm text-gray-600">Logistics toàn cầu chuyên nghiệp</p>
                </div>
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Globe className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Thị trường</h3>
                  <p className="text-sm text-gray-600">Kết nối với 50+ quốc gia</p>
                </div>
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-orange-100 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Chất lượng</h3>
                  <p className="text-sm text-gray-600">Tiêu chuẩn quốc tế nghiêm ngặt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Dịch vụ chuyên nghiệp</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Giải pháp toàn diện cho xuất nhập khẩu nông sản
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Từ tư vấn, quản lý chất lượng đến logistics và phân phối, 
              chúng tôi đồng hành cùng bạn trong mọi khâu của chuỗi cung ứng.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="h-8 w-8 text-green-600" />,
                title: "Xuất khẩu nông sản",
                description: "Dịch vụ xuất khẩu chuyên nghiệp với quy trình chuẩn quốc tế, đảm bảo chất lượng và thời gian giao hàng.",
                features: ["Tư vấn thị trường", "Quản lý chất lượng", "Logistics toàn cầu"]
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "Nhập khẩu thiết bị",
                description: "Nhập khẩu máy móc, thiết bị nông nghiệp hiện đại từ các nhà sản xuất uy tín trên thế giới.",
                features: ["Thiết bị chất lượng cao", "Bảo hành chính hãng", "Hỗ trợ kỹ thuật"]
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-purple-600" />,
                title: "Kiểm tra chất lượng",
                description: "Dịch vụ kiểm định và chứng nhận chất lượng theo tiêu chuẩn quốc tế và yêu cầu thị trường.",
                features: ["Chứng nhận ISO", "Kiểm định chuyên nghiệp", "Báo cáo chi tiết"]
              },
              {
                icon: <Users className="h-8 w-8 text-orange-600" />,
                title: "Tư vấn thị trường",
                description: "Phân tích thị trường, xu hướng và cơ hội kinh doanh để tối ưu hóa hiệu quả xuất nhập khẩu.",
                features: ["Báo cáo thị trường", "Phân tích cạnh tranh", "Chiến lược kinh doanh"]
              },
              {
                icon: <Factory className="h-8 w-8 text-red-600" />,
                title: "Quản lý chuỗi cung ứng",
                description: "Tối ưu hóa chuỗi cung ứng từ nguồn nguyên liệu đến sản phẩm cuối cùng đến tay người tiêu dùng.",
                features: ["Theo dõi real-time", "Tối ưu chi phí", "Quản lý rủi ro"]
              },
              {
                icon: <Ship className="h-8 w-8 text-cyan-600" />,
                title: "Logistics quốc tế",
                description: "Mạng lưới vận chuyển toàn cầu với các đối tác logistics hàng đầu, đảm bảo an toàn và hiệu quả.",
                features: ["Vận chuyển đa phương thức", "Theo dõi 24/7", "Bảo hiểm hàng hóa"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="space-y-4">
                  <div className="h-16 w-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sẵn sàng mở rộng thị trường nông sản của bạn?
            </h2>
            <p className="text-xl text-green-100">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí 
              và nhận báo giá chi tiết cho dự án của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Tư vấn miễn phí
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-green-600">
                Tải catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

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
