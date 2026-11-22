import { Routes } from '@angular/router';
import { Cookbook } from './components/cookbook/cookbook';
import { LandingPage } from './components/landing-page/landing-page';
import { Preferences } from './components/preferences/preferences';
import { RecipeView } from './components/recipe-view/recipe-view';
import { Recipes } from './components/recipes/recipes';
import { Errorpage } from './components/errorpage/errorpage';
import { GenerateRecipe } from './components/generate-recipe/generate-recipe';

export const routes: Routes = [
    {path: '', component:LandingPage},
    {path: 'preferences', component:Preferences},
    {path: 'cookbook', component:Cookbook},
    {path: 'recipe-view/:recipeName', component:RecipeView},
    {path: 'recipes/:cuisineType', component:Recipes},
    {path: 'generate', component:GenerateRecipe},
    
    {path: '**', component:Errorpage}
];
