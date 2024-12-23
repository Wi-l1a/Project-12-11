import { CatalogPage } from "@/pages/CatalogPage"
import { DetailPage } from "@/pages/DetailPage"
import { MainPage } from "@/pages/MainPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { RouteProps } from "react-router-dom"


export enum AppRoutes {
    MAIN = 'main',
    CATALOG = 'catalog',
    DETAIL = 'detail',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CATALOG]: '/catalog/',
    [AppRoutes.DETAIL]: 'category/detail/',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.CATALOG]: {
        path: `${RoutePath.catalog}:category?`,
        element: <CatalogPage />
    },
    [AppRoutes.DETAIL]: {
        path: `:${RoutePath.detail}:id`,
        element: <DetailPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    },
}