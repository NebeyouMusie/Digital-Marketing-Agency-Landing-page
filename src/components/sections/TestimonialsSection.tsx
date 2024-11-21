import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Smith",
    role: "Marketing Director",
    content: "The team at BrainBoost has transformed our digital presence. Their strategic approach and creative solutions have driven remarkable results.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "John Davis",
    role: "CEO",
    content: "Outstanding service and exceptional results. They truly understand digital marketing and deliver beyond expectations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Business Owner",
    content: "Working with BrainBoost has been a game-changer for our business. Their expertise and dedication are unmatched.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">
          What Clients Say!
        </h2>
        <div className="relative max-w-3xl mx-auto animate-fadeIn">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="bg-white p-8 rounded-lg shadow-lg mx-4 h-[300px] flex flex-col">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">{testimonial.content}</p>
                    <div className="flex text-yellow-400 mt-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-4 lg:-left-12 top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="absolute -right-4 lg:-right-12 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="md:hidden flex justify-center gap-4 mt-4">
              <CarouselPrevious className="position-static transform-none" />
              <CarouselNext className="position-static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;