import { DependenciesConfig, DependencyExistsWithTextOptions } from './types';
declare module '@kv/dependency-exists' {
    export function dependencyExists(packageName: string, dependenciesConfig?: DependenciesConfig): boolean;
    export function DependencyExistsWithTextOptions(packageName: string, options: DependencyExistsWithTextOptions): boolean;
}
