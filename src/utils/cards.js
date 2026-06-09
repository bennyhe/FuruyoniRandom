const spStopsCards = ['re-08-hagane-o-n-1', 're-06-yukihi-o-s-3']
export function isShowStopIcon(item) {
  if (spStopsCards.includes(item.id) || (item.textjp && item.textjp.substr(0, 2) === '終端')) {
    return true
  }
  return false
}