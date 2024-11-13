import { CatalogPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"


export enum AppRoutes {
    MAIN = 'main',
    CATALOG = 'catalog',
    NOT_FOUND = 'not_found'
}

export const RoutePatch: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CATALOG]: '/catalog',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePatch.main,
        element: <MainPage />
    },
    [AppRoutes.CATALOG]: {
        path: RoutePatch.catalog,
        element: <CatalogPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePatch.not_found,
        element: <NotFoundPage />
    },
}