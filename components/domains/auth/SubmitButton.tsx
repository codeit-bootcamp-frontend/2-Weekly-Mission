import React, { ReactNode } from "react";

import { GradientButton } from "./Auth";

const SubmitButton = ({ children }: { children: ReactNode }) => {
  return <GradientButton type="submit">{children}</GradientButton>;
};

export default SubmitButton;
