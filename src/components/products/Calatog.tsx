import React, {useCallback, useMemo, useState, Suspense} from 'react';
import Block from "../body_block/Block";
import {CategoryType, ProductCardProps, SelectedPage, SubcategoryType} from "../../types/componentsTypes";
import {StyledCategory, StyledHeading} from "./styled";
import ProductCard from "./product_card/ProductCard";
import {ProductsContainer, StyledHeadingBlack} from "../helpers";
import {Button} from "../../controls/button/Button";
import {Loader} from "../loader/Loader";

const ProductPage = React.lazy(() => import("./product_page/ProductPage"));
const CatalogContainer = React.lazy(() => import("./CatalogContainer"));

const Catalog = (): JSX.Element => {
    /* STATE */
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Category);
    const [categories, setCategories] = React.useState<CategoryType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>();
    const [selectedSubcategory, setSelectedSubcategory] = useState<SubcategoryType>();
    const [selectedProduct, setSelectedProduct] = useState<ProductCardProps>();
    /* CALLBACK */
    const selectCategory = useCallback(
        (category: CategoryType) => {
            setSelectedCategory(category);
            setSelectedPage(SelectedPage.Subcategory);
        }, [],
    );
    const selectSubcategory = useCallback(
        (subcategory: SubcategoryType) => {
            setSelectedSubcategory(subcategory);
            setSelectedPage(SelectedPage.Products);
        }, [],
    );
    const selectProduct = useCallback(
        (product: ProductCardProps) => {
            setSelectedProduct(product);
            setSelectedPage(SelectedPage.Product);
        }, [],
    );
    const backToCategories = useCallback(
        () => {
            setSelectedPage(SelectedPage.Category);
        }, [],
    );
    const backToSubcategories = useCallback(
        () => {
            setSelectedPage(SelectedPage.Subcategory);
        }, [],
    );
    const backToProducts = useCallback(
        () => {
            setSelectedPage(SelectedPage.Products);
        }, [],
    );

    /* EFFECT */
    React.useEffect(() => {
        import("../../mocks/mock.json").then(data => {
            setCategories(data.default);
        });
    },[]);

    /* MEMO */
    const heading = useMemo((): React.ReactNode | string => {
        switch (selectedPage) {
            case SelectedPage.Category:
                return "?????????????????? ??????????????"
            case SelectedPage.Subcategory:
                return <StyledHeading>
                    <Button appearance="medium" onClick={backToCategories}>??????????</Button>
                    <span>{selectedCategory?.name}</span>
                </StyledHeading>
            case SelectedPage.Products:
                return <StyledHeading>
                    <Button appearance="medium" onClick={backToSubcategories}>??????????</Button>
                    <span>{selectedSubcategory?.name}</span>
                </StyledHeading>
            case SelectedPage.Product:
                return <StyledHeading>
                    <Button appearance="medium" onClick={backToProducts}>??????????</Button>
                </StyledHeading>
        }
    }, [selectedPage, selectedCategory, selectedSubcategory, selectedProduct]);

    const page = useMemo((): React.ReactElement => {
        switch (selectedPage) {
            case SelectedPage.Category:
                return <CatalogContainer>
                    {categories.map((category) => (
                        <StyledCategory
                            key={category.ID}
                            onClick={() => selectCategory(category)}>
                            {category.name}
                        </StyledCategory>
                    ))}
                </CatalogContainer>
            case SelectedPage.Subcategory:
                return <CatalogContainer>
                    {selectedCategory?.subcategories.map((subcategory) => (
                        <StyledCategory
                            key={subcategory.ID}
                            onClick={() => selectSubcategory(subcategory)}>
                            {subcategory.name}
                        </StyledCategory>
                    ))}
                </CatalogContainer>
            case SelectedPage.Products:
                return <ProductsContainer>
                    {
                        selectedSubcategory?.items.length
                            ? selectedSubcategory?.items.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    product={item}
                                    clickName={() => selectProduct(item)}/>
                            ))
                            :
                            <StyledHeadingBlack>?????????????? ??????</StyledHeadingBlack>
                    }
                </ProductsContainer>
            case SelectedPage.Product:
                return <ProductPage {...selectedProduct as ProductCardProps}/>
        }
    }, [
        selectedPage,
        setSelectedPage,
        setSelectedCategory,
        selectedCategory,
        setSelectedSubcategory,
        selectedSubcategory,
        setSelectedProduct,
        selectedProduct,
        categories,
    ]);
    return (
        <Block id="catalog" heading={heading}>
            <Suspense fallback={<Loader/>}>
                {page}
            </Suspense>
        </Block>
    );
};

export default Catalog;
