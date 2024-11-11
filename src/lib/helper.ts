export const isValidUrl = (string:string) => {
  try {
    const url = new URL(string);
  } catch (error) {
    return false;
  }
  return true;
};

// export const merge = (
//   a: any,
//   b: any,
//   predicate = (a: any, b: any) => a === b
// ) => {
//   const c = [...a]; // copy to avoid side effects
//   // add all items from B to copy C if they're not already present
//   b.forEach((bItem: any) =>
//     c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)
//   );
//   return c;
// };

export function merge(a:any, b:any, prop?:any) {
  var reduced = a.filter(function(aitem:any) {
    return !b.find(function(bitem:any) {
      return aitem[prop] === bitem[prop];
    });
  });
  return reduced.concat(b);
}