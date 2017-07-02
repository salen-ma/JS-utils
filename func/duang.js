let duang = (current, target) => {
  let currentRect = current.getBoundingClientRect()
  let targetRect = target.getBoundingClientRect()

  let currentLeft = currentRect.left, 
      currentTop = currentRect.top,
      currentRight = currentRect.right,
      currentBottom = currentRect.bottom

  let targetLeft = targetRect.left, 
      targetTop = targetRect.top,
      targetRight = targetRect.right,
      targetBottom = targetRect.bottom
  return currentRight > targetLeft && currentBottom > targetTop && currentLeft < targetRight && currentTop < targetBottom
}