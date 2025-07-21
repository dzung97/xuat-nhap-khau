import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Truck, Globe, ShieldCheck, Users, Factory, Ship, CheckCircle, Award, BarChart3, Clock, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function Services() {
  const mainServices = [
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Xuất khẩu nông sản",
      description: "Dịch vụ xuất khẩu chuyên nghiệp với quy trình chuẩn quốc tế, đảm bảo chất lượng và thời gian giao hàng.",
      features: ["Tư vấn thị trường", "Quản lý chất lượng", "Logistics toàn cầu", "Hồ sơ xuất khẩu"],
      price: "Từ $500/container",
      duration: "7-14 ngày",
      markets: ["Nhật Bản", "Hàn Quốc", "EU", "Mỹ"]
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Nhập khẩu thiết bị",
      description: "Nhập khẩu máy móc, thiết bị nông nghiệp hiện đại từ các nhà sản xuất uy tín trên thế giới.",
      features: ["Thiết bị chất lượng cao", "Bảo hành chính hãng", "Hỗ trợ kỹ thuật", "Đào tạo vận hành"],
      price: "Tùy theo thiết bị",
      duration: "30-45 ngày",
      markets: ["Đức", "Nhật Bản", "Hàn Quốc", "Mỹ"]
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-purple-600" />,
      title: "Kiểm tra chất lượng",
      description: "Dịch vụ kiểm định và chứng nhận chất lượng theo tiêu chuẩn quốc tế và yêu cầu thị trường.",
      features: ["Chứng nhận ISO", "Kiểm định chuyên nghiệp", "Báo cáo chi tiết", "Tuân thủ quốc tế"],
      price: "$200-500/đợt",
      duration: "3-5 ngày",
      markets: ["Toàn cầu", "EU", "ASEAN", "Bắc Mỹ"]
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Tư vấn thị trường",
      description: "Phân tích thị trường, xu hướng và cơ hội kinh doanh để tối ưu hóa hiệu quả xuất nhập khẩu.",
      features: ["Báo cáo thị trường", "Phân tích cạnh tranh", "Chiến lược kinh doanh", "Dự báo xu hướng"],
      price: "$1,000-3,000/dự án",
      duration: "10-15 ngày",
      markets: ["ASEAN", "Châu Á", "EU", "Toàn cầu"]
    },
    {
      icon: <Factory className="h-8 w-8 text-red-600" />,
      title: "Quản lý chuỗi cung ứng",
      description: "Tối ưu hóa chuỗi cung ứng từ nguồn nguyên liệu đến sản phẩm cuối cùng đến tay người tiêu dùng.",
      features: ["Theo dõi real-time", "Tối ưu chi phí", "Quản lý rủi ro", "Báo cáo định kỳ"],
      price: "$2,000-5,000/tháng",
      duration: "Hợp đồng dài hạn",
      markets: ["Việt Nam", "ASEAN", "Châu Á", "Toàn cầu"]
    },
    {
      icon: <Ship className="h-8 w-8 text-cyan-600" />,
      title: "Logistics quốc tế",
      description: "Mạng lưới vận chuyển toàn cầu với các đối tác logistics hàng đầu, đảm bảo an toàn và hiệu quả.",
      features: ["Vận chuyển đa phương thức", "Theo dõi 24/7", "Bảo hiểm hàng hóa", "Kho bãi hiện đại"],
      price: "Theo km/tuyến",
      duration: "Theo lịch trình",
      markets: ["Toàn cầu", "Tuyến chính", "Cảng lớn", "Hub quốc tế"]
    }
  ];

  const additionalServices = [
    {
      title: "Tư vấn pháp lý",
      description: "Hỗ trợ thủ tục pháp lý, giấy phép và chứng từ xuất nhập khẩu",
      icon: "⚖️"
    },
    {
      title: "Bảo hiểm hàng hóa",
      description: "Dịch vụ bảo hiểm toàn diện cho hàng hóa xuất nhập khẩu",
      icon: "🛡️"
    },
    {
      title: "Tài chính thương mại",
      description: "Hỗ trợ L/C, bảo lãnh và các sản phẩm tài chính",
      icon: "💰"
    },
    {
      title: "Đào tạo xuất nhập khẩu",
      description: "Khóa học chuyên nghiệp về quy trình và thủ tục",
      icon: "🎓"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Tư vấn & Khảo sát",
      description: "Phân tích nhu cầu và đưa ra giải pháp tối ưu"
    },
    {
      step: "02", 
      title: "Lập kế hoạch",
      description: "Xây dựng roadmap chi tiết và timeline thực hiện"
    },
    {
      step: "03",
      title: "Thực hiện dự án",
      description: "Triển khai theo kế hoạch với đội ngũ chuyên nghiệp"
    },
    {
      step: "04",
      title: "Theo dõi & Hỗ trợ",
      description: "Giám sát tiến độ và hỗ trợ 24/7 trong suốt quá trình"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <Header/>

      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại trang chủ
        </Link>

        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-green-100 text-green-800">Dịch vụ chuyên nghiệp</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Dịch vụ xuất nhập khẩu toàn diện
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Từ tư vấn, quản lý chất lượng đến logistics và phân phối, 
            chúng tôi đồng hành cùng bạn trong mọi khâu của chuỗi cung ứng nông nghiệp.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="h-16 w-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="outline" className="text-xs border-green-600 text-green-600">
                      {service.price}
                    </Badge>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.duration}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Bao gồm:</h4>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Markets */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Thị trường:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.markets.map((market, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {market}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
                  Yêu cầu tư vấn
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quy trình làm việc chuyên nghiệp
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 bước đơn giản để bắt đầu hành trình xuất nhập khẩu thành công với AgroTrade
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative mb-6">
                    <div className="h-20 w-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto relative z-10">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            {/* Connecting lines */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600" style={{marginTop: '40px'}}></div>
            <div className="hidden lg:grid lg:grid-cols-4 absolute top-10 left-0 right-0 gap-8" style={{marginTop: '40px'}}>
              <div className="flex justify-center">
                <div className="h-4 w-4 bg-green-600 rounded-full border-4 border-white shadow-lg relative z-20"></div>
              </div>
              <div className="flex justify-center">
                <div className="h-4 w-4 bg-green-600 rounded-full border-4 border-white shadow-lg relative z-20"></div>
              </div>
              <div className="flex justify-center">
                <div className="h-4 w-4 bg-green-600 rounded-full border-4 border-white shadow-lg relative z-20"></div>
              </div>
              <div className="flex justify-center">
                <div className="h-4 w-4 bg-green-600 rounded-full border-4 border-white shadow-lg relative z-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Dịch vụ bổ sung
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center border-green-200 bg-white/80 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tại sao chọn AgroTrade?
            </h2>
            <p className="text-xl text-green-100">
              15 năm kinh nghiệm trong lĩnh vực xuất nhập khẩu nông sản
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="h-8 w-8" />, title: "500+", subtitle: "Khách hàng tin tưởng" },
              { icon: <Globe className="h-8 w-8" />, title: "50+", subtitle: "Quốc gia xuất khẩu" },
              { icon: <BarChart3 className="h-8 w-8" />, title: "99%", subtitle: "Tỷ lệ thành công" },
              { icon: <HeadphonesIcon className="h-8 w-8" />, title: "24/7", subtitle: "Hỗ trợ khách hàng" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.title}</div>
                <div className="text-green-100">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-green-200 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bắt đầu dự án xuất nhập khẩu của bạn ngay hôm nay
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Tư vấn miễn phí
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Tải brochure dịch vụ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
