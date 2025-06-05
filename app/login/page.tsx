import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Leaf, Heart } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-50 flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-200/40 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-emerald-200/30 rounded-full blur-xl"></div>

        {/* Floating nutrition icons */}
        <div className="absolute top-32 right-1/4 text-green-300/20">
          <Leaf className="w-16 h-16" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-orange-300/20">
          <Heart className="w-12 h-12" />
        </div>
      </div>

      <header className="container mx-auto px-4 py-6 relative z-10">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"></div>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
            zaikaBalance
          </span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="hidden md:flex flex-col justify-center">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/healthy-bowl.jpg" alt="Healthy Nutritious Bowl" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">Balance Your Diet</h2>
              <p className="text-gray-600 mt-2">Track your nutrition and discover delicious, healthy Indian recipes</p>
            </div>
          </div>

          <Card className="w-full bg-white/90 backdrop-blur-md border-0 shadow-xl border border-white/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-orange-600 hover:text-orange-800">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 hover:from-emerald-600 hover:via-orange-600 hover:to-red-600 shadow-lg">
                Sign In
              </Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/signup" className="text-orange-600 hover:text-orange-800 font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-600 text-sm relative z-10">
        <p>&copy; 2024 zaikaBalance. All rights reserved.</p>
      </footer>
    </div>
  )
}
