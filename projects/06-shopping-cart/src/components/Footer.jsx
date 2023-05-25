import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export const Footer = () => {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {JSON.stringify(filters, null, 4)}
      {/* <h4> */}
      {/*   Prueba técnica de React <span>daniel</span> */}
      {/* </h4> */}
      {/* <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}
