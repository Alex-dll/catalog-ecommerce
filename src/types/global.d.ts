interface DataProps {
  title: string;
  description: string;
  available: boolean;
  image: string;
  price: number;
}

interface NewProduct {
  id?: string;
  title: string;
  description: string;
  available: number;
  image: string;
  price: number;
}

type NewProducts = Array<NewProduct>;

interface Category {
  id: string;
  name: string;
  description: string;
}

type Categories = Array<Category>;
