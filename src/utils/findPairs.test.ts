import findPairs from '.';

test('returns correct pairs of numbers', () => {
    expect(findPairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 12)).toEqual([[0, 12], [-4, 16], [5, 7]])
});
