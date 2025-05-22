import { createAnimation } from "@ionic/react";

const customPageTransition = (baseEl: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;

  return createAnimation()
    .addElement(enteringEl)
    .duration(200)
    .fromTo("opacity", "0", "1")
    .fromTo("transform", "translateX(100%)", "translateX(0)");
};

export default customPageTransition;
