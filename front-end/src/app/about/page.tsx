import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Shield, Lightbulb, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

export default function About() {
  const milestones = [
    { year: "2009", title: "Thành lập công ty", description: "AgroTrade được thành lập với sứ mệnh kết nối nông sản Việt Nam ra thế giới" },
    { year: "2012", title: "Mở rộng thị trường", description: "Xuất khẩu thành công sang 5 quốc gia đầu tiên trong khu vực ASEAN" },
    { year: "2015", title: "Chứng nhận ISO", description: "Đạt chứng nhận ISO 22000:2005 về an toàn thực phẩm" },
    { year: "2018", title: "Đạt 500 khách hàng", description: "Phục vụ hơn 500 khách hàng trên 20+ quốc gia" },
    { year: "2020", title: "Chuyển đổi số", description: "Ứng dụng công nghệ 4.0 trong quản lý chuỗi cung ứng" },
    { year: "2024", title: "Mở rộng toàn cầu", description: "Xuất khẩu sang 50+ quốc gia với doanh thu 100M USD" }
  ];

  const teamMembers = [
    {
      name: "Nguyễn Văn Nam",
      position: "Tổng Giám Đốc",
      experience: "20+ năm",
      expertise: "Xuất nhập khẩu nông sản",
      image: "👨‍💼",
      description: "Chuyên gia hàng đầu về thị trường nông sản quốc tế với hơn 20 năm kinh nghiệm."
    },
    {
      name: "Trần Thị Hoa",
      position: "Giám Đốc Kinh Doanh",
      experience: "15+ năm",
      expertise: "Phát triển thị trường",
      image: "👩‍💼",
      description: "Chuyên gia phát triển thị trường với mạng lưới khách hàng rộng khắp Châu Á."
    },
    {
      name: "Lê Minh Tuấn",
      position: "Giám Đốc Kỹ Thuật",
      experience: "18+ năm",
      expertise: "Quản lý chất lượng",
      image: "👨‍🔬",
      description: "Chuyên gia về tiêu chuẩn chất lượng và an toàn thực phẩm quốc tế."
    },
    {
      name: "Phạm Thu Lan",
      position: "Giám Đốc Logistics",
      experience: "12+ năm",
      expertise: "Vận chuyển quốc tế",
      image: "👩‍✈️",
      description: "Chuyên gia logistics với kinh nghiệm quản lý chuỗi cung ứng toàn cầu."
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Chất lượng",
      description: "Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao nhất theo tiêu chuẩn quốc tế."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Tận tâm",
      description: "Đặt lợi ích của khách hàng và nông dân lên hàng đầu trong mọi hoạt động."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Đổi mới",
      description: "Không ngừng ứng dụng công nghệ và phương pháp mới để nâng cao hiệu quả."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Uy tín",
      description: "Xây dựng niềm tin thông qua sự minh bạch và trách nhiệm trong kinh doanh."
    }
  ];

  const achievements = [
    { icon: "🏆", title: "Top 3", description: "Công ty xuất khẩu nông sản hàng đầu miền Nam" },
    { icon: "🌟", title: "ISO 22000", description: "Chứng nhận quản lý an toàn thực phẩm" },
    { icon: "🌍", title: "50+ quốc gia", description: "Mạng lưới xuất khẩu toàn cầu" },
    { icon: "📈", title: "100M USD", description: "Doanh thu xuất khẩu năm 2023" },
    { icon: "👥", title: "200+ nhân viên", description: "Đội ngũ chuyên nghiệp và giàu kinh nghiệm" },
    { icon: "🚛", title: "1000+ container", description: "Khối lượng xuất khẩu hàng tháng" }
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
          <Badge className="bg-green-100 text-green-800">Về AgroTrade</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Câu chuyện của chúng tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15 năm hành trình kết nối nông sản Việt Nam với thế giới, 
            xây dựng cầu nối tin cậy giữa nông dân và thị trường quốc tế.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sứ mệnh của chúng tôi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AgroTrade được thành lập với sứ mệnh đưa nông sản Việt Nam chất lượng cao 
                đến với người tiêu dùng trên toàn thế giới. Chúng tôi tin rằng, với đất đai 
                màu mỡ và khí hậu thuận lợi, Việt Nam có thể trở thành một trong những 
                nhà cung cấp nông sản hàng đầu thế giới.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thông qua việc ứng dụng công nghệ hiện đại, quy trình quản lý chất lượng 
                nghiêm ngặt và mạng lưới đối tác toàn cầu, chúng tôi tạo ra cầu nối tin cậy 
                giữa nông dân Việt Nam và thị trường quốc tế.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Khách hàng</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-gray-600">Quốcc gia</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg">
                <div className="text-3xl font-bold text-green-600">100M+</div>
                <div className="text-gray-600">USD doanh thu</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tầm nhìn 2030
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Trở thành công ty xuất nhập khẩu nông sản hàng đầu Đông Nam Á, 
                được công nhận về chất lượng dịch vụ và sự đổi mới trong ngành.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cam kết của chúng tôi</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-200" />
                    <span>Chất lượng sản phẩm đạt tiêu chuẩn quốc tế</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-200" />
                    <span>Dịch vụ khách hàng tận tâm 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-200" />
                    <span>Phát triển bền vững và có trách nhiệm</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-200" />
                    <span>Đối tác tin cậy lâu dài</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Hành trình phát triển
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-emerald-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="bg-white/90 backdrop-blur-sm border-green-200">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative">
                    <div className="h-4 w-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những nguyên tắc định hướng mọi hoạt động của chúng tôi
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-green-200 bg-white/80 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Đội ngũ lãnh đạo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con người dày dạn kinh nghiệm dẫn dắt AgroTrade vươn xa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-green-200 bg-white/90 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.position}</p>
                  <div className="flex justify-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">{member.experience}</Badge>
                    <Badge variant="outline" className="text-xs">{member.expertise}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thành tựu đạt được
            </h2>
            <p className="text-xl text-gray-600">
              Những con số ấn tượng sau 15 năm phát triển
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-green-200 bg-white/80">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">{achievement.title}</div>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                Cùng AgroTrade viết tiếp câu chuyện thành công
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Hãy để chúng tôi đồng hành cùng bạn trong hành trình phát triển kinh doanh nông sản.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    Trở thành đối tác
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-green-600">
                    Khám phá dịch vụ
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
