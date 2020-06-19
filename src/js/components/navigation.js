import $ from "jquery"

export function navigation() {
  const $moveTo = $(`.js-move-to`)
  $moveTo.on(`touchstart click`, (e) => {
    const $anchor = $(e.target)
    const scrollDest = $anchor.attr(`href`)
    if (scrollDest) {
      $(`html, body`).animate({
        scrollTop: $(scrollDest).offset().top - 20
      }, 1000)
    }
  })
}