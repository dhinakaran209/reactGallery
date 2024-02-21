import './index.css'

const ThumbnailItem = props => {
  const {details, isActive, imageChange} = props

  const {id, thumbnailAltText, thumbnailUrl} = details

  const changePhoto = () => {
    imageChange(id)
  }

  const className = isActive ? 'active' : ''

  return (
    <li className="list-item">
      <button type="button" className="btn-thumbnail" onClick={changePhoto}>
        <img
          className={`thumbnail ${className}`}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
