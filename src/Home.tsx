
const imgList = [
  'IMG_0043.png',
  'IMG_0052.png',
  'IMG_0320.png',
  'IMG_0913.png',
  'IMG_1597.png',
  'IMG_1760.png',
  'IMG_2484.png',
  'IMG_2776.png',
  'IMG_3441.png',
  'IMG_8840.png',
]

function App() {

  const karenBirthday = new Date('2018-07-15')
  // calculate age in years
  const karenAge = Math.floor((new Date().getTime() - karenBirthday.getTime()) / 1000 / 60 / 60 / 24 / 365)

  return (
    <div className="container">
      <h1 className="site-header">Welcome to karencat.com</h1>
      <p className="page-text">Karen is my cat. Here are some of her stats:
        <ul>
          <li>Age: {karenAge} years</li>
          <li>Weight: 12 lbs</li>
          <li>Favorite food: Temptations</li>
          <li>Favorite toy: stuffed carrot</li>
        </ul>
      </p>
      <p className="page-text">Here are some photos of Karen</p>
    {
      imgList.map((img, i) => {
        return (
          <img key={i} src={`/imgs/${img}`} alt={`karen pic ${i+1}`} />
        )
      })
      }  
      <h3>More coming soon. Stay tuned.</h3>
  </div>
  )
}

export default App
