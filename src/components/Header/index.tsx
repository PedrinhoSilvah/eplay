import { HeaderBar, LinkCart, Links, LinksItem } from './styles'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
const Header = () => (
  <HeaderBar>
    <div>
      <img src={Logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinksItem>
            <a href="#">Categorias</a>
          </LinksItem>
          <LinksItem>
            <a href="#">Novidade</a>
          </LinksItem>
          <LinksItem>
            <a href="#">Promoções</a>
          </LinksItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - Produto(s)
      <img src={Carrinho} alt="Img-Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
