
<script>
import AppButton from '../atoms/AppButton'
import AppLogo from '../atoms/AppLogo'
import PrimaryHead from '../molecules/PrimaryHead'
import HorizontalNav from '../molecules/HorizontalNav'

export default {
  name: 'Header',
  props:{
    links: Array
  },
  render (createElement) {
         return <div class="header"> 
          <div class="header__highlight container-fluid">
              <PrimaryHead links={this.links} isAnchor={true}/>
          </div>
         </div>
     },

}
</script>