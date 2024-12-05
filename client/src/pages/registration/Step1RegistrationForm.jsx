import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    email: "davrielwijagrazio@gmail.com",
    name: "Davriel Wija Grazio",
    address: "Desa Pura Sajau, Jalan Ngau Ifung RT 01, RW 01, No 028 (Kantor Wija Backbone / Rumah Warna Biru)",
    referralCode: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-blue-50/50 flex items-center justify-center p-6">
      <Card className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-lg font-semibold text-center mb-6">Lengkapi Profil Anda</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">1</div>
            <div className="w-12 h-1 bg-gray-300 mx-1"></div>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">2</div>
            <div className="w-12 h-1 bg-gray-300 mx-1"></div>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">3</div>
          </div>
        </div>

        {/* Step Labels */}
        <div className="flex justify-between text-sm px-2">
          <span className="font-medium">Identitas</span>
          <span className="text-gray-500">Keamanan</span>
          <span className="text-gray-500">Tambahan</span>
        </div>

        {/* Form Fields */}
        <div className="space-y-6 mt-4">
          {/* Email Field */}
          <div>
            <label className="text-gray-600 mb-2 block">Alamat Email</label>
            <div className="relative flex items-center border rounded-lg bg-white p-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Google"
                width={24}
                height={24}
                className="mr-2"
              />
              <Input
                value={formData.email}
                className="border-0 focus-visible:ring-0"
                readOnly
              />
              <Check className="absolute right-2 top-3 text-green-500 w-5 h-5" />
            </div>
          </div>

          {/* Profile Photo Field */}
          <div>
            <label className="text-gray-600 mb-2 block">Foto Profil</label>
            <div className="relative bg-white p-4 rounded-lg flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <p className="text-sm text-gray-500">
                Untuk keamanan akun Anda, mohon gunakan foto profil yang menampilkan wajah Anda dengan jelas.
              </p>
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label className="text-gray-600 mb-2 block">Nama Lengkap</label>
            <div className="relative">
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="bg-white"
              />
              <Check className="absolute right-2 top-3 text-green-500 w-5 h-5" />
            </div>
          </div>

          {/* Address Field */}
          <div>
            <label className="text-gray-600 mb-2 block">Alamat</label>
            <div className="relative">
              <Input
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="bg-white"
              />
              <Check className="absolute right-2 top-3 text-green-500 w-5 h-5" />
            </div>
          </div>

          {/* Referral Code Field */}
          <div>
            <label className="text-gray-600 mb-2 block">Kode Referral</label>
            <Input
              value={formData.referralCode}
              onChange={(e) => handleChange("referralCode", e.target.value)}
              placeholder="Masukan kode referral (Opsional)"
              className="bg-white"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gray-600 text-white hover:bg-gray-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProfileForm;
