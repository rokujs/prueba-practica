import visaIcon from '@/assets/icons/visa.svg'
import mastercardIcon from '@/assets/icons/mastercard.svg'

import { image } from './styles'

const DICTIONARY_IMAGE = {
  visa: visaIcon,
  mastercard: mastercardIcon
}

function ImagePaymentMethod ({ method }) {
  return <img css={image} alt="card icon" src={DICTIONARY_IMAGE[method]} loading='lazy' />
}

export default ImagePaymentMethod
