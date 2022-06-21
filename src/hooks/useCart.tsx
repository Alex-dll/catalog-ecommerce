import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getProductById } from "../utils/http";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: NewProducts;
  addProduct: (productId: string) => Promise<void>;
  removeProduct: (productId: string) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<NewProducts>(() => {
    return [];
  });

  const addProduct = async (productId: string) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId
      );

      if (!productExists) {
        const product = await getProductById(productId);

        updatedCart.push(product);
      }

      setCart(updatedCart);
      toast.success("Produto adicionado ao carrinho 🙂", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch {
      toast.error("Erro na adição do produto", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const removeProduct = (productId: string) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        toast.success("Produto removido do carrinho 🙂", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na remoção do produto", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
