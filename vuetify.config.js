import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function () {
  return {
    icons: {
      iconfont: 'faSvg',
      values: {
        truck: { component: FontAwesomeIcon, props: { icon: 'truck' } },
        mapMarker: { component: FontAwesomeIcon, props: { icon: 'map-marker-alt' } },
      }
    }
  }
}
