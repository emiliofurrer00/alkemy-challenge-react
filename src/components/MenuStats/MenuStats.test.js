import { hasEnoughRecipesByDiet } from './utilities';

it('should return false when there are less than 2 vegan dishes', () => {
    const mockRecipesArray = [{vegan: false}, {vegan: true}, {vegan: false}];
    const result = hasEnoughRecipesByDiet(mockRecipesArray, 'vegan');

    expect(result).toEqual(false)
});
it('should return true when there are exactly 2 vegan dishes', () => {
    const mockRecipesArray = [{vegan: true}, {vegan: true}, {vegan: false}];
    const result = hasEnoughRecipesByDiet(mockRecipesArray, 'vegan');

    expect(result).toEqual(true)
});
it('should return false when there are less than 2 non-vegan dishes', () => {
    const mockRecipesArray = [{vegan: true}, {vegan: true}, {vegan: false}];
    const result = hasEnoughRecipesByDiet(mockRecipesArray, 'notVegan');

    expect(result).toEqual(false)
});
it('should return true when there are exactly 2 non-vegan dishes', () => {
    const mockRecipesArray = [{vegan: false}, {vegan: true}, {vegan: false}];
    const result = hasEnoughRecipesByDiet(mockRecipesArray, 'notVegan');

    expect(result).toEqual(true);
})