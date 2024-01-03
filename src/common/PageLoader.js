import React, {useEffect} from "react";
import LoadingOverlay from "react-loading-overlay";
import { BeatLoader, PropagateLoader } from "react-spinners";
import $ from 'jquery';
const PageLoader = ({ isActive, children, individual = false }) => {

  useEffect(() => {
		if(isActive){
      $('body').addClass('overflow-hide');
		}else{
			$('body').removeClass('overflow-hide');
		}
    }, [isActive]);

  return (
    <LoadingOverlay
      active={isActive}
      spinner={
        individual ? (
          <BeatLoader color={"#FFFFFF"} />
        ) : (
          <PropagateLoader color={"#5383ff"} />
        )
      }
      styles={{
        overlay: (base) => {
          let style = { ...base, zIndex: 1038 ,position:'fixed' };
          if (!individual) {
            style.minHeight = "100vh";
          }
          return style;
        },
      }}
    >
      {children}
    </LoadingOverlay>
  );
};

export default PageLoader;
