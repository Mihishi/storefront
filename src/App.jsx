import { Button } from "@/components/ui/button";
import Hero from "./Hero";
import Navigation from "./Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"



function App() {
  const name = "Manupa";
  const cartCount = 2;
  

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <div className="p-4 w-96">
        <Card className="border-2">
          <CardHeader>
            <Badge className="w-fit">New</Badge>
            <CardTitle>Product Name</CardTitle>
            <CardDescription>Product Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Product Content</p>

             {/* 1 componenet */}
            <div > <div className="p-2 flex items-center space-x-2">
  <Checkbox />
  <p>Agree to the terms and conditions</p>
</div>
 {/* 2 componenet */}
<div><HoverCard>
  <HoverCardTrigger>Hi</HoverCardTrigger>
  <HoverCardContent>
   Hello World.
  </HoverCardContent>
</HoverCard>
</div>
 {/* 3 componenet */}
<div><div className="p-2"> <Input type="email" placeholder="Email" /></div> </div>

            </div>
          </CardContent>
          <CardFooter>            
            <Button>Buy Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default App;
