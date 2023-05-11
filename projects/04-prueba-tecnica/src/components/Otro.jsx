import { useCatImage } from '../hooks/useCatImage'

const Otro = () => {
  const { imageUrl } = useCatImage({ fact: 'Random fact' })
  return <>{imageUrl && <img src={imageUrl} />}</>
}

export default Otro
