import React, {ReactNode} from "react";

export interface BlockProps {
    heading: string | React.ReactNode;
    id: string;
    children?: JSX.Element;
}

export interface BaseProductProps {
    picture: string;
    name: string;
    id: number;
    price: number;
    isSale: boolean;
}

export interface ProductCardProps extends BaseProductProps {
    manufacturer: string;
    description: string;
    reviews: ReviewType;
}

export interface ProductCardCatalogProps {
    product: ProductCardProps;
    clickName?: () => void;
}

interface ReviewType {
    author: string;
    text: string;
}

export interface ReviewProps {
    name: string;
    text: string;
}

export enum SelectedPage {
    Category = "Category",
    Subcategory = "Subcategory",
    Products = "Products",
    Product = "Product",
}

export enum SelectedSection {
    Reviews = "Reviews",
    Description = "Description",
}

export interface CategoryType {
    name: string;
    ID: string;
    subcategories: SubcategoryType[];
}

export interface SubcategoryType {
    name: string;
    ID: string;
    items: ProductCardProps[];
}

export interface BasketPropsType {
    isOpen: boolean;
    closeModal: () => void;
}

export interface FormControlProps {
    children: ReactNode;
    label: string;
}