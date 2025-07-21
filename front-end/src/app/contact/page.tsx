"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Leaf, Send, Phone, Mail, MapPin, Clock, Users, MessageCircle, Building, Globe } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    contactMethod: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24 giờ.');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Điện thoại",
      details: [
        { label: "Hotline", value: "+84 28 1234 5678" },
        { label: "Fax", value: "+84 28 1234 5679" }
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      details: [
        { label: "Kinh doanh", value: "sales@agrotrade.vn" },
        { label: "Hỗ trợ", value: "support@agrotrade.vn" }
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Địa chỉ",
      details: [
        { label: "Trụ sở chính", value: "123 Nguyễn Huệ, Q.1, TP.HCM" },
        { label: "Chi nhánh", value: "456 Lê Lợi, Q.1, TP.HCM" }
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Giờ làm việc",
      details: [
        { label: "Thứ 2 - Thứ 6", value: "8:00 - 18:00" },
        { label: "Thứ 7", value: "8:00 - 12:00" }
      ]
    }
  ];

  const offices = [
    {
      city: "TP. Hồ Chí Minh",
      address: "123 Nguyễn Huệ, Quận 1",
      phone: "+84 28 1234 5678",
      email: "hcm@agrotrade.vn",
      type: "Trụ sở chính",
      image: "🏢"
    },
    {
      city: "Hà Nội",
      address: "789 Hoàn Kiếm, Quận Hoàn Kiếm",
      phone: "+84 24 1234 5678",
      email: "hanoi@agrotrade.vn",
      type: "Chi nhánh",
      image: "🏬"
    },
    {
      city: "Cần Thơ",
      address: "321 Hai Bà Trưng, Q. Ninh Kiều",
      phone: "+84 292 1234 567",
      email: "cantho@agrotrade.vn",
      type: "Văn phòng đại diện",
      image: "🏪"
    },
    {
      city: "Đà Nẵng",
      address: "654 Nguyễn Văn Linh, Q. Thanh Khê",
      phone: "+84 236 1234 567",
      email: "danang@agrotrade.vn",
      type: "Văn phòng đại diện",
      image: "🏪"
    }
  ];

  const departments = [
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Phòng Kinh doanh",
      description: "Tư vấn sản phẩm và dịch vụ",
      email: "sales@agrotrade.vn",
      phone: "Ext: 101"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
      title: "Phòng Hỗ trợ khách hàng",
      description: "Giải đáp thắc mắc và hỗ trợ",
      email: "support@agrotrade.vn",
      phone: "Ext: 102"
    },
    {
      icon: <Building className="h-6 w-6 text-purple-600" />,
      title: "Phòng Logistics",
      description: "Vận chuyển và giao nhận",
      email: "logistics@agrotrade.vn",
      phone: "Ext: 103"
    },
    {
      icon: <Globe className="h-6 w-6 text-orange-600" />,
      title: "Phòng Xuất nhập khẩu",
      description: "Thủ tục và giấy tờ",
      email: "export@agrotrade.vn",
      phone: "Ext: 104"
    }
  ];

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
              <Link href="/contact" className="text-green-600 font-medium">Liên hệ</Link>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              Liên hệ ngay
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại trang chủ
        </Link>

        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-green-100 text-green-800">Liên hệ với chúng tôi</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Kết nối với AgroTrade
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. 
            Hãy liên hệ để bắt đầu hành trình hợp tác thành công.
          </p>
        </div>

        {/* Contact Form & Quick Contact */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 backdrop-blur-sm border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Send className="h-6 w-6 text-green-600 mr-2" />
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
                <CardDescription className="text-lg">
                  Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong vòng 24 giờ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Nguyễn Văn A"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="email@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+84 xxx xxx xxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Công ty</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Tên công ty"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Chủ đề *</Label>
                      <Select onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn chủ đề" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="export">Xuất khẩu nông sản</SelectItem>
                          <SelectItem value="import">Nhập khẩu thiết bị</SelectItem>
                          <SelectItem value="logistics">Dịch vụ logistics</SelectItem>
                          <SelectItem value="quality">Kiểm định chất lượng</SelectItem>
                          <SelectItem value="consultation">Tư vấn thị trường</SelectItem>
                          <SelectItem value="partnership">Hợp tác kinh doanh</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactMethod">Cách thức liên hệ ưa thích</Label>
                      <Select onValueChange={(value) => handleInputChange('contactMethod', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn cách liên hệ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Điện thoại</SelectItem>
                          <SelectItem value="meeting">Gặp mặt trực tiếp</SelectItem>
                          <SelectItem value="video">Video call</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nội dung tin nhắn *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Mô tả chi tiết nhu cầu và yêu cầu của bạn..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {info.icon}
                    <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        <span className="text-sm font-medium text-gray-700">{detail.label}:</span>
                        <p className="text-gray-900">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Hỗ trợ khẩn cấp</h3>
                <p className="text-red-100 text-sm mb-3">
                  Dành cho các vấn đề cấp bách cần giải quyết ngay
                </p>
                <div className="space-y-1">
                  <p className="font-medium">📞 +84 90 1234 567</p>
                  <p className="text-red-100 text-sm">24/7 - Tất cả các ngày trong tuần</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Văn phòng của chúng tôi
            </h2>
            <p className="text-xl text-gray-600">
              AgroTrade có mặt tại các thành phố lớn trên toàn quốc
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="border-green-200 bg-white/80 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{office.image}</div>
                  <Badge className="mb-3" variant={office.type === 'Trụ sở chính' ? 'default' : 'secondary'}>
                    {office.type}
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{office.city}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center justify-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {office.address}
                    </p>
                    <p className="flex items-center justify-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {office.phone}
                    </p>
                    <p className="flex items-center justify-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {office.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Các phòng ban chuyên môn
            </h2>
            <p className="text-xl text-gray-600">
              Liên hệ trực tiếp với phòng ban phù hợp với nhu cầu của bạn
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="border-green-200 bg-white/80 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      {dept.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{dept.title}</h3>
                      <p className="text-gray-600 mb-3">{dept.description}</p>
                      <div className="space-y-1 text-sm">
                        <p className="flex items-center">
                          <Mail className="h-3 w-3 mr-2 text-green-600" />
                          {dept.email}
                        </p>
                        <p className="flex items-center">
                          <Phone className="h-3 w-3 mr-2 text-green-600" />
                          {dept.phone}
                        </p>
                      </div>
                    </div>
                  </div>
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
                Bạn có câu hỏi cụ thể?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn miễn phí 
                để giúp bạn tìm ra giải pháp tối ưu nhất.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Gọi ngay: +84 28 1234 5678
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Mail className="mr-2 h-4 w-4" />
                  Email: info@agrotrade.vn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
