import useRemoveHtmlElementFromDOM from "@/app/hooks/useRemoveHtmlElementFromDOM";
import {
    Dispatch,
    FunctionComponent,
    ReactElement,
    ReactNode,
    SetStateAction,
    useRef,
    CSSProperties,
    RefObject,
  } from "react";
  
  interface ModalWrapperProps {
    setVisibility: Dispatch<SetStateAction<boolean>>;
    visibility: boolean;
    children: ReactNode;
    styles?: CSSProperties;
    disallowOverlayFunction?: boolean;
  }
  
  const ModalWrapper: FunctionComponent<ModalWrapperProps> = ({
    visibility,
    setVisibility,
    children,
    styles,
    disallowOverlayFunction,
  }): ReactElement => {
    const modalContainerRef = useRef<HTMLDivElement>(null);
  
    useRemoveHtmlElementFromDOM(modalContainerRef as RefObject<HTMLDivElement>, visibility, 350, "flex");
  
    return (
      <div
        className={`fixed size-full top-0 left-0 z-[120] grid place-items-center sectionPadding !mt-0 p-[1.25rem] ${
          visibility ? "" : "pointer-events-none"
        }`}
        ref={modalContainerRef}
      >
        <div
          className={`bg-[rgba(0,0,0,0.8)] absolute size-full top-0 left-0 ${
              visibility
              ? "opacity-100"
              : "opacity-0 animate-overlayFadeOut"
          }`}
          onClick={() => (disallowOverlayFunction ? {} : setVisibility(false))}
        ></div>
        <div
          className={`w-full sm:w-auto sm:max-w-[90%] md:w-full md:max-w-full m-auto !z-[120] translate-y-0 bg-primary-color-sub ${
            visibility ? "animate-modalBumpIn opacity-100 translate-y-0"
              : "animate-modalBumpOut opacity-0 translate-y-[3rem]"
          }`}
          style={styles}
        >
          {children}
        </div>
      </div>
    );
  };
  
  export default ModalWrapper;
  