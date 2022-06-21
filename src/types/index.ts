export interface CompanyProps {
  id: string;
  createdAt: string,
  corporateId: string,
  corporateName: string,
  corporateNameId: string,
  companyCategoryId: string,
  companyCategory: {
    id: string,
    createdAt: string,
    name: string,
    description: string
  }
}

export interface CatalogAtCompanyProps {
  userId: string,
  companyId: string,
  pagesDetail: {
    maxItemsPage: number,
    pageNumbers: [
      page: number,
    ],
    pageNumberSelected: number,
    totalProductFound: number,
  },
  productIds: [
    productId: string,
  ],
  errors: []
}
