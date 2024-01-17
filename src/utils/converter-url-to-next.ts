export function convertUrlToNext(src : string ) {
  return `/${src.split('/')[3].split('.')[0].concat('.png')}`
}