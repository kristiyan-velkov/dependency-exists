export interface DependenciesConfig {
    dependencies: boolean;
    devDependencies: boolean;
    peerDependencies: boolean;
}

export interface TextColors {
    success: DefaultColorsEnum.success;
    error: DefaultColorsEnum.error;
    warn: DefaultColorsEnum.warn;
    info: DefaultColorsEnum.info;
}

export enum DefaultColorsEnum {
    success = "#008000",
    error = "#DC143C",
    warn = "#FFD700",
    info = "#00FFFF",
}

export interface DependencyExistsWithTextOptions {
    success: DependencyExistsWithTextOption;
    error: DependencyExistsWithTextOption;
}

interface DependencyExistsWithTextOption {
    color?: string | DefaultColorsEnum.success | DefaultColorsEnum.error | DefaultColorsEnum.info | DefaultColorsEnum.warn,
    text: string,
    warn?: TextOptionsStructure;
    info?: TextOptionsStructure;
}

interface TextOptionsStructure {
    color?: string | DefaultColorsEnum.success | DefaultColorsEnum.error | DefaultColorsEnum.info | DefaultColorsEnum.warn;
    text?: string;
}

declare const dependencyExists: (packageName: string, dependenciesConfig?: DependenciesConfig) => boolean;
declare const dependencyExistsWithText: (packageName: string, options: DependencyExistsWithTextOptions) => boolean;

export { dependencyExists, dependencyExistsWithText };