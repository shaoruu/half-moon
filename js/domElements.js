// const errorDOM = document.getElementById('error')

const w0DOM = document.getElementById('w0')
const w1DOM = document.getElementById('w1')
const w2DOM = document.getElementById('w2')

// const randomizeDOM = document.getElementById('randomize')
// randomizeDOM.addEventListener(
//   'click',
//   () => {
//     perceptron.randomizeWeights()
//     visualizer.forceLine()
//   },
//   false
// )

const radius1DOM = document.getElementById('radius1')
const radius2DOM = document.getElementById('radius2')
const distanceDOM = document.getElementById('distance')

radius1DOM.addEventListener('change', ({ target: { value } }) => {
  RADIUS_RANGE[0] = Number(value)
})

radius2DOM.addEventListener('change', ({ target: { value } }) => {
  RADIUS_RANGE[1] = Number(value)
})

distanceDOM.addEventListener('change', ({ target: { value } }) => {
  DISTANCE = Number(value)
})

RADIUS_RANGE[0] = Number(radius1DOM.value)
RADIUS_RANGE[1] = Number(radius2DOM.value)
DISTANCE = Number(distanceDOM.value)