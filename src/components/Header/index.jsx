import { container, menu, image } from "./styles"

function Header() {
  return (
    <header css={container}>
      <div css={image}>
        <img src='https://bold.co/assets/img/logo-white-674baccb93.png' />
      </div>
      <div css={menu}>
        <nav>
          <ul>
            <li><a href="https://www.rokujs.me/">Mi negocio</a></li>
            <li><a href="https://ayuda.bold.co/?Falcon9-AdWords=&utm_term=bold&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=4969918658&hsa_cam=16921559255&hsa_grp=132534156221&hsa_ad=593186207959&hsa_src=g&hsa_tgt=kwd-26154801&hsa_kw=bold&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwu_mSBhAYEiwA5BBmf3IMZz5fzil_H7JkG_szLUQuqhOZggvtqWzw3JFcDSHn8zMblSBPvxoCo-YQAvD_BwE" target="_blank">Ayuda</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
