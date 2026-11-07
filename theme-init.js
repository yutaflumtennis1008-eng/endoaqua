// 表示モード（src/app/theme.ts と同じキー）を、画面を描く前に反映してちらつきを防ぐ
try {
  var t = localStorage.getItem('endoaqua-theme')
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t
  // アクアリウムの動き（src/app/motion.ts と同じキー）
  if (localStorage.getItem('endoaqua-aqua-motion') === 'off') document.documentElement.dataset.aquaMotion = 'off'
} catch (e) {
  // localStorage が使えない環境では端末の設定に従う
}
