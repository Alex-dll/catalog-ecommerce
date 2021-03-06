import { AxiosResponse } from "axios";
import { CompanyProps, CatalogAtCompanyProps } from "../../types";
import { http } from "./axiosBase";

interface CatalogAtCompanyRequestProps {
  companyId: string;
  maxItemsPage: number;
  pageNumber: number;
}

export function getCompany(companyId: string): Promise<CompanyProps> {
  return http
    .get<CompanyProps>(`/Company/${companyId}`)
    .then(({ data }: AxiosResponse<CompanyProps>) => data);
}

export function getCatalog({
  companyId,
  maxItemsPage,
  pageNumber,
}: CatalogAtCompanyRequestProps): Promise<CatalogAtCompanyProps> {
  return http
    .get<CatalogAtCompanyProps>(
      `/Catalog/Company/${companyId}/${maxItemsPage}/${pageNumber}`
    )
    .then(({ data }: AxiosResponse<CatalogAtCompanyProps>) => data);
}

export function getCategories(companyId: string): Promise<Categories> {
  return http
    .get<Categories>(`/CompanyProduct/${companyId}/Categories`)
    .then(({ data }: AxiosResponse<Categories>) => data);
}

export function getCategoryById(categoryId: string): Promise<Category> {
  return http
    .get<Category>(`/ProductCategory/${categoryId}`)
    .then(({ data }: AxiosResponse<Category>) => data);
}

export function createCategory(category: newCategory): Promise<NewProduct> {
  return http
    .post<NewProduct>(`/ProductCategory/Company`, category)
    .then(({ data }: AxiosResponse<NewProduct>) => data);
}

export function updateCategory(category: Category): Promise<Category> {
  return http
    .put<Category>(`/ProductCategory`, category)
    .then(({ data }: AxiosResponse<Category>) => data);
}

export function deleteCategory(categoryId: string): Promise<void> {
  return http
    .delete<void>(`ProductCategory/${categoryId}`)
    .then(({ data }: AxiosResponse<void>) => data);
}

export function getProducts(productIds: string[]): Promise<NewProducts> {
  return http
    .post<NewProducts>(`/Product/Various/Details/`, productIds)
    .then(({ data }: AxiosResponse<NewProducts>) => data);
}

export function getProductById(productId: string): Promise<NewProduct> {
  return http
    .get<NewProduct>(`/Product/${productId}`)
    .then(({ data }: AxiosResponse<NewProduct>) => data);
}

export function updateProductAvailableById(
  productId: string,
  available: number
): Promise<any> {
  return http
    .patch<any>(`/Product/${productId}/Avalible/${available}`)
    .then(({ data }: AxiosResponse<any>) => data);
}

export function createProduct(product: NewProduct): Promise<NewProduct> {
  return http
    .post<NewProduct>(`/Product/Company`, product)
    .then(({ data }: AxiosResponse<NewProduct>) => data);
}

export function updateProduct(product: NewProduct): Promise<NewProduct> {
  return http
    .put<NewProduct>(`/Product`, product)
    .then(({ data }: AxiosResponse<NewProduct>) => data);
}

export function deleteProduct(id: string): Promise<void> {
  return http
    .delete<void>(`/Product/${id}`)
    .then(({ data }: AxiosResponse<void>) => data);
}
