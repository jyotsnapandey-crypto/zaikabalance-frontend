import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Users, Search, BookOpen, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Extended recipe data for the all recipes page
const allRecipes = [
  // Original 6 recipes
  {
    id: "quinoa-khichdi-bowl",
    title: "Quinoa Khichdi Bowl",
    description: "A protein-rich twist on traditional khichdi with quinoa, moong dal, and vegetables",
    image: "/images/quinoa-khichdi.jpg",
    time: "25 mins",
    servings: "4",
    calories: "320",
    tags: ["High Protein", "Gluten Free"],
    category: "lunch",
    featured: true,
  },
  {
    id: "spinach-paneer-curry",
    title: "Spinach Paneer Curry",
    description: "Creamy palak paneer made with fresh spinach and homemade cottage cheese",
    image: "/images/spinach-paneer.jpg",
    time: "30 mins",
    servings: "3",
    calories: "280",
    tags: ["Vegetarian", "Iron Rich"],
    category: "dinner",
    featured: true,
  },
  {
    id: "masala-oats-upma",
    title: "Masala Oats Upma",
    description: "Healthy breakfast option with steel-cut oats, vegetables, and aromatic spices",
    image: "/images/masala-oats.jpg",
    time: "15 mins",
    servings: "2",
    calories: "250",
    tags: ["High Fiber", "Low Fat"],
    category: "breakfast",
    featured: true,
  },
  {
    id: "chickpea-tikka-masala",
    title: "Chickpea Tikka Masala",
    description: "Plant-based protein powerhouse with chickpeas in rich tomato-based gravy",
    image: "/images/chickpea-tikka.jpg",
    time: "35 mins",
    servings: "4",
    calories: "290",
    tags: ["Vegan", "High Protein"],
    category: "dinner",
    featured: true,
  },
  {
    id: "millet-biryani",
    title: "Millet Biryani",
    description: "Nutritious biryani made with finger millet, vegetables, and fragrant basmati rice",
    image: "/images/millet-biryani.jpg",
    time: "45 mins",
    servings: "6",
    calories: "340",
    tags: ["Whole Grain", "Balanced"],
    category: "lunch",
    featured: true,
  },
  {
    id: "turmeric-lentil-soup",
    title: "Turmeric Lentil Soup",
    description: "Healing dal soup with turmeric, ginger, and mixed lentils for immunity boost",
    image: "/images/turmeric-lentil.jpg",
    time: "20 mins",
    servings: "4",
    calories: "200",
    tags: ["Anti-inflammatory", "Immunity"],
    category: "soup",
    featured: true,
  },

  // Additional recipes
  {
    id: "ragi-dosa",
    title: "Ragi Dosa",
    description: "Crispy finger millet crepes packed with calcium and iron for a nutritious breakfast",
    image: "/images/healthy-bowl.jpg",
    time: "20 mins",
    servings: "4",
    calories: "180",
    tags: ["Calcium Rich", "Gluten Free"],
    category: "breakfast",
    featured: false,
  },
  {
    id: "beetroot-paratha",
    title: "Beetroot Paratha",
    description: "Whole wheat flatbreads stuffed with spiced beetroot for a colorful, nutritious meal",
    image: "/images/healthy-bowl.jpg",
    time: "30 mins",
    servings: "4",
    calories: "220",
    tags: ["Iron Rich", "Vegetarian"],
    category: "breakfast",
    featured: false,
  },
  {
    id: "moong-dal-chilla",
    title: "Moong Dal Chilla",
    description: "Protein-packed savory pancakes made from split yellow mung beans",
    image: "/images/healthy-bowl.jpg",
    time: "15 mins",
    servings: "3",
    calories: "190",
    tags: ["High Protein", "Low Fat"],
    category: "breakfast",
    featured: false,
  },
  {
    id: "vegetable-poha",
    title: "Vegetable Poha",
    description: "Flattened rice stir-fried with vegetables and spices for a quick, light meal",
    image: "/images/healthy-bowl.jpg",
    time: "15 mins",
    servings: "2",
    calories: "210",
    tags: ["Quick", "Low Calorie"],
    category: "breakfast",
    featured: false,
  },
  {
    id: "rajma-masala",
    title: "Rajma Masala",
    description: "Kidney beans in a rich tomato gravy with aromatic spices, high in plant protein",
    image: "/images/healthy-bowl.jpg",
    time: "40 mins",
    servings: "4",
    calories: "310",
    tags: ["High Protein", "Fiber Rich"],
    category: "lunch",
    featured: false,
  },
  {
    id: "brown-rice-pulao",
    title: "Brown Rice Pulao",
    description: "Fragrant brown rice cooked with mixed vegetables and whole spices",
    image: "/images/healthy-bowl.jpg",
    time: "30 mins",
    servings: "4",
    calories: "280",
    tags: ["Whole Grain", "Fiber Rich"],
    category: "lunch",
    featured: false,
  },
  {
    id: "mixed-sprouts-curry",
    title: "Mixed Sprouts Curry",
    description: "Protein-rich sprouted legumes in a flavorful, spiced tomato gravy",
    image: "/images/healthy-bowl.jpg",
    time: "25 mins",
    servings: "4",
    calories: "240",
    tags: ["High Protein", "Vegan"],
    category: "lunch",
    featured: false,
  },
  {
    id: "lauki-kofta-curry",
    title: "Lauki Kofta Curry",
    description: "Bottle gourd dumplings in a creamy, spiced gravy - a low-calorie comfort food",
    image: "/images/healthy-bowl.jpg",
    time: "45 mins",
    servings: "4",
    calories: "260",
    tags: ["Low Calorie", "Vegetarian"],
    category: "dinner",
    featured: false,
  },
  {
    id: "baked-vegetable-cutlets",
    title: "Baked Vegetable Cutlets",
    description: "Crispy mixed vegetable patties baked instead of fried for a healthier option",
    image: "/images/healthy-bowl.jpg",
    time: "35 mins",
    servings: "4",
    calories: "180",
    tags: ["Low Fat", "Baked"],
    category: "snack",
    featured: false,
  },
  {
    id: "jowar-roti",
    title: "Jowar Roti",
    description: "Gluten-free flatbreads made from sorghum flour, rich in minerals and fiber",
    image: "/images/healthy-bowl.jpg",
    time: "20 mins",
    servings: "4",
    calories: "150",
    tags: ["Gluten Free", "Whole Grain"],
    category: "bread",
    featured: false,
  },
  {
    id: "cucumber-raita",
    title: "Cucumber Raita",
    description: "Cooling yogurt dip with cucumber, mint, and spices - perfect for digestion",
    image: "/images/healthy-bowl.jpg",
    time: "10 mins",
    servings: "4",
    calories: "90",
    tags: ["Probiotic", "Low Calorie"],
    category: "side",
    featured: false,
  },
  {
    id: "tomato-rasam",
    title: "Tomato Rasam",
    description: "Tangy South Indian soup with tomatoes, tamarind, and healing spices",
    image: "/images/healthy-bowl.jpg",
    time: "20 mins",
    servings: "4",
    calories: "110",
    tags: ["Immunity", "Digestive Health"],
    category: "soup",
    featured: false,
  },
]

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-orange-100/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 rounded-full shadow-lg"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
                zaikaBalance
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-orange-100 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">Recipe Collection</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nutritious Indian Recipe Books</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete collection of healthy, authentic Indian recipes crafted by nutrition experts to balance
            taste and wellness.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-md">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search recipes..."
                className="pl-10 bg-white/90 border-orange-100 focus:border-orange-300"
              />
            </div>
            <Select>
              <SelectTrigger className="bg-white/90 border-orange-100 focus:border-orange-300">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                  <SelectItem value="snack">Snacks</SelectItem>
                  <SelectItem value="soup">Soups</SelectItem>
                  <SelectItem value="side">Side Dishes</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="bg-white/90 border-orange-100 focus:border-orange-300">
                <SelectValue placeholder="Filter by dietary needs" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Dietary Needs</SelectLabel>
                  <SelectItem value="all">All Diets</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="gluten-free">Gluten Free</SelectItem>
                  <SelectItem value="high-protein">High Protein</SelectItem>
                  <SelectItem value="low-calorie">Low Calorie</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Recipe Categories */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-white/80 backdrop-blur-sm border border-orange-100/50 p-1 mb-6">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r from-emerald-500 to-orange-500 data-[state=active]:text-white"
            >
              All Recipes
            </TabsTrigger>
            <TabsTrigger
              value="breakfast"
              className="data-[state=active]:bg-gradient-to-r from-emerald-500 to-orange-500 data-[state=active]:text-white"
            >
              Breakfast
            </TabsTrigger>
            <TabsTrigger
              value="lunch"
              className="data-[state=active]:bg-gradient-to-r from-emerald-500 to-orange-500 data-[state=active]:text-white"
            >
              Lunch
            </TabsTrigger>
            <TabsTrigger
              value="dinner"
              className="data-[state=active]:bg-gradient-to-r from-emerald-500 to-orange-500 data-[state=active]:text-white"
            >
              Dinner
            </TabsTrigger>
            <TabsTrigger
              value="snack"
              className="data-[state=active]:bg-gradient-to-r from-emerald-500 to-orange-500 data-[state=active]:text-white"
            >
              Snacks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRecipes.map((recipe) => (
                <Card
                  key={recipe.id}
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
                    {recipe.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                        Featured
                      </div>
                    )}
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
                      <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="breakfast" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRecipes
                .filter((recipe) => recipe.category === "breakfast")
                .map((recipe) => (
                  <Card
                    key={recipe.id}
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
                        <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Similar TabsContent for lunch, dinner, snack categories */}
          <TabsContent value="lunch" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRecipes
                .filter((recipe) => recipe.category === "lunch")
                .map((recipe) => (
                  <Card
                    key={recipe.id}
                    className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/20"
                  >
                    {/* Card content same as above */}
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
                        <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="dinner" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRecipes
                .filter((recipe) => recipe.category === "dinner")
                .map((recipe) => (
                  <Card
                    key={recipe.id}
                    className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/20"
                  >
                    {/* Card content same as above */}
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
                        <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="snack" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRecipes
                .filter((recipe) => recipe.category === "snack")
                .map((recipe) => (
                  <Card
                    key={recipe.id}
                    className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/20"
                  >
                    {/* Card content same as above */}
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
                        <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Recipe Collections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <ChefHat className="w-5 h-5 text-orange-600" />
            Featured Recipe Collections
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/20">
              <div className="relative h-40">
                <Image src="/images/healthy-bowl.jpg" alt="Breakfast Collection" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">Breakfast Essentials</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-gray-600 mb-4">Start your day with nutritious Indian breakfast recipes</p>
                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                  asChild
                >
                  <Link href="/recipes?category=breakfast">View Collection</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/20">
              <div className="relative h-40">
                <Image src="/images/healthy-bowl.jpg" alt="High Protein Collection" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">High Protein Meals</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-gray-600 mb-4">Protein-packed recipes for muscle building and recovery</p>
                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                  asChild
                >
                  <Link href="/recipes?diet=high-protein">View Collection</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/20">
              <div className="relative h-40">
                <Image src="/images/healthy-bowl.jpg" alt="Quick Meals Collection" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">Quick & Easy Meals</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-gray-600 mb-4">Healthy recipes ready in under 30 minutes for busy days</p>
                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                  asChild
                >
                  <Link href="/recipes?time=quick">View Collection</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='c' patternUnits='userSpaceOnUse' width='30' height='30'%3e%3ccircle cx='15' cy='15' r='1' fill='white' fillOpacity='0.05'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23c)'/%3e%3c/svg%3e")`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="container mx-auto px-4 relative text-center">
          <p>&copy; 2024 zaikaBalance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
