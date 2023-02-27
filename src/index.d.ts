declare module 'dependencyExists' {
    export function dependencyExists(packageName: string, dependenciesConfig: DependenciesConfig = {
        dependencies: true,
        devDependencies: true,
        peerDependencies: true
    }): boolean;
}



