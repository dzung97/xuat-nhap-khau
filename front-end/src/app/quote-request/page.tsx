
'use client';
import { useSearchParams } from 'next/navigation';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Send, Phone, Mail, Building, Package } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";

export default function QuoteRequest() {
   const searchParams = useSearchParams(); // ✅ NOT destructured
   const productName = searchParams.get('product') || 'Sản phẩm';
   const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    quantity: '',
    unit: 'tấn',
    deliveryDate: '',
    packagingRequirement: '',
    qualityStandard: '',
    additionalRequirements: '',
    agreedToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Quote request submitted:', formData);
    alert('Yêu cầu báo giá đã được gửi! Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <Header/>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/products" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại sản phẩm
          </Link>

          {/* Page Header */}
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-green-100 text-green-800">Yêu cầu báo giá</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Yêu cầu báo giá cho {productName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vui lòng điền đầy đủ thông tin để chúng tôi có thể cung cấp báo giá chính xác nhất cho bạn.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/90 backdrop-blur-sm border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Package className="h-6 w-6 text-green-600 mr-2" />
                    Thông tin yêu cầu báo giá
                  </CardTitle>
                  <CardDescription>
                    Tất cả các trường có dấu (*) là bắt buộc
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Building className="h-5 w-5 text-green-600 mr-2" />
                        Thông tin công ty
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Tên công ty *</Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                            placeholder="Nhập tên công ty"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactName">Người liên hệ *</Label>
                          <Input
                            id="contactName"
                            value={formData.contactName}
                            onChange={(e) => handleInputChange('contactName', e.target.value)}
                            placeholder="Tên người liên hệ"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
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
                        <div className="space-y-2">
                          <Label htmlFor="phone">Số điện thoại *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+84 xxx xxx xxx"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Quốc gia/Thị trường đích *</Label>
                        <Select onValueChange={(value:string) => handleInputChange('country', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn quốc gia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="japan">Nhật Bản</SelectItem>
                            <SelectItem value="korea">Hàn Quốc</SelectItem>
                            <SelectItem value="singapore">Singapore</SelectItem>
                            <SelectItem value="malaysia">Malaysia</SelectItem>
                            <SelectItem value="thailand">Thái Lan</SelectItem>
                            <SelectItem value="china">Trung Quốc</SelectItem>
                            <SelectItem value="australia">Úc</SelectItem>
                            <SelectItem value="usa">Hoa Kỳ</SelectItem>
                            <SelectItem value="eu">Châu Âu</SelectItem>
                            <SelectItem value="other">Khác</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Product Requirements */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Yêu cầu sản phẩm</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Số lượng *</Label>
                          <Input
                            id="quantity"
                            type="number"
                            value={formData.quantity}
                            onChange={(e) => handleInputChange('quantity', e.target.value)}
                            placeholder="Nhập số lượng"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="unit">Đơn vị</Label>
                          <Select value={formData.unit} onValueChange={(value:string) => handleInputChange('unit', value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tấn">Tấn</SelectItem>
                              <SelectItem value="kg">Kilogram</SelectItem>
                              <SelectItem value="container">Container</SelectItem>
                              <SelectItem value="thùng">Thùng</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="deliveryDate">Thời gian giao hàng mong muốn</Label>
                        <Input
                          id="deliveryDate"
                          type="date"
                          value={formData.deliveryDate}
                          onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="packagingRequirement">Yêu cầu đóng gói</Label>
                        <Textarea
                          id="packagingRequirement"
                          value={formData.packagingRequirement}
                          onChange={(e) => handleInputChange('packagingRequirement', e.target.value)}
                          placeholder="Mô tả yêu cầu đóng gói đặc biệt (nếu có)"
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="qualityStandard">Tiêu chuẩn chất lượng</Label>
                        <Select onValueChange={(value:string) => handleInputChange('qualityStandard', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn tiêu chuẩn chất lượng" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gap">GAP (Good Agricultural Practices)</SelectItem>
                            <SelectItem value="organic">Organic/Hữu cơ</SelectItem>
                            <SelectItem value="halal">Halal</SelectItem>
                            <SelectItem value="haccp">HACCP</SelectItem>
                            <SelectItem value="iso">ISO 22000</SelectItem>
                            <SelectItem value="custom">Yêu cầu riêng</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="additionalRequirements">Yêu cầu bổ sung</Label>
                        <Textarea
                          id="additionalRequirements"
                          value={formData.additionalRequirements}
                          onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                          placeholder="Các yêu cầu đặc biệt khác về sản phẩm, vận chuyển, chứng từ..."
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Terms and Submit */}
                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreedToTerms}
                          onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked)}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          Tôi đồng ý với{' '}
                          <Link href="/terms" className="text-green-600 hover:text-green-700">
                            điều khoản dịch vụ
                          </Link>{' '}
                          và cho phép AgroTrade liên hệ để tư vấn báo giá.
                        </Label>
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={!formData.agreedToTerms}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Gửi yêu cầu báo giá
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Liên hệ trực tiếp</CardTitle>
                  <CardDescription>
                    Cần hỗ trợ ngay? Liên hệ với chúng tôi
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Hotline</p>
                      <p className="text-sm text-gray-600">+84 28 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">quote@agrotrade.vn</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Gọi điện tư vấn
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Cam kết của chúng tôi</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
                      <span>Phản hồi trong vòng 24 giờ</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
                      <span>Báo giá minh bạch, cạnh tranh</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
                      <span>Tư vấn chuyên nghiệp miễn phí</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
                      <span>Đảm bảo chất lượng 100%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
