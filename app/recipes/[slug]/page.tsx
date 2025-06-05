import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Users, ChefHat, Flame, Heart, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Recipe data - you can move this to a separate file or database later
const recipes = {
  "quinoa-khichdi-bowl": {
    title: "Quinoa Khichdi Bowl",
    description: "A protein-rich twist on traditional khichdi with quinoa, moong dal, and vegetables",
    image: "/images/quinoa-khichdi.jpg",
    time: "25 mins",
    servings: "4",
    calories: "320",
    difficulty: "Easy",
    tags: ["High Protein", "Gluten Free", "Vegetarian"],
    nutrition: {
      protein: "12g",
      carbs: "45g",
      fat: "8g",
      fiber: "6g",
    },
    ingredients: [
      { item: "Quinoa", amount: "1 cup", category: "grains" },
      { item: "Moong dal (yellow lentils)", amount: "1/2 cup", category: "protein" },
      { item: "Mixed vegetables (carrots, peas, beans)", amount: "1 cup", category: "vegetables" },
      { item: "Onion, finely chopped", amount: "1 medium", category: "vegetables" },
      { item: "Ginger-garlic paste", amount: "1 tbsp", category: "spices" },
      { item: "Turmeric powder", amount: "1/2 tsp", category: "spices" },
      { item: "Cumin seeds", amount: "1 tsp", category: "spices" },
      { item: "Ghee or oil", amount: "2 tbsp", category: "fats" },
      { item: "Salt", amount: "to taste", category: "seasoning" },
      { item: "Water", amount: "3 cups", category: "liquid" },
      { item: "Fresh coriander", amount: "2 tbsp", category: "herbs" },
    ],
    instructions: [
      {
        step: 1,
        title: "Prepare the base",
        description:
          "Wash quinoa and moong dal separately. Soak moong dal for 15 minutes. Heat ghee in a pressure cooker or heavy-bottomed pot.",
        time: "5 mins",
      },
      {
        step: 2,
        title: "Sauté aromatics",
        description:
          "Add cumin seeds and let them splutter. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and cook for 1 minute.",
        time: "4 mins",
      },
      {
        step: 3,
        title: "Add spices and vegetables",
        description:
          "Add turmeric powder and mixed vegetables. Sauté for 2-3 minutes until vegetables are slightly tender.",
        time: "3 mins",
      },
      {
        step: 4,
        title: "Cook quinoa and dal",
        description:
          "Add drained quinoa and moong dal. Mix well and sauté for 2 minutes. Add water and salt. Bring to a boil.",
        time: "3 mins",
      },
      {
        step: 5,
        title: "Pressure cook",
        description:
          "If using pressure cooker, cook for 2 whistles. If using regular pot, cover and simmer for 15-20 minutes until quinoa and dal are cooked.",
        time: "10 mins",
      },
      {
        step: 6,
        title: "Finish and serve",
        description:
          "Let pressure release naturally. Garnish with fresh coriander and serve hot with yogurt or pickle.",
        time: "2 mins",
      },
    ],
    tips: [
      "Rinse quinoa thoroughly to remove any bitter coating",
      "You can add any seasonal vegetables of your choice",
      "For extra flavor, add a bay leaf while cooking",
      "Serve with a dollop of ghee for enhanced taste",
    ],
    healthBenefits: [
      "High in complete protein from quinoa",
      "Rich in fiber for digestive health",
      "Contains essential amino acids",
      "Good source of iron and magnesium",
    ],
  },
  "spinach-paneer-curry": {
    title: "Spinach Paneer Curry",
    description: "Creamy palak paneer made with fresh spinach and homemade cottage cheese",
    image: "/images/spinach-paneer.jpg",
    time: "30 mins",
    servings: "3",
    calories: "280",
    difficulty: "Medium",
    tags: ["Vegetarian", "Iron Rich", "High Protein"],
    nutrition: {
      protein: "15g",
      carbs: "12g",
      fat: "18g",
      fiber: "4g",
    },
    ingredients: [
      { item: "Fresh spinach", amount: "500g", category: "vegetables" },
      { item: "Paneer (cottage cheese)", amount: "200g", category: "protein" },
      { item: "Onion, chopped", amount: "1 large", category: "vegetables" },
      { item: "Tomato, chopped", amount: "1 medium", category: "vegetables" },
      { item: "Ginger-garlic paste", amount: "1 tbsp", category: "spices" },
      { item: "Green chilies", amount: "2", category: "spices" },
      { item: "Cumin seeds", amount: "1 tsp", category: "spices" },
      { item: "Garam masala", amount: "1/2 tsp", category: "spices" },
      { item: "Heavy cream", amount: "2 tbsp", category: "dairy" },
      { item: "Oil", amount: "2 tbsp", category: "fats" },
      { item: "Salt", amount: "to taste", category: "seasoning" },
    ],
    instructions: [
      {
        step: 1,
        title: "Blanch spinach",
        description:
          "Boil water in a large pot. Add spinach leaves and blanch for 2 minutes. Immediately transfer to ice water to retain color. Drain and blend to a smooth puree.",
        time: "8 mins",
      },
      {
        step: 2,
        title: "Prepare paneer",
        description: "Cut paneer into cubes. Lightly fry in oil until golden on all sides. Set aside.",
        time: "5 mins",
      },
      {
        step: 3,
        title: "Make base gravy",
        description:
          "In the same pan, add cumin seeds. Add onions and sauté until golden. Add ginger-garlic paste and green chilies. Cook for 2 minutes.",
        time: "6 mins",
      },
      {
        step: 4,
        title: "Add tomatoes",
        description:
          "Add chopped tomatoes and cook until they break down and become mushy. Add garam masala and cook for 1 minute.",
        time: "5 mins",
      },
      {
        step: 5,
        title: "Combine and simmer",
        description:
          "Add spinach puree and mix well. Simmer for 5 minutes. Add fried paneer cubes and cream. Mix gently.",
        time: "6 mins",
      },
      {
        step: 6,
        title: "Final seasoning",
        description:
          "Season with salt and simmer for 2 more minutes. Garnish with cream and serve hot with roti or rice.",
        time: "2 mins",
      },
    ],
    tips: [
      "Don't overcook spinach to maintain vibrant green color",
      "Add a pinch of sugar to balance the slight bitterness of spinach",
      "For vegan version, replace paneer with tofu and cream with cashew cream",
    ],
    healthBenefits: [
      "Excellent source of iron and folate",
      "High in vitamin K for bone health",
      "Rich in antioxidants from spinach",
      "Good source of calcium from paneer",
    ],
  },
  // Add more recipes here...
}

