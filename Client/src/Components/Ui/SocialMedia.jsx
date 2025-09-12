
import { socialIcons } from "../../assets/util";
import SocialIcon from "./SocialIcon";


const SocialMedia = () => {
    return (
        <div>
          {
            socialIcons.map((item,index)=>(
              <SocialIcon key={index + item.url} url={item.url} icon={item.icon} />
            ))
          }
        
      </div>
    );
};

export default SocialMedia;