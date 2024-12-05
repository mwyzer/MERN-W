import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

const ProfileSecurityForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const togglePinVisibility = () => setShowPin((prev) => !prev);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <Card className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-semibold text-center mb-6">Lengkapi Profil Anda</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full">✓</div>
            <div className="w-12 h-1 bg-blue-500 mx-1"></div>
            <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full">2</div>
            <div className="w-12 h-1 bg-gray-300 mx-1"></div>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">3</div>
          </div>
        </div>

        {/* Step Labels */}
        <div className="flex justify-between text-sm px-2 mb-4">
          <span className="text-green-500">Identitas</span>
          <span className="font-medium">Keamanan</span>
          <span className="text-gray-500">Tambahan</span>
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Username Field */}
          <div className="relative">
            <Input
              placeholder="Gunakan hanya huruf kecil & angka"
              className="pr-16"
            />
            <Button
              type="button"
              className="absolute right-1 top-1 px-3 py-1 bg-blue-500 text-white rounded"
              onClick={() => console.log("Check username")}
            >
              Cek
            </Button>
          </div>

          {/* Password Field */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Min 8 digit, huruf besar, huruf kecil & angka"
            />
            <button
              type="button"
              className="absolute right-2 top-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Repeat Password Field */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Ulangi password Anda"
            />
            <button
              type="button"
              className="absolute right-2 top-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* PIN Field */}
          <div className="relative">
            <Input
              type={showPin ? "text" : "password"}
              placeholder="6 digit angka"
            />
            <button
              type="button"
              className="absolute right-2 top-2"
              onClick={togglePinVisibility}
            >
              {showPin ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Repeat PIN Field */}
          <div className="relative">
            <Input
              type={showPin ? "text" : "password"}
              placeholder="Ulangi PIN Anda"
            />
            <button
              type="button"
              className="absolute right-2 top-2"
              onClick={togglePinVisibility}
            >
              {showPin ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </form>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <Button variant="outline" size="icon" className="rounded-full">
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

export default ProfileSecurityForm;
