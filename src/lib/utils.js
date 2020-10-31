import values from "../../node_modules/lodash/values"

export const formatCurrency = num => {
  return Number(num)
    .toFixed(2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export const capitalize = text => {
  const textArr = text.split(" ")
  return textArr
    .map(
      item => `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`
    )
    .join(" ")
}

export const extractTerminalName = (terminals, id) => {
  if (!terminals.length) return null
  //return capitalize(terminals.filter(item => item.id === id)[0].Name);
  var termi = terminals.find(item => item.id === id)
  return termi.name
}

export const randomItemFromArray = arr => {
  let randomIndex = 0
  if (arr.length) randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export const emptyObjProps = (obj = {}) => {
  return values(obj).filter(item => !item)
}