interface RecipePageProps {
  params: {
    slug: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = recipes[params.slug as keyof typeof recipes]

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Recipe Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

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
        {/* Recipe Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src={recipe.image || "/images/healthy-bowl.jpg"}
              alt={recipe.title}
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
              <span className="text-sm font-semibold text-orange-600">{recipe.calories} cal</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{recipe.title}</h1>
              <p className="text-lg text-gray-600">{recipe.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gradient-to-r from-emerald-100 to-orange-100 text-orange-700"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                <Clock className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <div className="text-sm text-gray-600">Cook Time</div>
                <div className="font-semibold">{recipe.time}</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                <Users className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                <div className="text-sm text-gray-600">Servings</div>
                <div className="font-semibold">{recipe.servings}</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                <ChefHat className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="text-sm text-gray-600">Difficulty</div>
                <div className="font-semibold">{recipe.difficulty}</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                <Flame className="w-6 h-6 mx-auto mb-2 text-red-600" />
                <div className="text-sm text-gray-600">Calories</div>
                <div className="font-semibold">{recipe.calories}</div>
              </div>
            </div>

            {/* Nutrition Info */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Nutrition per serving
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{recipe.nutrition.protein}</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">{recipe.nutrition.carbs}</div>
                    <div className="text-sm text-gray-600">Carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{recipe.nutrition.fat}</div>
                    <div className="text-sm text-gray-600">Fat</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{recipe.nutrition.fiber}</div>
                    <div className="text-sm text-gray-600">Fiber</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-500" />
                  Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700">{ingredient.item}</span>
                      <span className="text-sm font-medium text-orange-600">{ingredient.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-orange-500" />
                  Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {instruction.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-800">{instruction.title}</h3>
                          <span className="text-sm text-gray-500">{instruction.time}</span>
                        </div>
                        <p className="text-gray-600">{instruction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips and Health Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Chef's Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    Health Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recipe.healthBenefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
