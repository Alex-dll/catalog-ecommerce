import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { setCookie, parseCookies } from "nookies";
import queryClient from "utils/queryClient";

interface CartProviderProps {
  children: ReactNode;
}

type productId = string;

type ProductsIds = Array<productId>;

interface CartContextData {
  cart: ProductsIds;
  addProduct: (productId: string) => Promise<void>;
  removeProduct: (productId: string) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const cookies = parseCookies();
  const [cart, setCart] = useState<ProductsIds>([]);

  let [verifyCookies, setVerifyCookies] = useState(true);

  useEffect(() => {
    if (verifyCookies) {
      if (cookies) {
        let updatedCookies = cookies.CATALOG_USER_CART;
        setCart(updatedCookies ? JSON.parse(cookies.CATALOG_USER_CART) : []);
      }
      setVerifyCookies(false);
    }
  }, [verifyCookies, cookies]);

  const addProduct = async (productId: string) => {
    try {
      const newCart = [...cart];

      const item = newCart.find((product) => product === productId);

      if (!item) {
        newCart.push(productId);
      }

      setCart(newCart);

      setCookie(null, `CATALOG_USER_CART`, JSON.stringify(newCart), {
        maxAge: 86400, // one day in seconds
        path: "/",
      });

      setVerifyCookies(true);

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
      const OldCart = [...cart];

      const UpdatedCart = OldCart.filter((product) => product !== productId);

      if (UpdatedCart) {
        setCart(UpdatedCart);

        setVerifyCookies(true);

        setCookie(null, `CATALOG_USER_CART`, JSON.stringify(UpdatedCart), {
          maxAge: 86400, // one day in seconds
          path: "/",
        });

        setVerifyCookies(true);

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
