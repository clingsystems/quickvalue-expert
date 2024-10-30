import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Fleet Manager",
    company: "EcoTransit Solutions",
    image: "https://i.pravatar.cc/150?img=1",
    review: "BatteryValue helped us maximize the value of our decommissioned EV fleet batteries. The instant valuation feature saved us weeks of market research.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Operations Director",
    company: "GreenTech Mobility",
    image: "https://i.pravatar.cc/150?img=2",
    review: "The real-time market data integration gives us confidence we're getting the best value for our battery inventory. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Sustainability Lead",
    company: "Urban Transport Co",
    image: "https://i.pravatar.cc/150?img=3",
    review: "The platform's network of verified recyclers made the entire process seamless. We've significantly improved our battery end-of-life management.",
    rating: 5
  }
];

const CustomerReviews = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.image} alt={review.name} />
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.role}</div>
                    <div className="text-sm text-gray-500">{review.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">{review.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;