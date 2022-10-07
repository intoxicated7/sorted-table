export const filteredItems = (items, search) => {
  return items.filter((item) => {
    let quantityString = String(item.quantity)

    if(search === '') {
      return item
    } 
    else {
      return item.name?.toLowerCase().includes(search) || 
            quantityString?.includes(search) || 
            item.distance?.includes(search)
    }
  })
}