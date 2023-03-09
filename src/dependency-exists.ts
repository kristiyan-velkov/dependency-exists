import { readFileSync } from 'fs';
import path from "path";
import { DependenciesConfig } from './types.js';

const defaultDependenciesConfig: DependenciesConfig = {
    dependencies: true,
    devDependencies: true,
    peerDependencies: true
}

export const dependencyExists = (packageName: string, dependenciesConfig: DependenciesConfig = defaultDependenciesConfig): boolean => {
    const { dependencies, devDependencies, peerDependencies } = dependenciesConfig;

    if (!packageName) {
        throw new Error('Please, provide packageName.');
    }

    const packageFilePath = path.dirname("");
    const data = readFileSync(`${packageFilePath}/package.json`, "utf8");
    let dependenciesList: string[] = [];

    if (data) {
        let packageJson = JSON.parse(data);

        if (packageJson.dependencies && dependencies) {
            dependenciesList.push(...Object.keys(packageJson.dependencies));
        }
        if (packageJson.devDependencies && devDependencies) {
            dependenciesList.push(...Object.keys(packageJson.devDependencies));
        }
        if (packageJson.peerDependencies && peerDependencies) {
            dependenciesList.push(...Object.keys(packageJson.peerDependencies));
        }
    }

    return dependenciesList.includes(packageName);
}