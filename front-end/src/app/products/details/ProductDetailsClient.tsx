"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Leaf, Star, Globe, Package, CheckCircle, Truck, Calendar, Award, BarChart3, Map, FileText } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from 'next/navigation'; 
export default function ProductDetailsClient() {
   const searchParams = useSearchParams(); // ✅ NOT destructured
  const productId = searchParams.get('id') || '1';
  type ProductSpecification = { [key: string]: string };

type NutritionalValue = { [key: string]: string };

type HarvestInfo = { [key: string]: string };

type ExportMarket = {
  country: string;
  volume: string;
  standard: string;
};

interface ProductItem {
  name: string;
  englishName: string;
  image: string;
  price: string;
  unit: string;
  origin: string;
  season: string;
  rating: number;
  description: string;
  detailedDescription: string;
  specifications: ProductSpecification;
  nutritionalValue: NutritionalValue;
  harvestInfo: HarvestInfo;
  packaging: string[];
  exportMarkets: ExportMarket[];
  certifications: string[];
  advantages: string[];
}

  // Mock product data - in real app this would come from API
  const productData: { [key: string]: ProductItem } = {
    '1': {
      name: "Chanh Tươi",
      englishName: "Fresh Lime",
      image: "🍋",
      price: "$2,500 - $3,200",
      unit: "/tấn",
      origin: "Đồng bằng sông Cửu Long",
      season: "Quanh năm",
      rating: 4.8,
      description: "Chanh tươi chất lượng cao với độ chua tự nhiên, vỏ mỏng, nhiều nước cốt. Được trồng theo tiêu chuẩn GAP, đảm bảo an toàn thực phẩm và chất lượng xuất khẩu cao.",
      detailedDescription: "Chanh tươi của chúng tôi được trồng tại các vùng đất phù sa màu mỡ của đồng bằng sông Cửu Long, nơi có khí hậu nhiệt đới ẩm và nguồn nước ngọt dồi dào. Với quy trình canh tác theo tiêu chuẩn GAP (Good Agricultural Practices), chúng tôi đảm bảo mỗi quả chanh đều đạt chất lượng xuất khẩu cao nhất.",
      specifications: {
        "Kích thước": "4-6cm đường kính",
        "Trọng lượng": "30-50g/quả",
        "Độ chua": "6-8% acid citric",
        "Độ ẩm": "<12%",
        "Độ Brix": "8-10°",
        "Màu sắc": "Xanh tươi đến vàng nhạt",
        "Hình dạng": "Oval, đều đặn",
        "Vỏ": "Mỏng, mịn, không tỳ vết"
      },
      nutritionalValue: {
        "Vitamin C": "40-60mg/100g",
        "Axit citric": "6-8%",
        "Đường tự nhiên": "8-10%",
        "Chất xơ": "2-3g/100g",
        "Kali": "138mg/100g",
        "Canxi": "33mg/100g"
      },
      harvestInfo: {
        "Thời gian thu hoạch": "Quanh năm",
        "Độ chín": "75-80% chín",
        "Phương pháp": "Hái thủ công",
        "Thời điểm": "Sáng sớm (5-7h)",
        "Bảo quản": "Nhiệt độ 10-12°C",
        "Độ ẩm bảo quản": "85-90%"
      },
      packaging: [
        "Thùng carton 10kg (100 quả/thùng)",
        "Lót xốp PE bảo vệ từng quả",
        "Túi lưới 5kg cho thị trường nội địa",
        "Pallet chuẩn 1.2x1.0m"
      ],
      exportMarkets: [
        { country: "Nhật Bản", volume: "2,500 tấn/năm", standard: "JAS Organic" },
        { country: "Hàn Quốc", volume: "1,800 tấn/năm", standard: "K-Organic" },
        { country: "Singapore", volume: "1,200 tấn/năm", standard: "AVA" },
        { country: "Malaysia", volume: "800 tấn/năm", standard: "HALAL" }
      ],
      certifications: [
        "GAP (Good Agricultural Practices)",
        "ISO 22000:2018",
        "HACCP",
        "Organic Certificate",
        "Phytosanitary Certificate"
      ],
      advantages: [
        "Vỏ mỏng, nhiều nước cốt",
        "Hương thơm đặc trưng",
        "Không sử dụng thuốc trừ sâu",
        "Thu hoạch đúng độ chín",
        "Bảo quản tươi ngon lâu dài",
        "Giá cả cạnh tranh"
      ]
    },
    '2': {
      name: "Bưởi Da Xanh",
      englishName: "Green Skin Pomelo",
      image: "🥭",
      price: "$1,800 - $2,500",
      unit: "/tấn",
      origin: "Bến Tre, Tiền Giang",
      season: "Tháng 8 - Tháng 2",
      rating: 4.9,
      description: "Bưởi da xanh đặc sản miền Tây với múi ngọt, ít hạt. Trái to, vỏ xanh mịn, thịt trắng ngà, ngọt thanh mát với hương thơm đặc trưng.",
      detailedDescription: "Bưởi da xanh là đặc sản nổi tiếng của miền Tây Nam Bộ, được trồng chủ yếu tại Bến Tre và Tiền Giang. Với khí hậu nhiệt đới và đất phù sa màu mỡ, bưởi da xanh ở đây có chất lượng vượt trội với múi to, ngọt và ít hạt.",
      specifications: {
        "Trọng lượng": "1-2kg/trái",
        "Đường độ": "10-12 Brix",
        "Độ ẩm": "87-90%",
        "Số múi": "12-16 múi/trái",
        "Tỷ lệ thịt": "65-70%",
        "Màu vỏ": "Xanh đều, bóng",
        "Độ dày vỏ": "2-3cm",
        "Hình dạng": "Tròn đều, hơi dẹt"
      },
      nutritionalValue: {
        "Vitamin C": "25-35mg/100g",
        "Đường tự nhiên": "10-12%",
        "Chất xơ": "0.6-0.8g/100g",
        "Kali": "235mg/100g",
        "Folate": "8-12mcg/100g",
        "Vitamin A": "2-4IU/100g"
      },
      harvestInfo: {
        "Thời gian thu hoạch": "Tháng 8 - Tháng 2",
        "Độ chín": "85-90% chín",
        "Phương pháp": "Hái thủ công bằng kéo",
        "Thời điểm": "Buổi chiều mát",
        "Bảo quản": "Nhiệt độ 8-10°C",
        "Độ ẩm bảo quản": "85-88%"
      },
      packaging: [
        "Lưới nhựa đỏ (6-8 trái/lưới)",
        "Thùng carton 20kg (8-12 trái)",
        "Foam bảo vệ từng trái",
        "Container lạnh 40ft"
      ],
      exportMarkets: [
        { country: "Trung Quốc", volume: "15,000 tấn/năm", standard: "GACC" },
        { country: "Thái Lan", volume: "3,200 tấn/năm", standard: "Thai GAP" },
        { country: "Campuchia", volume: "2,800 tấn/năm", standard: "HACCP" },
        { country: "Úc", volume: "1,500 tấn/năm", standard: "AQIS" }
      ],
      certifications: [
        "VietGAP Certificate",
        "GlobalGAP",
        "ISO 22000:2018",
        "HACCP",
        "Organic Certificate"
      ],
      advantages: [
        "Múi to, ngọt tự nhiên",
        "Ít hạt, thịt trắng ngà",
        "Hương thơm đặc trưng",
        "Bảo quản được lâu",
        "Giá trị dinh dưỡng cao",
        "Thương hiệu uy tín"
      ]
    },
    '3': {
      name: "Cam Sành",
      englishName: "Sanh Orange",
      image: "🍊",
      price: "$2,200 - $2,800",
      unit: "/tấn",
      origin: "Hậu Giang, Cần Thơ",
      season: "Tháng 10 - Tháng 3",
      rating: 4.7,
      description: "Cam sành ngọt đặc sản miền Tây với vỏ xanh, thịt cam ngọt, nhiều nước. Giàu vitamin C, chất lượng xuất khẩu cao.",
      detailedDescription: "Cam sành là giống cam đặc sản của miền Tây Nam Bộ, có vỏ xanh và thịt cam ngọt đặc trưng. Được trồng chủ yếu tại Hậu Giang và Cần Thơ, cam sành có chất lượng vượt trội với độ ngọt cao và giàu vitamin C.",
      specifications: {
        "Đường kính": "6-8cm",
        "Trọng lượng": "150-250g/quả",
        "Đường độ": "8-10 Brix",
        "Độ ẩm": "85-90%",
        "Số múi": "8-12 múi/quả",
        "Tỷ lệ nước": "45-55%",
        "Màu vỏ": "Xanh đậm",
        "Màu thịt": "Cam đậm"
      },
      nutritionalValue: {
        "Vitamin C": "40-50mg/100g",
        "Đường tự nhiên": "8-10%",
        "Chất xơ": "2.4g/100g",
        "Kali": "181mg/100g",
        "Folate": "15-20mcg/100g",
        "Beta-carotene": "71mcg/100g"
      },
      harvestInfo: {
        "Thời gian thu hoạch": "Tháng 10 - Tháng 3",
        "Độ chín": "80-85% chín",
        "Phương pháp": "Hái thủ công",
        "Thời điểm": "Sáng sớm",
        "Bảo quản": "Nhiệt độ 8-12°C",
        "Độ ẩm bảo quản": "85-90%"
      },
      packaging: [
        "Thùng carton 15kg (60-80 quả)",
        "Giấy gói từng quả",
        "Túi lưới 3kg",
        "Container lạnh 20ft/40ft"
      ],
      exportMarkets: [
        { country: "Nga", volume: "8,500 tấn/năm", standard: "GOST" },
        { country: "Kazakhstan", volume: "3,200 tấn/năm", standard: "ST RK" },
        { country: "Philippines", volume: "2,100 tấn/năm", standard: "BPI" },
        { country: "Indonesia", volume: "1,800 tấn/năm", standard: "SNI" }
      ],
      certifications: [
        "VietGAP Certificate",
        "ISO 22000:2018",
        "HACCP",
        "Halal Certificate",
        "Kosher Certificate"
      ],
      advantages: [
        "Vỏ xanh đặc trưng",
        "Thịt cam ngọt mát",
        "Giàu vitamin C",
        "Ít hạt, nhiều nước",
        "Bảo quản tốt",
        "Thương hiệu nổi tiếng"
      ]
    }
  };

  const product = productData[productId] || productData['1'];

  return (

     
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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

      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại danh sách sản phẩm
        </Link>

        {/* Product Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="text-8xl mb-4">{product.image}</div>
              <Badge className="bg-yellow-100 text-yellow-800 mb-4">
                <Star className="h-4 w-4 mr-1" />
                {product.rating} sao
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-green-600 font-medium mb-4">
                {product.englishName}
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-600">
                  {product.price}
                  <span className="text-lg text-gray-500">{product.unit}</span>
                </span>
                <Badge variant="outline" className="border-green-600 text-green-600">
                  {product.season}
                </Badge>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Globe className="h-5 w-5 text-green-600 mr-2" />
                  Thông tin cơ bản
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Xuất xứ:</span>
                    <p className="text-gray-900">{product.origin}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Mùa vụ:</span>
                    <p className="text-gray-900">{product.season}</p>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <Link href={`/quote-request?product=${encodeURIComponent(product.name)}`}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Yêu cầu báo giá
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Tải catalog PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Ưu điểm nổi bật</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.advantages.map((advantage: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-200" />
                      <span className="text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Card className="bg-white/90 backdrop-blur-sm border-green-200">
          <CardContent className="p-0">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-6 lg:grid-cols-6">
                <TabsTrigger value="specifications">Thông số</TabsTrigger>
                <TabsTrigger value="nutrition">Dinh dưỡng</TabsTrigger>
                <TabsTrigger value="harvest">Thu hoạch</TabsTrigger>
                <TabsTrigger value="packaging">Đóng gói</TabsTrigger>
                <TabsTrigger value="markets">Thị trường</TabsTrigger>
                <TabsTrigger value="certificates">Chứng chỉ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
                    Thông số kỹ thuật
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">{key}:</span>
                        <p className="text-gray-900 font-medium">  {typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="nutrition" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Giá trị dinh dưỡng (per 100g)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(product.nutritionalValue).map(([key, value]) => (
                      <div key={key} className="bg-green-50 p-4 rounded-lg text-center">
                        <p className="text-2xl font-bold text-green-600">  {typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}</p>
                        <p className="text-sm text-gray-700">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="harvest" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Calendar className="h-5 w-5 text-green-600 mr-2" />
                    Thông tin thu hoạch
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.harvestInfo).map(([key, value]) => (
                      <div key={key} className="border-l-4 border-green-500 pl-4">
                        <span className="text-sm font-medium text-gray-700">{key}:</span>
                        <p className="text-gray-900 font-medium">  {typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="packaging" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Package className="h-5 w-5 text-green-600 mr-2" />
                    Quy cách đóng gói
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.packaging.map((pack: string, index: number) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg flex items-center space-x-3">
                        <Package className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-900">{pack}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="markets" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Map className="h-5 w-5 text-green-600 mr-2" />
                    Thị trường xuất khẩu
                  </h3>
                  <div className="grid gap-4">
                    {product.exportMarkets.map((market: ExportMarket, index: number) => (
                      <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-gray-900">{market.country}</h4>
                            <p className="text-sm text-gray-600">Khối lượng: {market.volume}</p>
                          </div>
                          <Badge variant="outline" className="border-green-600 text-green-600">
                            {market.standard}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="certificates" className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Award className="h-5 w-5 text-green-600 mr-2" />
                    Chứng chỉ & Tiêu chuẩn
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.certifications.map((cert: string, index: number) => (
                      <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
                        <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                        <p className="font-medium text-gray-900">{cert}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Cần thêm thông tin chi tiết?</h2>
              <p className="text-xl text-green-100 mb-6">
                Liên hệ với chuyên gia của chúng tôi để được tư vấn chi tiết về sản phẩm và quy trình xuất khẩu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/quote-request?product=${encodeURIComponent(product.name)}`}>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    <FileText className="mr-2 h-4 w-4" />
                    Yêu cầu báo giá ngay
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-green-600">
                  <Truck className="mr-2 h-4 w-4" />
                  Tư vấn logistics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
