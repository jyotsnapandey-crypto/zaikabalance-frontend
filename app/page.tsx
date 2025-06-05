import Link from "next/link"
import Image from "next/image"
import { Calculator, Scan, BookOpen, Target, Search, Star, Clock, Users, Leaf, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const features = [
    {
      icon: Calculator,
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index and track your health journey",
      color: "bg-orange-100 text-orange-600",
      buttonText: "Calculate Now",
    },
    {
      icon: Target,
      title: "Nutrient Tracker",
      description: "Monitor your daily nutrition intake and meet your health goals",
      color: "bg-green-100 text-green-600",
      buttonText: "Start Tracking",
    },
    {
      icon: Search,
      title: "Know Your Food",
      description: "Discover nutritional information about any food item",
      color: "bg-blue-100 text-blue-600",
      buttonText: "Explore Foods",
    },
    {
      icon: BookOpen,
      title: "Diet Suggestion",
      description: "Get personalized diet plans based on your health profile",
      color: "bg-purple-100 text-purple-600",
      buttonText: "Get Suggestions",
    },
    {
      icon: Scan,
      title: "Barcode Scanner",
      description: "Scan product barcodes to get instant nutritional data",
      color: "bg-red-100 text-red-600",
      buttonText: "Scan Products",
    },
  ]

  const indianRecipes = [
    {
      title: "Quinoa Khichdi Bowl",
      description: "A protein-rich twist on traditional khichdi with quinoa, moong dal, and vegetables",
      image: "/images/khichi.jpg", // Add your quinoa khichdi image here
      time: "25 mins",
      servings: "4",
      calories: "320",
      tags: ["High Protein", "Gluten Free"],
    },
    {
      title: "Spinach Paneer Curry",
      description: "Creamy palak paneer made with fresh spinach and homemade cottage cheese",
      image: "/images/palak paneer.webp", // Add your spinach paneer image here
      time: "30 mins",
      servings: "3",
      calories: "280",
      tags: ["Vegetarian", "Iron Rich"],
    },
    {
      title: "Masala Oats Upma",
      description: "Healthy breakfast option with steel-cut oats, vegetables, and aromatic spices",
      image: "/images/masala-oats.jpg", // Add your masala oats image here
      time: "15 mins",
      servings: "2",
      calories: "250",
      tags: ["High Fiber", "Low Fat"],
    },
    {
      title: "Chickpea Tikka Masala",
      description: "Plant-based protein powerhouse with chickpeas in rich tomato-based gravy",
      image: "/images/chickpea-tikka- masala-1.jpg", // Add your chickpea tikka image here
      time: "35 mins",
      servings: "4",
      calories: "290",
      tags: ["Vegan", "High Protein"],
    },
    {
      title: "Millet Biryani",
      description: "Nutritious biryani made with finger millet, vegetables, and fragrant basmati rice",
      image: "/images/millet-biryani.jpg", // Add your millet biryani image here
      time: "45 mins",
      servings: "6",
      calories: "340",
      tags: ["Whole Grain", "Balanced"],
    },
    {
      title: "Turmeric Lentil Soup",
      description: "Healing dal soup with turmeric, ginger, and mixed lentils for immunity boost",
      image: "/images/turmeric-lentil.jpg", // Add your turmeric lentil soup image here
      time: "20 mins",
      servings: "4",
      calories: "200",
      tags: ["Anti-inflammatory", "Immunity"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-50 relative overflow-hidden">
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

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-orange-100/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 rounded-full shadow-lg"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
                zaikaBalance
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
                Features
              </Link>
              <Link href="#recipes" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
                Recipe Books
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
                Login
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 hover:from-emerald-600 hover:via-orange-600 hover:to-red-600 shadow-lg"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-orange-100 px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Nutrition Meets Tradition</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Healthy & Tasty
              <span className="bg-gradient-to-r from-emerald-600 via-orange-600 to-red-600 bg-clip-text text-transparent block">
                Indian Meals
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the perfect balance of nutrition and flavor with our comprehensive health tracking tools and
              authentic Indian recipes crafted by nutrition experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 hover:from-emerald-600 hover:via-orange-600 hover:to-red-600 shadow-lg"
              >
                Explore Features
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 text-orange-600 hover:bg-orange-50 shadow-sm"
                asChild
              >
                <Link href="/recipes">View Recipes</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <Image
                src="/images/healthy-bowl.jpg"
                alt="Healthy Nutritious Bowl"
                width={400}
                height={400}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-orange-500 text-white p-4 rounded-full shadow-lg">
              <Star className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg">
              <Heart className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-orange-100 px-4 py-2 rounded-full mb-4">
            <Target className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">Health Tracking Tools</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Wellness Features</h2>
          <p className="text-xl text-gray-600">Advanced tools to monitor and improve your nutrition journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4 shadow-md`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">{feature.description}</CardDescription>
                {feature.title === "BMI Calculator" ? (
  <Button
    asChild
    className="w-full mt-4 bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 hover:from-emerald-600 hover:via-orange-600 hover:to-red-600 shadow-md"
  >
    <Link href="/bmi-calculator">Calculate BMI</Link>
  </Button>
) : (
  <Button className="w-full mt-4 bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 hover:from-emerald-600 hover:via-orange-600 hover:to-red-600 shadow-md">
    {feature.buttonText}
  </Button>
)}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recipe Books Section */}
      <section
        id="recipes"
        className="bg-gradient-to-r from-emerald-100/50 via-orange-100/50 to-amber-100/50 py-16 relative"
      >
        <div className="absolute inset-0 opacity-50">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='a' patternUnits='userSpaceOnUse' width='60' height='60'%3e%3ccircle cx='30' cy='30' r='2' fill='%23f97316' fillOpacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23a)'/%3e%3c/svg%3e")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-orange-100 px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Curated Recipes</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nutritious Indian Recipe Books</h2>
            <p className="text-xl text-gray-600">Authentic flavors meets modern nutrition science</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianRecipes.map((recipe, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/20"
              >
                <div className="relative">
                  <Image
                    src={recipe.image || "/images/healthy-bowl.jpg"}
                    alt={recipe.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
                    <span className="text-sm font-semibold text-orange-600">{recipe.calories} cal</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800">{recipe.title}</CardTitle>
                  <CardDescription className="text-gray-600">{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {recipe.servings} servings
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-emerald-100 to-orange-100 text-orange-700 border-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 hover:from-emerald-600 hover:via-orange-600 hover:to-red-600 shadow-md"
                  >
                    <Link
                      href={`/recipes/${recipe.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`}
                    >
                      View Recipe
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 shadow-sm bg-white/80 backdrop-blur-sm"
              asChild
            >
              <Link href="/recipes">View All Recipe Books</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='b' patternUnits='userSpaceOnUse' width='40' height='40'%3e%3ccircle cx='20' cy='20' r='1' fill='white' fillOpacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23b)'/%3e%3c/svg%3e")`,
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Start Your Healthy Journey Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who have transformed their relationship with food and health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
                Download App
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='c' patternUnits='userSpaceOnUse' width='30' height='30'%3e%3ccircle cx='15' cy='15' r='1' fill='white' fillOpacity='0.05'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23c)'/%3e%3c/svg%3e")`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 rounded-full shadow-lg"></div>
                <span className="text-2xl font-bold">zaikaBalance</span>
              </div>
              <p className="text-gray-400">
                Balancing taste and health through authentic Indian cuisine and modern nutrition science.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>BMI Calculator</li>
                <li>Nutrient Tracker</li>
                <li>Food Database</li>
                <li>Diet Plans</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Recipes</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Breakfast</li>
                <li>Lunch & Dinner</li>
                <li>Snacks</li>
                <li>Beverages</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 zaikaBalance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
