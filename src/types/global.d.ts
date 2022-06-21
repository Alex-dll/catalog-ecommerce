interface DataProps {
  title: string;
  description: string;
  available: boolean;
  image: string;
  price: number;
}

interface NewProduct {
  id: string;
  title: string;
  description: string;
  available: boolean;
  image: string;
  price: number;
}

type NewProducts = Array<NewProduct>;