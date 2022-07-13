interface NewProduct {
  id?: string;
  title: string;
  description: string;
  availableSalle?: number;
  image: string;
  price: number;
  category?: string;
}

type NewProducts = Array<NewProduct>;

interface Category {
  id: string;
  name: string;
  description: string;
}

type Categories = Array<Category>;

type newCategory = {
  name: string;
  description: string;
  companyId: string;
};
