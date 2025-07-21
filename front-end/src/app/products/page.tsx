import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Leaf, Star, Truck, Globe, CheckCircle, Package } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Chanh Tươi",
      englishName: "Fresh Lime",
      image: "🍋",
      price: "$2,500 - $3,200",
      unit: "/tấn",
      origin: "Đồng bằng sông Cửu Long",
      season: "Quanh năm",
      description: "Chanh tươi chất lượng cao với độ chua tự nhiên, vỏ mỏng, nhiều nước cốt. Được trồng theo tiêu chuẩn GAP, đảm bảo an toàn thực phẩm.",
      specifications: [
        "Kích thước: 4-6cm đường kính",
        "Độ chua: 6-8% acid citric",
        "Trọng lượng: 30-50g/quả",
        "Độ ẩm: <12%"
      ],
      features: [
        "Không thuốc trừ sâu",
        "Chứng nhận GAP",
        "Vỏ mỏng, nhiều nước",
        "Hương thơm đặc trưng"
      ],
      exportMarkets: ["Nhật Bản", "Hàn Quốc", "Singapore", "Malaysia"],
      packaging: "Thùng carton 10kg, lót xốp bảo vệ",
      rating: 4.8
    },
    {
      id: 2,
      name: "Bưởi Da Xanh",
      englishName: "Green Skin Pomelo",
      image: "🥭",
      price: "$1,800 - $2,500",
      unit: "/tấn",
      origin: "Bến Tre, Tiền Giang",
      season: "Tháng 8 - Tháng 2",
      description: "Bưởi da xanh đặc sản miền Tây với múi ngọt, ít hạt. Trái to, vỏ xanh mịn, thịt trắng ngà, ngọt thanh mát với hương thơm đặc trưng.",
      specifications: [
        "Trọng lượng: 1-2kg/trái",
        "Đường độ: 10-12 Brix",
        "Múi to, ít hạt",
        "Vỏ dày 2-3cm"
      ],
      features: [
        "Múi ngọt, ít chua",
        "Thịt trắng ngà",
        "Hương thơm tự nhiên",
        "Bảo quản lâu dài"
      ],
      exportMarkets: ["Trung Quốc", "Thái Lan", "Campuchia", "Úc"],
      packaging: "Lưới nhựa hoặc thùng carton 20kg",
      rating: 4.9
    },
    {
      id: 3,
      name: "Cam Sành",
      englishName: "Sanh Orange",
      image: "🍊",
      price: "$2,200 - $2,800",
      unit: "/tấn",
      origin: "Hậu Giang, Cần Thơ",
      season: "Tháng 10 - Tháng 3",
      description: "Cam sành ngọt đặc sản miền Tây với vỏ xanh, thịt cam ngọt, nhiều nước. Giàu vitamin C, chất lượng xuất khẩu cao.",
      specifications: [
        "Đường kính: 6-8cm",
        "Đường độ: 8-10 Brix",
        "Vitamin C: 40-50mg/100g",
        "Độ ẩm: 85-90%"
      ],
      features: [
        "Vỏ xanh, thịt cam",
        "Ngọt tự nhiên",
        "Giàu vitamin C",
        "Múi đều, ít hạt"
      ],
      exportMarkets: ["Nga", "Kazakhstan", "Philippines", "Indonesia"],
      packaging: "Thùng carton 15kg với giấy gói từng quả",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Header></Header>

      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại trang chủ
        </Link>

        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-green-100 text-green-800">Sản phẩm chất lượng cao</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trái Cây Citrus Xuất Khẩu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chuyên cung cấp các loại trái cây citrus tươi ngon, chất lượng xuất khẩu 
            từ những vùng trồng uy tín nhất Việt Nam.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardHeader className="space-y-4 relative">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-100 text-yellow-800">
                    <Star className="h-3 w-3 mr-1" />
                    {product.rating}
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    {product.englishName}
                  </CardDescription>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    {product.price}
                    <span className="text-sm text-gray-500">{product.unit}</span>
                  </span>
                  <Badge variant="outline" className="border-green-600 text-green-600">
                    {product.season}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                
                {/* Origin */}
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Xuất xứ:</span>
                  <span className="text-sm text-gray-600">{product.origin}</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Đặc điểm nổi bật:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Thông số kỹ thuật:</h4>
                  <div className="space-y-1">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-xs text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Export Markets */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Thị trường xuất khẩu:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.exportMarkets.map((market, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {market}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Packaging */}
                <div className="flex items-start space-x-2">
                  <Package className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-gray-700">Đóng gói:</span>
                    <p className="text-xs text-gray-600">{product.packaging}</p>
                  </div>
                </div>

                 <div className="pt-4 space-y-2">
                  <Link href={`/quote-request?product=${encodeURIComponent(product.name)}`}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Yêu cầu báo giá
                    </Button>
                  </Link>
                  <Link href={`/products/details?id=${product.id}`}>
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      Xem chi tiết
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cần tư vấn về sản phẩm?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn chi tiết về chất lượng, 
            giá cả và quy trình xuất khẩu cho từng sản phẩm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Truck className="mr-2 h-4 w-4" />
              Tư vấn xuất khẩu
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-green-600">
              Tải catalog đầy đủ
            </Button>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center border-green-200 bg-white/80">
            <CardHeader>
              <div className="h-16 w-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Chất lượng đảm bảo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Tất cả sản phẩm đều được kiểm định nghiêm ngặt theo tiêu chuẩn xuất khẩu quốc tế.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200 bg-white/80">
            <CardHeader>
              <div className="h-16 w-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Vận chuyển nhanh</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Hệ thống logistics chuyên nghiệp đảm bảo hàng hóa đến tay khách hàng tươi ngon.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-green-200 bg-white/80">
            <CardHeader>
              <div className="h-16 w-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Xuất khẩu toàn cầu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Kinh nghiệm xuất khẩu đến hơn 20 quốc gia với quy trình chuẩn quốc tế.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
