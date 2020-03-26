export const formatCurrency = num => {
  return num
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
