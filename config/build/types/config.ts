
export type BuildMode = 'production' | 'development'


export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
}

export interface BuildOption {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}