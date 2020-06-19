import $ from "jquery"

export default function() {
  $(`.js-close-popup`).click((e) => {
    const popup = $(e.target).parents(`.popup`)
    popup.css(
      { display: `none` }
    )
    $(`body`).css({ overflow: `visible` })
  })
  $(`.js-order`).click(() => {
    const screenTop = $(document).scrollTop()
    const popup = $(`.js-popup-form`)
    popup.css(
      { display: `flex`, top: screenTop }
    )
    $(`body`).css({ overflow: `hidden` })
  })
}